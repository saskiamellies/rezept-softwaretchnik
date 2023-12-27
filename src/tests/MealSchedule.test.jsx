import React from 'react';
import { render } from '@testing-library/react';
import MyMealSchedule from '../components/MealSchedule';

test('initializes meal plan with empty titles and links for all days', () => {
  const { getByText } = render(<MealSchedule />);
  
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  // Überprüfe für jeden Tag, ob die Zellen für Titel und Links initial leer sind
  days.forEach(day => {
    expect(getByText(new RegExp(day, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(day, 'i')).nextElementSibling.querySelector('input').value).toBe('');
    expect(getByText(new RegExp(day, 'i')).nextElementSibling.nextElementSibling.querySelector('input').value).toBe('');
  });
});

test('updates meal plan when titles and links are changed for all days', () => {
    const { getByLabelText } = render(<MealSchedule />);
    
    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  
    days.forEach(day => {
      // Change Title for every day
      fireEvent.change(getByLabelText(/recipe title/i), { target: { value: `${day} Recipe` } });
      
      // Check if the meal plan for the title has been updated
      expect(getByLabelText(/recipe title/i).value).toBe(`${day} Recipe`);
      
      // Change the link for each day
      fireEvent.change(getByLabelText(/recipe link/i), { target: { value: `https://${day.toLowerCase()}.com` } });
      
      // Check if the Meal Plan for the link has updated
      expect(getByLabelText(/recipe link/i).value).toBe(`https://${day.toLowerCase()}.com`);
    });
  });
