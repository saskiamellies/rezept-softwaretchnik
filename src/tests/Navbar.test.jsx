import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders navbar component with navigation links', () => {
  render(<Navbar />);
  
  // Check if the links in the navbar are rendered
  const recipeLink = screen.getByText(/recipe search/i);
  const profileLink = screen.getByText(/profile/i);
  const pantryLink = screen.getByText(/my pantry/i);
  
  // Update the text matcher for scheduleLink
  const scheduleLink = screen.getByRole('link', { name: /meal schedule/i });;

  expect(recipeLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
  expect(pantryLink).toBeInTheDocument();
  expect(scheduleLink).toBeInTheDocument();
});
