"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuizService_1 = require("./services/QuizService");
const question1 = {
    id: 1,
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2,
    difficulty: "Easy",
    points: 10
};
const question2 = {
    id: 2,
    text: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 1,
    difficulty: "Medium",
    points: 20
};
const quiz1 = {
    id: 1,
    title: "My Quiz",
    questions: []
};
const player1 = {
    id: 1,
    name: "John Doe",
    score: 0
};
const quizService = new QuizService_1.QuizService();
async function main() {
    console.log(new Date(), "Adding questions...");
    await quizService.addQuestion(question1);
    await quizService.addQuestion(question2);
    const questions = await quizService.getAllQuestions();
    quiz1.questions = questions;
    console.log(new Date(), "Questions added.");
    console.log(new Date(), questions);
    console.log(new Date(), "Finished adding questions.");
    console.log("Quiz:");
    console.log(quiz1);
    console.log("----------------");
    console.log("Player:");
    console.log(player1);
    console.log("----------------");
    console.log("Questions:");
    console.log(questions);
    console.log("----------------");
    console.log("Player answering questions...");
    quizService.submitAnswer(player1, question1, 2);
    quizService.reviewAnswer(question1, 2);
    console.log("Player score:", player1.score);
    quizService.submitAnswer(player1, question2, 0);
    quizService.reviewAnswer(question2, 0);
    console.log("Player score:", player1.score);
    console.log("----------------");
    console.log("Final Player:");
    console.log(player1);
}
main();
//# sourceMappingURL=index.js.map