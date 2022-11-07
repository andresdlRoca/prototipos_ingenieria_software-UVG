import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
  getByTestId,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewSideBar from '../components/new-side-bar/NewSideBar';
import NewBottomBar from '../components/new-side-bar/NewBottomBar';
import mediaQuery from 'css-mediaquery';

import { MemoryRouter } from 'react-router-dom';
import React from 'react';

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

test('renders the New Side Bar', () => {
  window.matchMedia = createMatchMedia(1000);
  render(<NewSideBar />, { wrapper: MemoryRouter });
  const test = screen.getByTestId('sidebar');

  userEvent.click(test);
});

test('renders the New Bottom Bar compu', () => {
  window.matchMedia = createMatchMedia(600);

  render(<NewBottomBar />, { wrapper: MemoryRouter });
});

test('renders the New Bottom Bar phone', () => {
  window.matchMedia = createMatchMedia(500);

  render(<NewBottomBar />, { wrapper: MemoryRouter });
  fireEvent.click(screen.getByTestId('hola'));
});
