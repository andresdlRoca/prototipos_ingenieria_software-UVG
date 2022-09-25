import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewPaginaPrincipal from '../components/NewPaginaPrincipal/NewPaginaPrincipal';

test('renders the pagina principal', () => {
  render(<NewPaginaPrincipal />);
});
