import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// Mock Header component
jest.mock('../components/Header', () => () => <div>MockedHeader</div>);

test('renders App component with React Router', () => {
  const { getByText } = render(<App />);

  // Check if the header text is present
  const headerText = getByText(/MockedHeader/i);
  expect(headerText).toBeInTheDocument();
});