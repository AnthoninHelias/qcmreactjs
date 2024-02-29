import React, { useState } from 'react';

function Score() {
    
    const [score] = useState(0);


    /*const handleAnswer = (isCorrect:boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };*/

    return (
        <div className="App">
            <header className="App-header">
                <p>Score: {score}</p>
            </header>
        </div>
    );
}

export default Score;
