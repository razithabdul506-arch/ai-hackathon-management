import { db } from "./firebase.js"
import { evaluateSubmission } from "./ai.js"

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

// Submission deadline
const submissionDeadline = new Date("2026-04-01T18:00:00").getTime()

document.getElementById("submitBtn").onclick = async ()=>{

const now = new Date().getTime()

// Block submission after deadline
if(now > submissionDeadline){

alert("Submissions are now closed.")

return

}

const name = document.getElementById("name").value
const team = document.getElementById("team").value
const desc = document.getElementById("desc").value
const demo = document.getElementById("demo").value
const github = document.getElementById("github").value
const screenshot = document.getElementById("screenshot").value

const aiScore = evaluateSubmission({
description: desc,
demo: demo,
github: github,
screenshot: screenshot
})

await addDoc(collection(db,"submissions"),{

name,
team,
description: desc,
demo,
github,
screenshot,

aiScore,
adminScore:0,
finalScore:0

})

alert("Submission successful! AI score: " + aiScore)

}