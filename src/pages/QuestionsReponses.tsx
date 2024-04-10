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
    const navigate = useNavigate();
    // variable temporaire 
    setScore

    const fetchAllQuestions = async () => {
        try {
            const response = await axios.get(`https://qcm-api-a108ec633b51.herokuapp.com/questions`);
            const fetchedQuestions = response.data.rows.map((row: any) => row.intitule);
            console.log('Fetched questions:', fetchedQuestions);
            setQuestions(fetchedQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    React.useEffect(() => {
        fetchAllQuestions();
    }, []);

    const fetchNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Si toutes les questions ont été posées, redirige vers la fin du jeu
            navigate(`/Findejeu/${displayedText}`, { state: { score } });
        }
    };

    const goToNextQuestion = () => {
        fetchNextQuestion();
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="App">
            <Timer initialTime={5} />
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                {currentQuestion && (
                    <p>{currentQuestion}</p>
                )}
                {/* Bouton pour passer à la question suivante */}
                <button onClick={goToNextQuestion}>Suivant</button>
            </header>
        </div>
    );
}

export default QuestionReponses;
