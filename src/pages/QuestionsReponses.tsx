import './App.css';
import * as React from 'react';
import {useParams} from "react-router-dom";

function QuestionReponses() {

const {displayedText} = useParams<{displayedText: string}>();

    return (
        <div className="App">
            <header className="App-header">

                <a>
                    Hello Questions
                </a>
                <p>Nom du joueur : {displayedText}</p>

            </header>

        </div>
    );
}


export default QuestionReponses;
