import React from "react";
import ScoreComponent from "../components/ScoreComponent";

function Score() {
    //const answer: ScoreComponentProps['answer'] = { id: 1, title: "Sample Answer", correct: true };

    return (
        <div className="App">
            <header className="App-header">
                <ScoreComponent />
            </header>
        </div>
    );
}
export default Score;