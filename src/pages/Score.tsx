import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Score() {
    const location = useLocation();
    const locationState = location.state

    // renvoie 
    if (locationState === null || locationState === undefined) {
         return <Navigate to={{pathname: `/qcmreactjs`}}/>
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Score : {locationState.score}</p>

            </header>
        </div>
    );
}
export default Score;