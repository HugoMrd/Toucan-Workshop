import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders app and filters cards based on search', () => {
  render(<App />);

  expect(screen.getByText(/Ruby Cookbook/i)).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText(/Search by book title name/i), {
    target: { value: 'Ruby Cookbook' },
  });
  expect(screen.getByText(/Ruby Cookbook/i)).toBeInTheDocument();
  expect(screen.queryByText(/test/i)).toBeNull();
});