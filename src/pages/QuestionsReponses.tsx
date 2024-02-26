import './App.css';
import * as React from 'react';
import {useParams} from "react-router-dom";
import {QuestionAnswer, questionAnswers} from "../data/questionsRéponses";

function QuestionReponses() {

    const {displayedText} = useParams<{displayedText: string}>();

    questionAnswers.map((questionAnswer: QuestionAnswer) => {
        // ce console.log est inutile mais une erreur survient si on ne la met pas
        console.log(questionAnswer.question);
        questionAnswer.answer.map((answer:{title:string, id:number, correct:boolean} ) => {
            // ce console.log est inutile mais une erreur survient si on ne la met pas
            console.log(answer.title);
        });
    });

    let index:number = 0;
    const answer = questionAnswers[index];
    const question = questionAnswers[index].question;
    // cette déclaration est inutile mais une erreur survient si on ne la met pas
    index=0;
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
