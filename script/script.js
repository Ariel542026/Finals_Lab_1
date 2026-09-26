
alert("Welcome to the Grade Analyzer!");

let name = prompt("Enter your name:");
let score = prompt("Enter your score:");

if (name === "" || score === "") {  
    document.getElementById("result").innerHTML =
        "Invalid input. Please enter both your name and score.";

} else if (score <= 0 || score > 100 || isNaN(score)) {
    document.getElementById("result").innerHTML =
        "Invalid score.";

} else {
    let proceed = confirm("Do you want to continue?");

    if (proceed) {
        let result = evaluateScore(score);

        document.getElementById("result").innerHTML =
            "Name: " + name + "<br>" +
            "Score: " + score + "<br>" +
            "Remark: " + result;

    } else {
        document.getElementById("result").innerHTML =
            "Operation cancelled.";
    }
}


function evaluateScore(score) {

    if (score >= 90 && score <= 100) {
        return "Excellent";
    } else if (score >= 75 && score <= 89) {
        return "Passed";
    } else if (score < 75) {
        return "Failed";
    } else {
        return "Invalid score";
    }

}