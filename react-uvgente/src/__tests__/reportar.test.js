import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportarProblema from '../components/ReportarProblema/ReportarProblema.js';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders the Reportar Problema page', () => {
  render(<ReportarProblema />);
});

test('renders  send', () => {
  render(<ReportarProblema />);
  const test = screen.getByTestId('Enviar');
  fireEvent.click(test);
});

test('renders  recieve', () => {
  render(<ReportarProblema />);
  const test = screen.getByTestId('Enviar');
  userEvent.type(
    screen.getByPlaceholderText(
      'Por favor incluir la mayor información posible'
    ),
    'rober'
  );
  fireEvent.click(test);
});

test('Hit', () => {
  render(<ReportarProblema />);
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { status: 'Login Succes' };
        },
      })
    );
  });
  const test = screen.getByTestId('Enviar');
  userEvent.type(
    screen.getByPlaceholderText(
      'Por favor incluir la mayor información posible'
    ),
    'rober'
  );
  fireEvent.click(test);
});

test('Miss', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { status: '200' };
        },
      })
    );
  });
  render(<ReportarProblema />);
  const test = screen.getByTestId('Enviar');
  userEvent.type(
    screen.getByPlaceholderText(
      'Por favor incluir la mayor información posible'
    ),
    'rober'
  );
  fireEvent.click(test);
});
