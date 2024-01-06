import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyProfile from '../components/MyProfile';

test('renders MyProfile component', () => {
  render(
    <MemoryRouter>
      <MyProfile />
    </MemoryRouter>
  );

   // Check if the text “Create Your Profile” is present
   const createProfileText = screen.getByText(/Create Your Profile:/i);
   expect(createProfileText).toBeInTheDocument();

    // Simulate clicking on the "Update Profile" button if available
    const updateButton = screen.queryByText(/Update Profile/i);
    if (updateButton) {
      fireEvent.click(updateButton);
    }

  // Check whether the text "Your Profile:" exists
  const yourProfileText = screen.getByText(/Your Profile:/i);
  expect(yourProfileText).toBeInTheDocument();

  // Check whether specific Labels are present
  const firstNameInput = screen.getByLabelText(/First Name:/i);
  expect(firstNameInput).toBeInTheDocument();

 
});