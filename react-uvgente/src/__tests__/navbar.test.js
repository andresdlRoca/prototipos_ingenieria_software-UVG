import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MiPerfil from '../components/MiPerfil/MiPerfil';
import NavBar from '../components/new-nav-bar/NavBar';
import NewNavBarItem from '../components/new-nav-bar/NewNavBarItem';

test('renders the Navbar', () => {
  render(<NavBar />);
});

test('renders the newnavbaritem', () => {
  render(<NewNavBarItem />);
});
