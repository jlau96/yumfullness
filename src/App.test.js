import { render, screen } from '@testing-library/react';
import App from './App';

test('test yumfullness', () => {
  render(<App />);
  const linkElement = screen.getByText(/yumfullness/i);
  expect(linkElement).toBeInTheDocument();
});
