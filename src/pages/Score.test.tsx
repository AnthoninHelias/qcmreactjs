import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Score from "./Score";
import React from "react";



describe('Score', () => {
    it('renders without crashing', () => {
        render(
            (<MemoryRouter>
                <Score />)
            </MemoryRouter>));
    });
});