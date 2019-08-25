//--------------SET UP VARIABLES AND OBJECTS--------------------

var questions = [{
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3"
}, {
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3"
}, {
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3" 
}, {
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3"
}, {
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3"
}, {
    question: "??",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3"
}];

//-------FUNCTIONS------------------------------------------------------
$("#startBtn").on("click", function(){
    game.start();
})
//object to hold game stats and beginning and ending functions
var game = {
    correct: 0,
    incorrect: 0,
    //120 seconds
    counter: 20,
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
                //radio input type means you can only select one of the options
                //append each question with a name equal to the number of the question and a value that is equal to the answer
                //the values will be stored in the buttons
                var ans = ("<input type='radio' name='question-"+i+"' value='" + questions[i].answers[key]+"'> "+questions[i].answers[key]);
                (questDiv).append(ans);
            }
        }
    },
    //game.done function increases correct counters for correct answers
    // and incorrect counters for incorrect answers
    done: function(){
        //looks for any input type that has the name of question-1 and is currently checked
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        })
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        })
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        })
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
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
        }
    // }
}

