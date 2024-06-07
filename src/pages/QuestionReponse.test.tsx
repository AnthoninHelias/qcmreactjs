import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import QuestionReponses from "./QuestionsReponses";
import React from "react";
import ButtonClick from "../components/ButtonClick";
import '@testing-library/jest-dom'



describe('QuestionReponses', () => {
    console.log('6')
    it('renders without crashing', () => {
        render(
            (<MemoryRouter>
                <QuestionReponses />
            </MemoryRouter>));
    });
});
describe('ButtonClick Component', () => {
    console.log('7')
    it('getClicked', () => {
        const mockButtonClick = jest.fn();
        render(
            <ButtonClick onClick={mockButtonClick} disabled={false}>
                Paris
            </ButtonClick>)
        const buttonElement = screen.getByText('Paris');
        fireEvent.click(buttonElement);
        expect(mockButtonClick).toHaveBeenCalled();
        expect(buttonElement).not.toHaveAttribute('disabled')
        ;});
});

//test faux
describe('ButtonClick Component False', () => {
    console.log('8')
    it('getClicked', () => {
        const mockButtonClick = jest.fn();
        render(
            <ButtonClick onClick={mockButtonClick} disabled={false}>
                Paris
            </ButtonClick>)
        const buttonElement = screen.getByText('Paris');
        fireEvent.click(buttonElement);
        expect(mockButtonClick).not.toHaveBeenCalled(); // This will fail because mockButtonClick is called
    });
});