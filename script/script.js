alert("Dangal Greetings! Welcome to our Student Score Evaluator.");

// onClick function
function btnfunction() {
    let name;
    let remark;
    let score;
    let choice;

    // validate name
    do {
        name = prompt("Enter your name:");

        if (name === null) {
            alert("Evaluation cancelled.");
            break;
        } 
        else if (!isNaN(name) || name.trim() === "" || !/^[a-zA-Z0-9]+$/.test(name)) {
            alert("Please enter a valid name.");
        }
    } while(name.trim() === "" || !isNaN(name) || !/^[a-zA-Z0-9]+$/.test(name));

    // ask user to enter score
    if (name != null) {
        do {
            score = prompt("Enter your score:");

            if (score == null) {
                alert("Evaluation cancelled.");
                break;
            } else if (score.trim() == "" || isNaN(score) || score <= 0 || score > 100) {
                alert("Invalid score! Please enter a valid score between 1 to 100.");
            } else {
                remark = evaluateScore(score);
            }
        } while(score.trim() == "" || isNaN(score) || score <= 0 || score > 100);
    }

    // validate score
    if (score != null) {
        choice = confirm("Do you want to continue?");

        if (choice) {
            document.getElementById("result").innerHTML =
                "<p><strong>Name:</strong> " + name + "</p>" +
                "<p><strong>Score:</strong> " + score + "</p>" +
                "<p><strong>Remarks:</strong> " + remark + "</p>";
        }
        else {
            alert("Evaluation cancelled.");
        }
    }
}

function evaluateScore(score) {
    
    if (score >= 90 && score <= 100) { return "Excellent"; }
    else if (score >= 75) { return "Passed"; } 
    else { return "Failed"; }
}