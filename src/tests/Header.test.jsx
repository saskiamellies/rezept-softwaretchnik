import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header component with correct title', () => {
  render(<Header />);
  
// Check that the title "EnchantedEats" is rendered
  const titleElement = screen.getByText(/enchantedeats/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check that the Navbarelement is rendered
  const navbarElement = screen.getByTestId('navbar'); /// Assuming that the Navbar has a data-testid
  expect(navbarElement).toBeInTheDocument();
});
