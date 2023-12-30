import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock Header component
jest.mock('../components/Header', () => () => <div>MockedHeader</div>);

test('renders App component with React Router', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Check if the header text is present
  const headerText = getByText(/MockedHeader/i);
  expect(headerText).toBeInTheDocument();

  // Check if the text is present on the Recipes page
  const recipesText = getByText(/Recipes Text hier/i);
  expect(recipesText).toBeInTheDocument();
  

  //Check whether the footer text is present
  const footerText = getByText(/Footer Text hier/i);
  expect(footerText).toBeInTheDocument();
});
