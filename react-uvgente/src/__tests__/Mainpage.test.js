import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewPaginaPrincipal from '../components/NewPaginaPrincipal/NewPaginaPrincipal';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test('renders the pagina principal', () => {
  render(<NewPaginaPrincipal />);
});
