import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Singup from '../components/Signup/Singup';

test('renders the New Side Bar', () => {
  render(<Singup />);
});
