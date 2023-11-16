import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Gerichte link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Gerichte/i);
  expect(linkElement).toBeInTheDocument();
});
