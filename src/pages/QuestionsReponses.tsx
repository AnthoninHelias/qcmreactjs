import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
//import AnswerColorComponent from "../components/AnswerColorComponent";
import Timer, { timeUp } from "../components/TimerComponent";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [score, setScore] = React.useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [questions, setQuestions] = React.useState<any[]>([]);
    const navigate = useNavigate();
    const [response, setResponse] = React.useState<any>(null);


    const fetchQuestionById = async (id:number) => {
        try {
            const response = await axios.get(`http://localhost:8000/questions/${id}`);
            console.log(response.data.rows[0])
            setResponse(response.data.rows[0].intitule);
            return response.data;
        } catch (error) {
            console.error('Error fetching question:', error);
            return null;
        }
    };

    const fetchQuestions = async () => {
        const fetchedQuestions = [];
        for (let i = 1; ; i++) {
            const question = await fetchQuestionById(i);
             
        }
        setQuestions(fetchedQuestions);
    };

    React.useEffect(() => {
        fetchQuestions();
    }, []);

    const goToNextQuestion = async (isCorrect: boolean) => {
        let newScore = score;
        if (isCorrect) {
            newScore = score + 1;
            setScore(newScore);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate(`/Findejeu/${displayedText}`, { state: { score: newScore } });
        }
        if (timeUp) {
            navigate(`/Findejeu/${displayedText}`, { state: { score: newScore } });
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="App">
            <Timer initialTime={5} />
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                {response && (
                    <p> {(response)}</p>
                )}
                <button onClick={() => fetchQuestions}>suivant</button>
            </header>
        </div>
    );
    
}

export default QuestionReponses;
