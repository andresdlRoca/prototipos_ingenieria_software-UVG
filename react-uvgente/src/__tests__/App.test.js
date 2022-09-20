import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Login from '../components/Login/Login';

test('renders the landing page', () => {
  render(<Login />);
});
