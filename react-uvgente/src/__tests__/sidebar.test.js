import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewSideBar from '../components/new-side-bar/NewSideBar';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test('renders the New Side Bar', () => {
  render(<NewSideBar />);
});
