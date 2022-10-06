import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BandejaEntrada from '../components/Bandeja_Entrada/BandejaEntrada';
import MensajeUI from '../components/Bandeja_Entrada/BandejaEntrada';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('renders the Bandeja Entrada page', () => {
  render(<BandejaEntrada />);
});

test('renders Maria page', () => {
  render(<BandejaEntrada />);
  const test = screen.getByTestId('Message2');
  userEvent.click(test);
});

test('renders Fulano page', () => {
  render(<BandejaEntrada />);
  const test = screen.getByTestId('Message1');
  userEvent.click(test);
});

test('renders the MensajeUI page', () => {
  render(<MensajeUI />);
});

test('UI', () => {
  render(<MensajeUI />);
  const test = screen.getByPlaceholderText('Escribe un mensaje');
  expect(test.value).toBe('');
  fireEvent.keyPress(test, { key: 'Enter', code: 13, charCode: 13 });

  userEvent.type(screen.getByPlaceholderText('Escribe un mensaje'), 'rober');
  expect(screen.getByPlaceholderText('Escribe un mensaje').value).toBe('rober');
  fireEvent.keyPress(test, { key: 'Enter', code: 13, charCode: 13 });
  expect(setTimeout).toHaveBeenCalledTimes(2);
});

test('close', () => {
  render(<MensajeUI />);
  const test = screen.getByTestId('close');
  userEvent.click(test);
});
