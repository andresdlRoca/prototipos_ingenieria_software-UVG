import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// import MiPerfil from '../components/MiPerfil/MiPerfil';
import NavBar from '../components/new-nav-bar/NavBar';
import NewNavBarItem from '../components/new-nav-bar/NewNavBarItem';
import MobileNavBar from '../components/new-nav-bar/MobileNavBar';
import React from 'react';
import mediaQuery from 'css-mediaquery';
import { MemoryRouter } from 'react-router-dom';


window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('<MyComponent />', () => {
  it('should work', () => {
    const view = render(<MobileNavBar />, { wrapper: MemoryRouter });
    console.log(view);

    const submitButton = screen.getByTestId('OpenNav');
    fireEvent.click(submitButton);
  });
});

describe('<MyComponent/>', () => {
  it('works', () => {
    const view = render(<MobileNavBar />, { wrapper: MemoryRouter });
    console.log(view);

    const submitButton = screen.getByTestId('OpenMenu');
    fireEvent.click(submitButton);
  });
});

describe('<MyComponent/', () => {
  it('working', () => {
    const view = render(<MobileNavBar />, { wrapper: MemoryRouter });
    console.log(view);

    const submitButton = screen.getByTestId('Ajustes');
    fireEvent.click(submitButton);
  });
});

describe('<MyComponen/', () => {
  it('working', () => {
    const view = render(<MobileNavBar />, { wrapper: MemoryRouter });
    console.log(view);

    const submitButton = screen.getByTestId('Mi perfil');
    fireEvent.click(submitButton);
  });
});

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

test('renders the Navbar', () => {
  window.matchMedia = createMatchMedia(600);

  render(<NavBar />, { wrapper: MemoryRouter });
});

test('renders the Navbar mobile', () => {
  window.matchMedia = createMatchMedia(600);
  render(<MobileNavBar />, { wrapper: MemoryRouter });
});

describe('render navbar test', () => {
  it('renders the Navbar', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
  });

  it('renders the newnavbaritem', () => {
    render(<NewNavBarItem />, { wrapper: MemoryRouter });
  });
});
