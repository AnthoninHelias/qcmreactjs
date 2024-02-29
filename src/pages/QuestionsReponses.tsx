import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { questionAnswers } from "../data/questionsRéponses";
import AnswerColorComponent from "../components/AnswerColorComponent";
import Timer, {timeUp} from "../components/TimerComponent";
import { useNavigate } from "react-router-dom";


function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [score, setScore] = React.useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const navigate = useNavigate();
    const goToNextQuestion = async (isCorrect : boolean ) => {
        let newScore = score;
        if (isCorrect) {
            newScore = score + 1;
            setScore(newScore);
        }
        if (currentQuestionIndex < questionAnswers.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else {
            navigate(`/Findejeu/${displayedText}` , { state: { score: newScore }});
        }
        if (timeUp) {
            navigate(`/Findejeu/${displayedText}` , { state: { score: newScore }});
        }
    };


    



    const currentQuestion = questionAnswers[currentQuestionIndex];


    return (

        <div className="App">
            <Timer initialTime={300} />
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                <h2>{currentQuestion.question}</h2>
                {currentQuestion.answer.map((answer) => (

                    <AnswerColorComponent key={answer.id} answer={answer} goToNextQuestion={() => goToNextQuestion(answer.correct)} /> 

                ))}
            </header>
        </div>
    );
}

export default QuestionReponses;
