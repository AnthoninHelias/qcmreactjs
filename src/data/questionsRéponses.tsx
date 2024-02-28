export type QuestionAnswer = {
    id: number;
    question: string;
    numberAnswer: number;
    answer: {
        id: number;
        title: string;
        correct: boolean;
    }[];
};

export const questionAnswers : QuestionAnswer[]=
    [
        {
            id: 1,
            question: "Quelle est la capitale de la France ?",
            numberAnswer: 4,
            answer: [
                {
                    id: 1,
                    title: "Paris",
                    correct: true,
                },
                {
                    id: 2,
                    title: "Berlin",
                    correct: false,
                },
                {
                    id: 3,
                    title: "Amsterdam",
                    correct: false,
                },
                {
                    id: 4,
                    title: "Tokyo",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "Quel est le plus grand océan du monde ?",
            numberAnswer: 4,
            answer: [
                {
                    id: 1,
                    title: "Océan Atlantique",
                    correct: false,
                },
                {
                    id: 2,
                    title: "Océan Indien",
                    correct: false,
                },
                {
                    id: 3,
                    title: "Océan Pacifique",
                    correct: false,
                },
                {
                    id: 4,
                    title: "Océan Artique",
                    correct: true,
                },
            ],
        }
]

