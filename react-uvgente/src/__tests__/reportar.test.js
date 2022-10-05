import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ReportarProblema from '../components/ReportarProblema/ReportarProblema';
import React from "react"

test('renders the Mi perfil page', () => {
  render(<ReportarProblema />);
});
