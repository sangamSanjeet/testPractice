// script.js

// Define variables for DOM elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("options");
const timerElement = document.getElementById("time-left");
const scoreElement = document.getElementById("current-score");
const nextButton = document.getElementById("next-button");

// Define the quiz data
const quizData = [
	{
		question: "What is the capital of France?",
		answers: ["Paris", "London", "Berlin", "Madrid"],
		correctAnswer: "Paris",
	},
	{
		question: "Which planet is known as the Red Planet?",
		answers: ["Earth", "Mars", "Venus", "Jupiter"],
		correctAnswer: "Mars",
	},
	{
		question: "What is 1+1?",
		answers: ["2", "1", "3", "4"],
		correctAnswer: "2",
	},
];

// Add your js code here

let finalResult = 0;
let questionDisplayedIndex = 0;
let timer = null;

scoreElement.innerText = finalResult;

const showQuestion = (questionDisplayedIndex) => {
	const question = quizData[questionDisplayedIndex];
	questionElement.innerHTML = null;
	answersElement.innerHTML = null;
	showTimer();
	questionElement.textContent = question.question;
	for (let i = 0; i < question.answers.length; i++) {
		let button = document.createElement("button");
		let answer = question.answers[i];
		button.textContent = answer;
		button.addEventListener("click", (event) => {
			clearInterval(timer);
			if (button.textContent === question.correctAnswer) {
				finalResult++;
				console.log("yes");
				scoreElement.innerText = finalResult;
			}
			nextQuestion();
		});
		answersElement.append(button);
	}
};

const showResult = () => {
	questionElement.innerText = "Quiz completed!";
    timerElement.style.display = "none";
    nextButton.style.display = "none";
    answersElement.innerHTML = null;
};

const nextQuestion = () => {
	questionDisplayedIndex++;
	if (questionDisplayedIndex < quizData.length) {
		showQuestion(questionDisplayedIndex);
	} else {
		showResult();
	}
};

const showTimer = () => {
	let timeLeft = 60;
	timerElement.innerText = timeLeft;

	timer = setInterval(() => {
		timeLeft--;
		timerElement.innerText = timeLeft;

		if (timeLeft <= 0) {
			clearInterval(timer);
			nextQuestion();
		}
	}, 1000);
};

nextButton.addEventListener("click", nextQuestion);

showQuestion(questionDisplayedIndex);
