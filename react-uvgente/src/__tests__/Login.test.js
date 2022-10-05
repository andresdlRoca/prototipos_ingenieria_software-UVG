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
import router from '../../../node-api-postgres/routes/api/functions.js';
import pool from '../../../node-api-postgres/db-pg-config.js';
import { MemoryRouter } from 'react-router-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ msg: 'Error interno en la busqueda del usuario' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

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

test('Miss2', () => {
  render(<Login />, { wrapper: MemoryRouter });
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
