import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders surreal estate title', () => {
  render(<App />);
  const title = screen.getByText(/Surreal Estate/i);
  expect(title).toBeInTheDocument();
});
