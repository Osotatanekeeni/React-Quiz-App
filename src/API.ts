import { shuffleArray } from "./utils";

export type Question = {
    // category: string;
    correct_answer: string;
    // difficulty: string;
    incorrect_answers: string[];
    question: string;
    // type: string;

}

export type QuestionState = Question & { answers: string[] };


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    // const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // const data = await (await fetch(endpoint)).json();
    const data = [
        {
            question: 'What is my name',
            correct_answer: 'Tatane',
            incorrect_answers: ['John', 'Sinesme', 'Osomonwane'],
        },

        {
            question: 'What is the capital of Nigeria',
            correct_answer: 'Abuja',
            incorrect_answers: ['Lagos', 'Rivers', 'Abia'],
        }
    ]

    
    return data.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer
            ]),
        }
    ))
}