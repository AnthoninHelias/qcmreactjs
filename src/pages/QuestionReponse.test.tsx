import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import QuestionReponses from "./QuestionsReponses";
import React from "react";


describe('QuestionReponses', () => {
    it('renders without crashing', () => {
        render(
            (<MemoryRouter>
                <QuestionReponses />)
            </MemoryRouter>));
    });
});