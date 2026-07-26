export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
}
console.log('Hello, World!');