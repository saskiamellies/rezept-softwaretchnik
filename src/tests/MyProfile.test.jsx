import React from 'react';
import { fireEvent } from '@testing-library/react';
import MyProfile from '../components/MyProfile';

describe('Rendering and Initial Data', () => {
    test('renders profile form with initial data', () => {
        const { getByLabelText, getByText } = render(<MyProfile />);

        // Check whether the input fields were rendered with the initial data
        expect(getByLabelText(/first name/i).value).toBe('');
        expect(getByLabelText(/last name/i).value).toBe('');
        expect(getByLabelText(/username/i).value).toBe('');
        expect(getByLabelText(/favorite dish/i).value).toBe('');
        expect(getByLabelText(/allergies/i).value).toBe('');
        expect(getByLabelText(/dietaryRestrictions/i).value).toBe('');

        // Check whether the "Save Profile" button was rendered
        expect(getByText(/save profile/i)).toBeInTheDocument();
    });
});

describe('Updating Profile Data', () => {
    test('updates profile data when input fields are changed', () => {
        const { getByLabelText } = render(<MyProfile />);

        // Change the value of the fields
        fireEvent.change(getByLabelText(/first name/i), { target: { value: 'John' } });
        fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Doe' } });
        fireEvent.change(getByLabelText(/username/i), { target: { value: 'JohnDoe123' } });
        fireEvent.change(getByLabelText(/favorite dish/i), { target: { value: 'Melon' } });
        fireEvent.change(getByLabelText(/allergies/i), { target: { value: 'Milk' } });
        fireEvent.change(getByLabelText(/dietary restrictions/i), { target: { value: 'vegan' } });

        // Check whether the value of the fields has updated
        expect(getByLabelText(/first name/i).value).toBe('John');
        expect(getByLabelText(/last name/i).value).toBe('Doe');
        expect(getByLabelText(/username/i).value).toBe('JohnDoe123');
        expect(getByLabelText(/favorite dish/i).value).toBe('Melon');
        expect(getByLabelText(/allergies/i).value).toBe('Milk');
        expect(getByLabelText(/dietary restrictions/i).value).toBe('vegan');
    });
});

test('Displays error message for invalid email', () => {
    const { getByLabelText, getByText } = render(<MyProfile />);
    fireEvent.change(getByLabelText(/E-Mail/i), { target: { value: 'invalid-email' } });
    expect(getByText(/Please enter a valid email address/i)).toBeInTheDocument();
});

test('Saves profile data when "Save Profile" button is clicked', () => {
    const { getByLabelText, getByText } = render(<MyProfile />);

    // change the value of the fiels
    fireEvent.change(getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText(/username/i), { target: { value: 'JohnDoe123' } });
    fireEvent.change(getByLabelText(/favorite dish/i), { target: { value: 'Melon' } });
    fireEvent.change(getByLabelText(/allergies/i), { target: { value: 'Milk' } });
    fireEvent.change(getByLabelText(/dietary restrictions/i), { target: { value: 'vegan' } });

    // Click on the “Save Profile” button
    fireEvent.click(getByText(/save profile/i));

    /*Check whether the profile data state has updated
    and whether the "Update Profile" button was rendered*/
    expect(getByText(/update profile/i)).toBeInTheDocument();
});

