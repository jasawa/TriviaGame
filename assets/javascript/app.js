
// variables
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;


function startQuestions() {
    console.log("I'm in the questionnaire");
    // make start button disappear
    $("#start-button").empty();

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
}






$("#start-button").on("click", function() {
    startQuestions();
});


console.log("The app.js is connected");