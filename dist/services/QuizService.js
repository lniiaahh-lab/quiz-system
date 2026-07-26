"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
class QuizService {
    questions = [];
    constructor(questions = []) {
        this.questions = questions;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    removeQuestion(questionId) {
        this.questions = this.questions.filter(q => q.id !== questionId);
    }
    getAllQuestions() {
        return this.questions;
    }
    updateQuestion(updatedQuestion) {
        const index = this.questions.findIndex(q => q.id === updatedQuestion.id);
        if (index !== -1) {
            this.questions[index] = updatedQuestion;
        }
    }
    getQuestionById(questionId) {
        return this.questions.find(q => q.id === questionId);
    }
}
exports.QuizService = QuizService;
//# sourceMappingURL=QuizService.js.map