import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { questionAnswers } from "../data/questionsRéponses";

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questionAnswers.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const currentQuestion = questionAnswers[currentQuestionIndex];


    return (
        <div className="App">
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                <h2>{currentQuestion.question}</h2>
                <ul>
                    {currentQuestion.answer.map((answer) => (
                        <li key={answer.id}>
                            {answer.title}
                        </li>
                    ))}
                </ul>
                <button onClick={goToNextQuestion}>Question suivante</button>
            </header>
        </div>
    );
}

export default QuestionReponses;
