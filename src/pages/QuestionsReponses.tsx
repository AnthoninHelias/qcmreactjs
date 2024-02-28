import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { questionAnswers } from "../data/questionsRéponses";
import AnswerColorComponent from "../components/AnswerColorComponent";

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const goToNextQuestion = () => {
        if (currentQuestionIndex < questionAnswers.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }}



    const currentQuestion = questionAnswers[currentQuestionIndex];


    return (
        <div className="App">
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                <h2>{currentQuestion.question}</h2>
                {currentQuestion.answer.map((answer) => (
                    <AnswerColorComponent key={answer.id} answer={answer} goToNextQuestion={goToNextQuestion} />
                ))}
            </header>
        </div>
    );
}

export default QuestionReponses;
