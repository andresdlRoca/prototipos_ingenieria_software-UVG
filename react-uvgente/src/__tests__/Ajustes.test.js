import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ajustes from '../components/Ajustes/Ajustes';
import AjusteField from '../components/Ajustes/AjusteField';

test('renders the ajustes page', () => {
  render(<Ajustes />);
  const test = screen.getByTestId('warning');
  fireEvent.click(test);
  const test1 = screen.getByTestId('danger');
  fireEvent.click(test1);
});

test('renders the Ajuste Field page', () => {
  render(<AjusteField />);
});

test('Edit ajustefield', () => {
  render(<AjusteField />);
  const test = screen.getByTestId('EDIT');
  fireEvent.click(test);
});
