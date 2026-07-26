import {Question} from '../models/Question';
export class QuizService{
    private questions: Question[] = [];

    constructor(questions: Question[] = []) {
        this.questions = questions;
    }
    addQuestion(question: Question): void {
        this.questions.push(question);
    }
    removeQuestion (questionId:number):void{
        this.questions = this.questions.filter(q => q.id !== questionId);

    }
    getAllQuestions(): Question[] {
        return this.questions;
    }
    updateQuestion (updatedQuestion: Question): void {
        const index = this.questions.findIndex(q => q.id === updatedQuestion.id);
        if (index !== -1) {
            this.questions[index] = updatedQuestion;
        }
    }
    getQuestionById(questionId: number): Question | undefined {
        return this.questions.find(q => q.id === questionId);
    }
}