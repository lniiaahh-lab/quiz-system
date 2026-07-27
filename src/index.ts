import {Question} from './models/Question';
//import {Quiz} from './models/Quiz';
//import {Player} from './models/Player';
import {QuizService} from './services/QuizService';
//import {Difficulty} from './types/Difficulty';

const question1:Question = {
    id:1,
    text:"What is the capital of France?",
    options:["Berlin","Madrid","Paris","Rome"],
    correctAnswer:2,
    difficulty:"Easy",
    points:10
}

const quizService = new QuizService();

async function main() {

    //console.log("Adding questions...");
    console.log(new Date(), "Adding questions...");
    await quizService.addQuestion(question1);
  

    //console.log("Questions added.");
    console.log(new Date(), "newQuestions added.");

    const questions = await quizService.getAllQuestions();

    //console.log(questions);
    console.log(new Date(), questions);

    const question = await quizService.getQuestionById(1);

    console.log(question);

    const updatedQuestion: Question = {
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

    console.log(await quizService.getAllQuestions());
}

main();