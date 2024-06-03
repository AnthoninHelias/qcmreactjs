import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Timer from "../components/TimerComponent";
import { useApi } from "../hooks/useApi";

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();

    const {score, currentQuestion, currentAnswer, selectedAnswer, handleAnswerChange, goToNextQuestion} = useApi(displayedText);

    return (
        <div className="App">
            <Timer initialTime={5777} />
            <header className="App-header">
                <p>Score: {score}</p>
                <p>Bonjour: {displayedText}</p>
                {currentQuestion && (
                    <div>
                        <p>{currentQuestion}</p>
                        <br />
                        <div>
                            {currentAnswer.map((answer, index) => (
                                <div key={index} className="answer-option">
                                    <input
                                        type="radio" id={`radio_${index}`} name="answers" value={answer.text}
                                        onChange={handleAnswerChange} checked={selectedAnswer === answer.text}
                                    />
                                    <label htmlFor={`radio_${index}`}>
                                        {answer.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <button onClick={goToNextQuestion}>Suivant</button>
            </header>
        </div>
    );
}

export default QuestionReponses;
