import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewSideBar from '../components/new-side-bar/NewSideBar';

test('renders the New Side Bar', () => {
  render(<NewSideBar />);
});
