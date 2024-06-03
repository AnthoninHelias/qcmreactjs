import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Timer from "../components/TimerComponent";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [score, setScore] = React.useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [questions, setQuestions] = React.useState<string[]>([]);
    const [currentAnswer, setCurrentAnswer] = React.useState<{ text: string, correct: boolean }[]>([]);
    const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const fetchAllQuestions = async () => {
        try {
            const response = await axios.get(`https://qcm-api-a108ec633b51.herokuapp.com/questions`);
            const fetchedQuestions = response.data.rows.map((row: { id: number; intitule: string }) => ({
                id: row.id,
                intitule: row.intitule
            }));
            const sortedQuestions = fetchedQuestions.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
            setQuestions(sortedQuestions.map((question: { id: number; intitule: string }) => question.intitule));
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    React.useEffect(() => {
        fetchAllQuestions();
    }, []);

    const fetchNextQuestion = (score: number) => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        setSelectedAnswer(null);
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedAnswer(null); // Reset selected answer for the next question
        } else {
            console.log(score);
            navigate(`/Findejeu/${displayedText}`, { state: { score: score} });
        }
    };

    const fetchNextAnswer = async () => {
        try {
            const response = await axios.get(`https://qcm-api-a108ec633b51.herokuapp.com/reponse/${currentQuestionIndex + 1}`);
            const fetchedAnswer = response.data.rows.map((row: { titre: string, correct: boolean }) => ({
                text: row.titre,
                correct: row.correct
            }));
            setCurrentAnswer(fetchedAnswer);
        } catch (error) {
            console.error('Error fetching answer:', error);
        }
    };

    React.useEffect(() => {
        fetchNextAnswer();
    }, [currentQuestionIndex]);

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(event.target.value);
    };

    const goToNextQuestion = () => {
        if (selectedAnswer) {
            const isCorrect = currentAnswer.find(answer => answer.text === selectedAnswer)?.correct;
            if (isCorrect) {
                setScore(prevScore => {
                    const newScore = prevScore + 1
                    fetchNextQuestion(newScore);
                    return newScore
                });
                console.log("increment");

            } else {
                fetchNextQuestion(score);
            }
        }

    };

    const currentQuestion = questions[currentQuestionIndex];

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
