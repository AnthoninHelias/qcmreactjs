import React from 'react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import InputClick from "../components/InputClick";
import ButtonClick from "../components/ButtonClick";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'



describe('App', () => {
  it('renders without crashing', () => {
      console.log('3')
    render(
        (<MemoryRouter>
          <App />
        </MemoryRouter>));
  });

});
describe('InputClick Component', () => {
    console.log('4')
    it('renders InputClick component correctly', () => {
        render(<InputClick value="" onChange={() => {}} placeholder="Test Placeholder" />);
        expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
    });
});
describe('ButtonClick Component', () => {
    console.log('5')
    it('getClicked', () => {
    const mockButtonClick = jest.fn();
    render(
        <ButtonClick onClick={mockButtonClick} disabled={false}>
            Valider
        </ButtonClick>)
    const buttonElement = screen.getByText('Valider');
    fireEvent.click(buttonElement);
    expect(mockButtonClick).toHaveBeenCalled();
    expect(buttonElement).not.toHaveAttribute('disabled')
    ;});
});


