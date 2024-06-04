import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import InputClick from "../components/InputClick";
import ButtonClick from "../components/ButtonClick";


describe('App', () => {
  it('renders without crashing', () => {
    render(
        (<MemoryRouter>
          <App />
        </MemoryRouter>));
  });
});
describe('InputClick Component', () => {
    it('renders InputClick component correctly', () => {
        render(<InputClick value="" onChange={() => {}} placeholder="Test Placeholder" />);
        expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
    });
});
describe('ButtonClick Component', () => {
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


