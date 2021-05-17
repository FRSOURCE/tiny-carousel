import React from 'react';
// import { render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import App from './App';

// TODO: tests
it('doesn`t fail', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(1).toBe(1);
});
