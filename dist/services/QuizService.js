"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
class QuizService {
    questions = [];
    constructor(questions = []) {
        this.questions = questions;
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }
    async addQuestion(question) {
        this.validateQuestion(question);
        await this.delay(1000);
        this.questions.push(question);
    }
    async removeQuestion(questionId) {
        await this.delay(1000);
        this.questions = this.questions.filter(q => q.id !== questionId);
    }
    async getAllQuestions() {
        await this.delay(1000);
        return this.questions;
    }
    async updateQuestion(updatedQuestion) {
        await this.delay(1000);
        const index = this.questions.findIndex(q => q.id === updatedQuestion.id);
        if (index !== -1) {
            this.questions[index] = updatedQuestion;
        }
    }
    async getQuestionById(questionId) {
        await this.delay(1000);
        return this.questions.find(q => q.id === questionId);
    }
    validateQuestion(question) {
        if (question.options.length < 2) {
            throw new Error("A question must have at least two options.");
        }
        if (question.text.trim() === "") {
            throw new Error("Question text cannot be empty.");
        }
        if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) {
            throw new Error("Correct answer index is out of bounds.");
        }
        if (question.points <= 0) {
            throw new Error("Points cannot be negative or zero.");
        }
        if (question.id <= 0) {
            throw new Error("Question ID cannot be negative or zero.");
        }
        for (const option of question.options) {
            if (option.trim() === "") {
                throw new Error("Question options cannot be empty.");
            }
        }
    }
    submitAnswer(player, question, selectedAnswer) {
        if (selectedAnswer === question.correctAnswer) {
            player.score += question.points;
            return true;
        }
        return false;
    }
    reviewAnswer(question, selectedAnswer) {
        console.log("Question:", question.text);
        console.log("My Answer:", question.options[selectedAnswer]);
        if (selectedAnswer === question.correctAnswer) {
            console.log("Correct!");
        }
        else {
            console.log("Incorrect. The correct answer is:", question.options[question.correctAnswer]);
        }
    }
}
exports.QuizService = QuizService;
//# sourceMappingURL=QuizService.js.map