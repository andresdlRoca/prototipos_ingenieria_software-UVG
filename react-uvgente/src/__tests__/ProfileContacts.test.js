import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import MiPerfil from '../components/MiPerfil/MiPerfil';
import React from "react"

test('renders the contacts of profile', () => {
  render(<MiPerfil />);
  expect(screen.queryByText(/uvg.edu.gt/)).toBeInTheDocument();
  expect(screen.queryByText(/502/)).toBeInTheDocument();
});
