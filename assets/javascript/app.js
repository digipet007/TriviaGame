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
    $("#startBtn").remove();
    //loop through the array of objects to render all questions to the page in their own div.
    for (var i = 0; i < questions.length; i++){
        $("#questionsContainer").append("<div class='qA'>" + "<h2>" + questions[i].question + "</h2>" + "</div>") 
        // .append("<input type='radio' name='question-"+i+"' value='" + questions[i].answers+"'> "+questions[i].answers);
        console.log(questions[i].answers.length);
        for (var j = 0; j < 4; i++){
            console.log(questions[i]);
            //radio input type means you can only select one of the options
            //append each question with a name equal to the number of the question and a value that is equal to the answer
            //the values will be stored in the buttons
            $("#qA").append("<input type='radio' name='question-"+i+"' value='" + questions[i].answers+"'>"+questions[i].answers);
        }
    }
})

