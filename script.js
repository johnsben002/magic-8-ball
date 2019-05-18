$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "Without a doubt", "Yes - definitely", "Most likely", "Ask again later", "Cannot predict now", "Don't count on it", "My sources say no"];
$("#answer").hide();

magic8Ball.askQuestion = function(question){
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
	var random = Math.random();
	var randomArray = random*this.listOfAnswers.length;
	var numberIndex = Math.floor(randomArray);
	var answer = (this.listOfAnswers[numberIndex]);
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};
	
var onClick = function() {
	$("#answer").hide();
	setTimeout(
		function(){
	var question = prompt("ASK A YES/NO QUESTION!");
	magic8Ball.askQuestion(question);
		}, 500);
};

$("#questionButton").click( onClick );
});
