import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Score from "./Score";
import React from "react";
import ButtonClick from "../components/ButtonClick";
import '@testing-library/jest-dom'




describe('Score', () => {
    it('renders without crashing', () => {
        render(
            (<MemoryRouter>
                <Score />
            </MemoryRouter>));
    });
});
describe('ButtonClick Component', () => {
    it('getClicked', () => {
        const mockButtonClick = jest.fn();
        render(
            <ButtonClick onClick={mockButtonClick} disabled={false}>
                Recommecer
            </ButtonClick>)
        const buttonElement = screen.getByText('Recommecer');
        fireEvent.click(buttonElement);
        expect(mockButtonClick).toHaveBeenCalled();
        expect(buttonElement).not.toHaveAttribute('disabled')
        ;});
});