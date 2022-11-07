import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import Login from '../components/Login/Login';
import App from '../App';
import ReactDOM from 'react-dom';
import React from 'react';

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
