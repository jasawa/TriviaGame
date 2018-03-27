
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

    $("#questions-placeholder").html("<img src='assets/images/eiffel-tower.jpg' alt='Eiffel Tower'>");


    //var showImage = $("<img>");
    //var images = ["../images/eiffel-tower.jpg"];

    //showImage.attr('src=' + images[0]);
    //console.log(images[0]);

    //$("#questions-placeholder").append(showImage + images[0]);
    //function displayImage() {
    //  $("#questions-placeholder").html("<img src='../images/eiffel-tower.jpg>");
    //}
    //displayImage();


    var quesStr = $("<h3>").text("This iconic landmark is found in which city?");
    $("#questions-placeholder").append(quesStr);

    var form1 = $("<form>")
    form1.addClass("form-check");
    $("#questions-placeholder").append(form1);

    var input1 = $("<input>");
    input1.addClass("form-check-input");
    input1.attr({type: "radio", name: "optradio", id: "option1", value: "1"});
    $("#questions-placeholder").append(input1 + "Madrid");

    var input2 = $("<input>");
    input2.addClass("form-check-input");
    input2.attr({type: "radio", name: "optradio", id: "option2", value: "2"});
    $("#questions-placeholder").append(input2 + "New York");




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
    $("#question-container").empty();
    clearInterval(intervalID);
    $("#end-note").html("<h3>Hope you enjoyed your trip!</h3>");
    $("#correct").text("Correct Answers: " + numCorrect);
    $("#incorrect").text("Incorrect Answers: " + numWrong);
    $("#unanswered").text("Unanswered: " + numUnanswered);

}






$("#start-button").on("click", function() {
    startQuestions();
});


console.log("The app.js is connected");