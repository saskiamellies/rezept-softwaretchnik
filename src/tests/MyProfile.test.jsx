import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyProfile from '../components/MyProfile';

test('renders MyProfile component', () => {
  const { getByText, getByLabelText, queryByText } = render(<MyProfile />);

  // Check if the text “Create Your Profile” is present
  const createProfileText = screen.getByText(/Create Your Profile:/i);
  expect(createProfileText).toBeInTheDocument();

  // Simulate clicking on the "Update Profile" button if available
  const updateButton = screen.queryByText(/Update Profile/i);
  if (updateButton) {
    fireEvent.click(updateButton);
  }

  // Check wether the text "Your Profile:" exists
  const yourProfileText = screen.getByText(/Your Profile:/i);
  expect(yourProfileText).toBeInTheDocument();

  // Check wether specific Labels are present
  const firstNameInput = screen.getByLabelText(/First Name:/i);
  expect(firstNameInput).toBeInTheDocument();

 
});
