import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// import MiPerfil from '../components/MiPerfil/MiPerfil';
import NavBar from '../components/new-nav-bar/NavBar';
import NewNavBarItem from '../components/new-nav-bar/NewNavBarItem';
import MobileNavBar from '../components/new-nav-bar/MobileNavBar';
import React from 'react';
import mediaQuery from 'css-mediaquery';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import IconButton from '@mui/material/IconButton';
import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

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

  render(<NavBar />);
});

test('renders the Navbar mobile', () => {
  window.matchMedia = createMatchMedia(600);
  render(<MobileNavBar />);
  fireEvent.click(screen.getByTestId('OpenNav'));
});

describe('render navbar test', () => {
  it('renders the Navbar', () => {
    render(<NavBar />);
  });

  it('renders the newnavbaritem', () => {
    render(<NewNavBarItem />);
  });
});
