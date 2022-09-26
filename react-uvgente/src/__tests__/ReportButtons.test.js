import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ReportarProblema from '../components/ReportarProblema/ReportarProblema';

test('Renders the buttons on report a problem', () => {
  render(<ReportarProblema />);
  expect(screen.getByRole('button', {name: /Cancelar/ }));
  expect(screen.getByRole('button', {name: /Enviar/ }));
});
