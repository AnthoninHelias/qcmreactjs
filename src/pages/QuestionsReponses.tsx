import './App.css';
import * as React from 'react';
import {useParams} from "react-router-dom";
import {QuestionAnswer, questionAnswers} from "../data/questionsRéponses";

function QuestionReponses() {

    const {displayedText} = useParams<{displayedText: string}>();

    questionAnswers.map((questionAnswer: QuestionAnswer) => {
        console.log(questionAnswer.question);
        questionAnswer.answer.map((answer:{title:string, id:number, correct:boolean} ) => {
            console.log(answer.title);
        });
    });

    const answer = questionAnswers[0];
    const question = questionAnswers[0].question;

    return (
        <div className="App">
            <header className="App-header">

                <a>
                    Hello Questions

                </a>
                <p>Nom du joueur : {displayedText}</p>
                {
                    // affiche la question
                    question
                }
                {
                    // affiche la réponse
                    answer.answer.map((answer:{title:string, id:number, correct:boolean} ) => { return <p>{answer.title} </p> })
                }




            </header>

        </div>
    );
}


export default QuestionReponses;
