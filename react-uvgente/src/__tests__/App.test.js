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

test('renders with App and root div', () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Requires index.js so that react-dom render method is called
  require('../index.js');

  // Asserts render was called with <App />
  // and HTML element with id = root
});
