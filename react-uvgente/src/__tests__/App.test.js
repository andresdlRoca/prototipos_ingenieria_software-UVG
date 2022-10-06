import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Login from '../components/Login/Login';
import App from '../App';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test('renders the landing page', () => {
  render(<App />);
});
