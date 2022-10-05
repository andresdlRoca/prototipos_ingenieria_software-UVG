import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Singup from '../components/Signup/Singup';

test('renders the New Side Bar', () => {
  render(<Singup />);
});

test('Change Email', () => {
  render(<Singup />);
  const test = screen.getByTestId('username');
  expect(test.value).toBe('');

  userEvent.type(screen.getByTestId('username'), 'rober');
  expect(screen.getByTestId('username').value).toBe('rober');

  const test1 = screen.getByTestId('email');
  expect(test1.value).toBe('');

  userEvent.type(screen.getByTestId('email'), 'rober');
  expect(screen.getByTestId('email').value).toBe('rober');

  const test2 = screen.getByTestId('password');
  expect(test2.value).toBe('');

  userEvent.type(screen.getByTestId('password'), 'rober');
  expect(screen.getByTestId('password').value).toBe('rober');

  const test4 = screen.getByTestId('confirm-password');
  expect(test4.value).toBe('');

  userEvent.type(screen.getByTestId('confirm-password'), 'rober');
  expect(screen.getByTestId('confirm-password').value).toBe('rober');

  const colorButton = screen.getByTestId('Enviar');
  fireEvent.click(colorButton);
});

test('Miss', () => {
  render(<Singup />);
  const colorButton = screen.getByTestId('Enviar');
  expect(screen.getByTestId('password').value).toBe('');
  fireEvent.click(colorButton);
  expect(screen.getByText('Ups...').innerHTML).toBe('Ups...');
});
