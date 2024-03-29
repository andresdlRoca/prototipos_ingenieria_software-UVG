import '@testing-library/jest-dom';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import RegistroOrg from '../components/RegistroOrganizacion/RegistroOrg';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders the Registro organización page', () => {
  render(<RegistroOrg />);
  const hello = screen.getByTestId('Hey');
  fireEvent.click(hello);
});

test('tests inputs', () => {
  render(<RegistroOrg />);
  userEvent.type(screen.getByPlaceholderText('Nombre'), 'roberto');
  expect(screen.getByPlaceholderText('Nombre').value).toBe('roberto');
  userEvent.type(screen.getByPlaceholderText('password'), 'roberto');
  expect(screen.getByPlaceholderText('password').value).toBe('roberto');
  userEvent.type(screen.getByPlaceholderText('usuario@uvg.edu.gt'), 'roberto');
  expect(screen.getByPlaceholderText('usuario@uvg.edu.gt').value).toBe(
    'roberto'
  );
  userEvent.type(screen.getByPlaceholderText('usuario2@uvg.edu.gt'), 'roberto');
  expect(screen.getByPlaceholderText('usuario2@uvg.edu.gt').value).toBe(
    'roberto'
  );
  userEvent.type(screen.getByPlaceholderText('Username'), 'roberto');
  expect(screen.getByPlaceholderText('Username').value).toBe('roberto');
  userEvent.type(screen.getByPlaceholderText('telefono'), 'asbf');
  expect(screen.getByPlaceholderText('telefono').value).toBe('asbf');
  userEvent.type(screen.getByPlaceholderText('telefono'), '12345678');
  const fileInput = screen.getByTestId('Hello');
  userEvent.upload(fileInput, 'a');
  const send = screen.getByTestId('Hey');
  fireEvent.click(send);
});

test('succesful send', () => {
  render(<RegistroOrg />);
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fue registrado con exito' };
        },
      })
    );
  });
  userEvent.type(screen.getByPlaceholderText('Nombre'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('password'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('usuario@uvg.edu.gt'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('usuario2@uvg.edu.gt'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('Username'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('telefono'), 'asbf');
  userEvent.type(screen.getByPlaceholderText('telefono'), '12345678');
  const fileInput = screen.getByTestId('Hello');
  userEvent.upload(fileInput, 'a');
  const send = screen.getByTestId('Hey');
  fireEvent.click(send);
});

test('not succesful send', () => {
  render(<RegistroOrg />);
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return { msg: 'El producto fue registrado con eito' };
        },
      })
    );
  });
  userEvent.type(screen.getByPlaceholderText('Nombre'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('password'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('usuario@uvg.edu.gt'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('usuario2@uvg.edu.gt'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('Username'), 'roberto');
  userEvent.type(screen.getByPlaceholderText('telefono'), 'asbf');
  userEvent.type(screen.getByPlaceholderText('telefono'), '12345678');
  const send = screen.getByTestId('Hey');
  fireEvent.click(send);
  fireEvent.click(send);
});
