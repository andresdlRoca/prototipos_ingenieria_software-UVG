import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProductButton from '../components/Producto/ProductButton';

test('renders the ProductButton', () => {
  render(<ProductButton />);
});
