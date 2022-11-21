import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login/Login';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MemoryRouter } from 'react-router-dom';

test('renders the Login page', () => {
  render(<Login />, { wrapper: MemoryRouter });
});

test('Change Email', () => {
  render(<Login />, { wrapper: MemoryRouter });
  const test = screen.getByPlaceholderText('name@example.com');
  expect(test.value).toBe('');

  userEvent.type(screen.getByPlaceholderText('name@example.com'), 'rober');
  expect(screen.getByPlaceholderText('name@example.com').value).toBe('rober');
});

test('Change Password', () => {
  render(<Login />, { wrapper: MemoryRouter });
  const test1 = screen.getByPlaceholderText('Contraseña');
  expect(test1.value).toBe('');

  userEvent.type(screen.getByPlaceholderText('Contraseña'), 'rober');
  expect(screen.getByPlaceholderText('Contraseña').value).toBe('rober');
});

test('Hit', () => {
  render(<Login />, { wrapper: MemoryRouter });
  const req = jest.fn(),
    res = { redirect: jest.fn() },
    next = jest.fn();
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'Login Succes' };
        },
      })
    );
  });
  const colorButton = screen.getByTestId('Entrada');
  userEvent.type(screen.getByPlaceholderText('Contraseña'), 'roberto');
  expect(screen.getByPlaceholderText('Contraseña').value).toBe('roberto');
  userEvent.type(screen.getByPlaceholderText('name@example.com'), 'roberto');
  expect(screen.getByPlaceholderText('name@example.com').value).toBe('roberto');
  fireEvent.click(colorButton);
});

test('Miss2', () => {
  render(<Login />, { wrapper: MemoryRouter });
  const req = jest.fn(),
    res = { redirect: jest.fn() },
    next = jest.fn();
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'Login Succs' };
        },
      })
    );
  });
  const colorButton = screen.getByTestId('Entrada');
  userEvent.type(screen.getByPlaceholderText('Contraseña'), 'roberto');
  expect(screen.getByPlaceholderText('Contraseña').value).toBe('roberto');
  userEvent.type(screen.getByPlaceholderText('name@example.com'), 'roberto');
  expect(screen.getByPlaceholderText('name@example.com').value).toBe('roberto');
  fireEvent.click(colorButton);
});

test('Miss', () => {
  render(<Login />, { wrapper: MemoryRouter });
  const colorButton = screen.getByTestId('Entrada');
  expect(screen.getByPlaceholderText('Contraseña').value).toBe('');
  fireEvent.click(colorButton);
  expect(screen.getByText('Ups...').innerHTML).toBe('Ups...');
});
