//--------------SET UP VARIABLES AND OBJECTS--------------------

var questions = [{
    question: "In what year did Scotsman John Napier invent logarithms?",
    answers: ["1206", "1614", "1776", "1991"],
    correctAnswer: "1614"
}, {
    question: "The first flight of the Boeing 747, or Jumbo Jet, took place in this year, with passenger service offered one year later.",
    answers: ["1969", "1952", "1999", "1942"],
    correctAnswer: "1969"
}, {
    question: "Bessemer introduces his process for producing steel in this year, allowing for a dramatic increase in the output of the steel industry.",
    answers: ["1555", "1690", "1787", "1856"],
    correctAnswer: "1856" 
}, {
    question: "While imprisoned in Genoa, Marco Polo writes in this year his celebrated accounts of his travels throughout the Asian continent.",
    answers: ["1347", "1298", "1428", "1502"],
    correctAnswer: "1298"
}, {
    question: "The space shuttle, Challenger, explodes in this year, killing all on board.",
    answers: ["1968", "1987", "1991", "1986"],
    correctAnswer: "1986"
}, {
    question: "The date by which experts believe the pyramids in Egypt were completed.",
    answers: ["C. 5000 BCE", "c. 5 CE", "c. 2500 BCE", "c.300 BCE"],
    correctAnswer: "c. 2500 BCE"
}];

//-------FUNCTIONS------------------------------------------------------
$("#startBtn").on("click", function(){
    game.start();
})
//because the DONE button is dynamically created at the end of the code, 
//the document on click function needs to be used.
$(document).on("click", "#end", function(){
    game.done();
})
$(document).on("click", "#restart", function(){
    game.restart();
})
//object to hold game stats and beginning and ending functions
var game = {
    correct: 0,
    incorrect: 0,
    //120 seconds
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <=0){
            console.log("Time's up");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $("#questionsContainer").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#startBtn").remove(); 
        //loop through the array of objects to render all questions to the page in their own div.
        for (var i = 0; i < questions.length; i++){
            var questDiv = $("<div class='qA'>" + "<h2>" + questions[i].question + "</h2>" + "</div>");
            $("#questionsContainer").append(questDiv)
            for (var key in questions[i].answers){
                //append each question with a name that includes its respective number and a value that is equal to the answer
                //the values will be stored in the buttons
                var ans = ("<br><input type='radio' name='question-"+i+"' value='" + questions[i].answers[key]+"'> "+questions[i].answers[key]);
                (questDiv).append(ans);
            }
        }
        $("#questionsContainer").append("<br><button id='end'>DONE</button>")
    },
    //game.done function increases correct counters for correct answers
    // and incorrect counters for incorrect answers
    done: function(){
        for(var j = 0; j <questions.length; j++){
            $.each($("input[name='question-" + j + "']:checked"),function(){
                if($(this).val()==questions[j].correctAnswer){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            })
        }
        this.result();
        },
        //creates result screen
        result: function(){
            clearInterval(timer);
            $(".qA").remove();
            $("#questionsContainer h2").remove();
            $("#questionsContainer").html("<h2>All done!</h2>");
            $("#questionsContainer").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#questionsContainer").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            //finds questions left unanswered
            $("#questionsContainer").append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
            $("#questionsContainer").append("<br><button id='restart'>Try Again</button>");
        },
    restart: function(){
        location.reload();
    }
};

