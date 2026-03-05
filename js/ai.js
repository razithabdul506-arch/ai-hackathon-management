
export function evaluateSubmission(data){

let score = 0

// Problem explanation
if(data.description.length > 60){
score += 3
}

// UI proof
if(data.screenshot){
score += 1
}

// Screenshot presence
if(data.screenshot){
score += 1
}

// Demo link
if(data.demo && data.demo.includes("http")){
score += 2
}

// GitHub repository
if(data.github && data.github.includes("github")){
score += 2
}

if(score > 10) score = 10

return score

}