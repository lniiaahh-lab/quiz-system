import { Question } from '../models/Question';
export declare class QuizService {
    private questions;
    constructor(questions?: Question[]);
    addQuestion(question: Question): void;
    removeQuestion(questionId: number): void;
    getAllQuestions(): Question[];
    updateQuestion(updatedQuestion: Question): void;
    getQuestionById(questionId: number): Question | undefined;
}
//# sourceMappingURL=QuizService.d.ts.map