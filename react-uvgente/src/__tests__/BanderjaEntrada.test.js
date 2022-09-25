import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BandejaEntrada from '../components/Bandeja_Entrada/BandejaEntrada';
import MensajeUI from '../components/Bandeja_Entrada/BandejaEntrada';

test('renders the Bandeja Entrada page', () => {
  render(<BandejaEntrada />);
});

test('renders the MensajeUI page', () => {
  render(<MensajeUI />);
});
