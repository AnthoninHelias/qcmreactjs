import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { questionAnswers } from "../data/questionsRéponses";

function Score() {
    const location = useLocation();
    const locationState = location.state;

    // Redirige si l'état de l'emplacement est null ou non défini
    if (locationState === null || locationState === undefined) {
        return <Navigate to={{ pathname: `/qcmreactjs` }} />;
    }
    const totalQuestions = questionAnswers.length;

    const averageScore = totalQuestions / 2;

    const isAboveAverage = locationState.score > averageScore;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Score:</h1>
                <br></br>
                <div className=" bg-purple-700 h:2 ">
                {isAboveAverage && <span role="img" aria-label="Applause">Bravo 👏</span>}
                    <p>Votre score est de : {locationState.score}</p>
                </div>
            </header>
        </div>
    );
}

export default Score;
