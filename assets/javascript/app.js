
// global variables
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 5;
var intervalID;

// variables for questionnaire
 var quesImage = ["img src='assets/images/eiffel-tower.jpg alt='Eiffel Tower'", "img src='assets/images/las-vegas.jpg alt='The Las Vegas strip'", "img src='assets/images/machu-pichu.jpg alt='panoramic view above ancient ruins'", "img src='assets/images/moscow.jpg alt='St. Basil's colorful spires", "img src='assets/images/petra.jpg alt='facade of church-like structure carved in sandstone'"];
 var myQues = ["This iconic landmark is found in which city?", "The nightlife shines in which city?", "High in the surrounding mountains, this is which city?", "If you see this architecture, you know you are in which city?", "These ruins are all that is left of this amazing city."];
 var cityChoices = ["Moscow", "Las Vegas", "Paris", "Petra", "Machu Pichu"];
 var correctAns = ["Paris", "Las Vegas", "Machu Pichu", "Moscow", "Petra"];

// array to store player choices
var playerChoice = [];

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

    // Trying to dynamicallyt generate the question form 

    $("#questions-placeholder").html("<img src='assets/images/eiffel-tower.jpg' alt='Eiffel Tower'>");


    // QUESTION 1 as proof of concept
    var quesStr = $("<h3>").text("This iconic landmark is found in which city?");
    $("#questions-placeholder").append(quesStr);

    event.preventDefault();
    var form1 = $("<form>")
    form1.addClass("form-check");
    $("#questions-placeholder").append(form1);

    // Answer option 1
    var input1 = $("<input>");
    input1.addClass("form-check-input");
    input1.attr({type: "radio", name: "cities", value: "1"});
    $(".form-check").append(input1);

    var label1 = $("<label>");
    label1.addClass("form-check-label");
    $(".form-check").append(label1);

    $(".form-check-label").append("<p>Madrid</p>");
  
    // Answer Option 2
    var input2 = $("<input>");
    input2.addClass("form-check-input");
    input2.attr({type: "radio", name: "cities", value: "2"});
    $(".form-check").append(input2);

    var label2 = $("<label>");
    label2.addClass("form-check-label");
    $(".form-check").append(label2);

    $(".form-check-label").append("<p>Paris</p>");
  
// variables to store player's choices will be pushed into playerChoice array after done button is pressed or timer runs out


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
    $("#question-container").hide();
    clearInterval(intervalID);

    /*
    for (var i=0; i<5; i++) {
        if (playerChoice[i] == correctAns[i]) {
            numCorrect++;
        } 
        else {
            numwrong++;
        }
    }
    */
    
    $("#end-note").html("<h3>Hope you enjoyed your trip!</h3>");
    $("#correct").text("Correct Answers: " + numCorrect);
    $("#incorrect").text("Incorrect Answers: " + numWrong);
    $("#unanswered").text("Unanswered: " + numUnanswered);

}



// Opening page
//$("#question-container").hide();

$("#start-button").on("click", function() {
    startQuestions();
});

