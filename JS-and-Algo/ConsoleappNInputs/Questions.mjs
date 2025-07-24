import PromptSync from "prompt-sync";
const prompt = PromptSync();

const quiz = [{question: "What is 2 + 2?",answer: "4"},
  {question: "What is the capital of France?",answer: "Paris"},
  {question: "What year is it?",answer: new Date().getFullYear().toString()}
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  const userAnswer = prompt("Question "+ (i+1) + ': ' + quiz[i].question +' ');
  if (userAnswer.trim().toLowerCase() === quiz[i].answer.toLowerCase()) {
    console.log("Correct!");
    score++;
  } else
    console.log('Wrong! The correct answer is:' + quiz[i].answer);
}

console.log('Final Score: ' + score + "/" + quiz.length + ' correct!');
