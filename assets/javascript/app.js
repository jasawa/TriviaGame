
function startQuestions() {
    console.log("I'm in the questionnaire");
    $("#start-button").empty();
}


$("#start-button").on("click", function() {
    startQuestions();
});


console.log("The app.js is connected");