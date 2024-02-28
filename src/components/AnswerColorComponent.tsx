import React from 'react';

interface Answer {
    text: string;
    correct: boolean;
}

interface AnswerComponentProps {
    answers: Answer[];
}

const AnswerColorComponent: React.FC<AnswerComponentProps> = ({ answers }) => {
    return (
        <div>
            {answers.map((answer, index) => {
                const answerColors = answer.correct ? 'bg-green-700' : 'bg-red-700';

                return (
                    <div key={index} className={`answer ${answerColors}`}>
                        {`answer ${answerColors}`}
                    </div>
                );
            })}
        </div>
    );
};

export default AnswerColorComponent;