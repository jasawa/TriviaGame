
// global variables
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var intervalID;

function startQuestions() {
    console.log("I'm in the questionnaire");
    // make start button disappear
    $("#start-button").empty();

    // countdown timer
    var timeRemaining = 60;
    function timer() {
        clearInterval(intervalID);
        intervalID = setInterval(countdown, 1000);
    }
    function countdown() {
        timeRemaining--;
        $("#display-countdown").html("<h3>Time Remaining: " + timeRemaining + " seconds</h3>");
        if (timeRemaining === 0) {
            results();
        }
    }
    timer();

    // question form goes here


    

    // make a done button
    var doneButton = $("<button>");
    console.log(doneButton);
    doneButton.addClass("btn btn-primary btn-lg");
    doneButton.text("Done");
    $("#done-button").append(doneButton);
    console.log("here");
    // if done button clicked go to results page
    $("#done-button").on("click", function() {
        results();
    });
}

function results() {
    console.log("in results page now");
    $("#done-button").empty();
    clearInterval(intervalID);
}






$("#start-button").on("click", function() {
    startQuestions();
});


console.log("The app.js is connected");