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
const quizService = new QuizService_1.QuizService();
async function main() {
    console.log(new Date(), "Adding questions...");
    await quizService.addQuestion(question1);
    console.log(new Date(), "newQuestions added.");
    const questions = await quizService.getAllQuestions();
    console.log(new Date(), questions);
    const question = await quizService.getQuestionById(1);
    console.log(question);
    const updatedQuestion = {
        id: 1,
        text: "What is the capital of Germany?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 0,
        difficulty: "Medium",
        points: 15
    };
    await quizService.updateQuestion(updatedQuestion);
    console.log(await quizService.getQuestionById(1));
    await quizService.removeQuestion(1);
    console.log(await quizService.getQuestionById(1));
}
main();
//# sourceMappingURL=index.js.map