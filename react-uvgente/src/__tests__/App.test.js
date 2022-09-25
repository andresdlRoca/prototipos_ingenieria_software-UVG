import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Login from '../components/Login/Login';
import App from '../App';

test('renders the landing page', () => {
  render(<App />);
});
