import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Timer from "../components/TimerComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [score, setScore] = React.useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [questions, setQuestions] = React.useState<string[]>([]);
    const [currentAnswer, setCurrentAnswer] = React.useState<string[]>([]);
    //const [answer, setAnswer] = React.useState<string[]>([]);
    const navigate = useNavigate();
    // variable temporaire
    setScore

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

    const fetchNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Si toutes les questions ont été posées, redirige vers la fin du jeu
            navigate(`/Findejeu/${displayedText}`, { state: { score } });
        }
    };
    const currentAnswerIndex = currentQuestionIndex + 1;
    const fetchNextAnswer = async () => {
        try {
            console.log(currentAnswerIndex)
            const response = await axios.get(`https://qcm-api-a108ec633b51.herokuapp.com/reponse/${currentAnswerIndex}`);
            const fetchedAnswer = response.data.rows.map((row: { titre: string }) => row.titre);
            setCurrentAnswer(fetchedAnswer);
        } catch (error) {
            console.error('Error fetching answer:', error);
        }
    };

    React.useEffect(() => {
        fetchNextAnswer();
    }, [currentQuestionIndex]);



    const goToNextQuestion = () => {
        fetchNextQuestion();
        fetchNextAnswer();
    };
    const answersList = currentAnswer.map((answer, index) => (
        <li key={index}>{answer}</li>
    ));

    console.log(answersList);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="App">
            <Timer initialTime={5777}/>
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                {currentQuestion && (
                    <p>{currentQuestion}
                        <br/>
                        <p>
                            {currentAnswer.map((answer, index) => (
                                <div key={index}>
                                    <input type="radio" id={`radio_${index}`} name="answers" value={answer}/>
                                    <label htmlFor={`radio_${index}`}>{answer}</label>
                                    <br/>
                                </div>
                            ))}
                        </p>
                    </p>


                )
                }
                {/* Bouton pour passer à la question suivante */
                }
                <button onClick={goToNextQuestion}>Suivant</button>
            </header>
        </div>
    )
        ;
}

export default QuestionReponses;
