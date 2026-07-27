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
}
exports.QuizService = QuizService;
//# sourceMappingURL=QuizService.js.map