import { Player } from '../models/Player';
import { Question } from '../models/Question';
export declare class QuizService {
    private questions;
    constructor(questions?: Question[]);
    private delay;
    addQuestion(question: Question): Promise<void>;
    removeQuestion(questionId: number): Promise<void>;
    getAllQuestions(): Promise<Question[]>;
    updateQuestion(updatedQuestion: Question): Promise<void>;
    getQuestionById(questionId: number): Promise<Question | undefined>;
    private validateQuestion;
    submitAnswer(player: Player, question: Question, selectedAnswer: number): boolean;
    reviewAnswer(question: Question, selectedAnswer: number): void;
}
//# sourceMappingURL=QuizService.d.ts.map