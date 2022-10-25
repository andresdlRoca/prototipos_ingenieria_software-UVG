import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ajustes from '../components/Ajustes/Ajustes';
import AjusteField from '../components/Ajustes/AjusteField';

test('renders the ajustes page', () => {
  render(<Ajustes />);
});

test('renders the Ajuste Field page', () => {
  render(<AjusteField />);
});

test('Edit ajustefield', () => {
  render(<AjusteField />);
  const test = screen.getByTestId('EDIT');
  fireEvent.click(test);
});

test('Edit ajustefields', () => {
  render(<AjusteField />);
  const test = screen.getByTestId('EDIT');
  fireEvent.click(test);
});
