import React from 'react';
import {render, fireEvent, getByPlaceholderText , screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import InputClick from "../components/InputClick";


describe('App', () => {
  it('renders without crashing', () => {
    render(
        (<MemoryRouter>
          <App />)
        </MemoryRouter>));

  });
/*
    it('handles input change correctly', () => {
        render(
            (<MemoryRouter>
                <App />)
            </MemoryRouter>));
        const inputElement = screen.getByPlaceholderText('Entrez un nom');

        fireEvent.change(inputElement, { target: { value: 'John' } });

        expect(inputElement.value).toBe('John');
    });
/*
  it('updates displayedText on button click', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputElement = getByPlaceholderText('Entrez un nom');
    const buttonElement = getByText('Valider');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(buttonElement);

    expect(getByText('John'));
  });*/

});
describe('InputClick Component', () => {
    // Test case for rendering the InputClick component
    it('renders InputClick component correctly', () => {
        // Render the InputClick component
        render(<InputClick value="" onChange={() => {}} placeholder="Test Placeholder" />);

        // Add more assertions based on your component's content and structure
        expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
    });
});

