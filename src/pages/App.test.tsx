import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";


describe('App', () => {
  it('renders without crashing', () => {
    render(
        (<MemoryRouter>
          <App />)
        </MemoryRouter>));

  });
/*
  it('updates inputValue on input change', () => {
    const { getByPlaceholderText } = render(<App />);
    const inputElement = getByPlaceholderText('Entrez un nom');

    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(inputElement).toBe('John');
  });

  it('updates displayedText on button click', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputElement = getByPlaceholderText('Entrez un nom');
    const buttonElement = getByText('Valider');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(buttonElement);

    expect(getByText('John'));
  });*/

});
