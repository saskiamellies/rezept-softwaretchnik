import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';

test('renders header component with navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check that the title "EnchantedEats" is rendered
  const titleElement = screen.getByText('EnchantedEats');
  expect(titleElement).toBeInTheDocument();

  // Check that the Navbarelement is rendered
  const navbarElement = screen.getByTestId('navbar'); /// Assuming that the Navbar has a data-testid
  expect(navbarElement).toBeInTheDocument();
});