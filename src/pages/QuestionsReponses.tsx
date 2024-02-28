import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { questionAnswers } from "../data/questionsRéponses";
import ButtonClick from "../components/ButtonClick";

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [changeColor, setChangeColor] = React.useState(false);
    const goToNextQuestion = () => {
        setChangeColor(!changeColor);
        setTimeout(() => { if (currentQuestionIndex < questionAnswers.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setChangeColor(changeColor);
        }}, 1000);


    };



    const currentQuestion = questionAnswers[currentQuestionIndex];


    return (
        <div className="App">
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                <h2>{currentQuestion.question}</h2>
                    {currentQuestion.answer.map((answer) => {
                        let answerColors = '';
                        if (answer.correct){ answerColors = 'bg-green-700';}else{  answerColors = 'bg-red-700';}
                        return(
                       <div className='container'>
                        <ButtonClick key={answer.id} className={` h-12 px-6 m-2  ${(changeColor === true)? `${(answerColors)}`:'bg-purple-700'}`} onClick={goToNextQuestion} disabled={false} submit={true}>
                        {answer.title}
                        </ButtonClick>
                        </div>
                    )})}
            </header>
        </div>
    );
}

export default QuestionReponses;
