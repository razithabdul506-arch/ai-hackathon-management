import { db } from "./firebase.js";

import {
collection,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("ADMIN JS LOADED");

const container = document.getElementById("submissions");

async function loadSubmissions(){

const snapshot = await getDocs(collection(db,"submissions"));

snapshot.forEach((docSnap)=>{

const data = docSnap.data();

const div = document.createElement("div");

div.className = "bg-white p-4 mb-4 rounded shadow";

div.innerHTML = `
<p class="font-bold">Team ${data.team} — ${data.name}</p>

<p>AI Score: ${data.aiScore}</p>

<input id="${docSnap.id}" type="number" placeholder="Admin score"
class="border p-2 mt-2">

<button onclick="score('${docSnap.id}',${data.aiScore})"
class="bg-blue-600 text-white px-3 py-1 ml-2 rounded">
Save Score
</button>
`;

container.appendChild(div);

});

}

window.score = async(id,ai)=>{

const adminScore = Number(document.getElementById(id).value);

const finalScore = (ai*0.3)+(adminScore*0.7);

await updateDoc(doc(db,"submissions",id),{
adminScore,
finalScore
});

alert("Score saved");

};

document.getElementById("publishBtn").addEventListener("click", async ()=>{

console.log("Publish button clicked");

await updateDoc(doc(db,"settings","leaderboard"),{
public:true
});

alert("Leaderboard Published!");

});

loadSubmissions();