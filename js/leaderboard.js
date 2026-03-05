import { db } from "./firebase.js";

import {
collection,
onSnapshot,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const leaderboard = document.getElementById("leaderboard");
const podium = document.getElementById("podium");

async function initLeaderboard(){

// check publish status first
const settingDoc = await getDoc(doc(db,"settings","leaderboard"));

if(!settingDoc.exists() || settingDoc.data().public !== true){

document.body.innerHTML = `
<h1 style="text-align:center;margin-top:100px;font-size:28px">
Leaderboard will be revealed after evaluation
</h1>
`;

return;
}

// only load leaderboard if published
onSnapshot(collection(db,"submissions"),(snapshot)=>{

let teams = [];

snapshot.forEach((doc)=>{
teams.push(doc.data());
});

teams.sort((a,b)=>b.finalScore-a.finalScore);

renderLeaderboard(teams);

});

}

function renderLeaderboard(teams){

leaderboard.innerHTML="";
podium.innerHTML="";

const top3 = teams.slice(0,3);

const medals=["🥇","🥈","🥉"];

top3.forEach((team,i)=>{

podium.innerHTML+=`

<div class="bg-white p-6 rounded-xl shadow text-center">

<h2 class="text-4xl">${medals[i]}</h2>

<h3 class="text-xl font-bold mt-2">
Team ${team.team}
</h3>

<p>Score: ${team.finalScore.toFixed(2)}</p>

</div>
`;

});

teams.forEach((team,i)=>{

leaderboard.innerHTML+=`

<div class="bg-white p-4 mb-3 rounded shadow flex justify-between">

<span>Rank ${i+1} — Team ${team.team}</span>

<span>${team.finalScore.toFixed(2)}</span>

</div>
`;

});

}

initLeaderboard();