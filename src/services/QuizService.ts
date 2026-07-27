import {Question} from '../models/Question';
export class QuizService{
    private questions: Question[] = [];

    constructor(questions: Question[] = []) {
        this.questions = questions;
    }

    private delay(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

    // addQuestion(question: Question): void {
    //     this.questions.push(question);
    // }

    async addQuestion(question: Question): Promise<void> {
        await this.delay(1000);
        this.questions.push(question);
    }

    // removeQuestion (questionId:number):void{
    //     this.questions = this.questions.filter(q => q.id !== questionId);
    // }

    async removeQuestion (questionId:number): Promise<void> {
        await this.delay(1000);
        this.questions = this.questions.filter(q => q.id !== questionId);

    }


    // getAllQuestions(): Question[] {
    //     return this.questions;
    // }


   async getAllQuestions(): Promise<Question[]> {
    await this.delay(1000);

    return this.questions;
}


    // updateQuestion (updatedQuestion: Question): void {
    //     const index = this.questions.findIndex(q => q.id === updatedQuestion.id);
    //     if (index !== -1) {
    //         this.questions[index] = updatedQuestion;
    //     }
    // }

    async updateQuestion (updatedQuestion: Question): Promise<void> {
        await this.delay(1000);
        const index = this.questions.findIndex(q => q.id === updatedQuestion.id);
        if (index !== -1) {
            this.questions[index] = updatedQuestion;
        }
    }

    // getQuestionById(questionId: number): Question | undefined {
    //     return this.questions.find(q => q.id === questionId);
    // }

    async getQuestionById(questionId: number): Promise<Question | undefined> {
    await this.delay(1000);

    return this.questions.find(q => q.id === questionId);
}

}