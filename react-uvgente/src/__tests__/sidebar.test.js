import '@testing-library/jest-dom';
import {
  getByPlaceholderText,
  getByText,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewSideBar from '../components/new-side-bar/NewSideBar';
import { MemoryRouter } from 'react-router-dom';

test('renders the New Side Bar', () => {
  render(<NewSideBar />, { wrapper: MemoryRouter });
  const test = screen.getByTestId('sidebar');
  userEvent.click(test);
});
