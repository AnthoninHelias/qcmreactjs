import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
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
            //console.log(response.data.rows[0])
            return response.data.rows[0].intitule;
        } catch (error) {
            console.error('Error fetching question:', error);
            return null;
        }
    };

    const fetchNextQuestion = async () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Si toutes les questions ont été posées, redirige vers la fin du jeu
            navigate(`/Findejeu/${displayedText}`, { state: { score } });
        }
    };

    const fetchAllQuestions = async () => {
        const fetchedQuestions = [];
        for (let i = 1; ; i++) {
            const question = await fetchQuestionById(i);
            if (question) {
                fetchedQuestions.push(question);
            } else {
                break; // Arrête la boucle si aucune question n'est récupérée
            }
        }
        setQuestions(fetchedQuestions);
    };

    React.useEffect(() => {
        fetchAllQuestions();
    }, []);

    const goToNextQuestion = (isCorrect: boolean) => {
        let newScore = score;
        if (isCorrect) {
            newScore = score + 1;
            setScore(newScore);
        }
        fetchNextQuestion();
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="App">
            <Timer initialTime={5} />
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                {currentQuestion && (
                    <p> {currentQuestion}</p>
                )}
                {/* Bouton pour passer à la question suivante */}
                <button onClick={() => goToNextQuestion(true)}>Suivant</button>
            </header>
        </div>
    );
}

export default QuestionReponses;
