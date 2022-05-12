import { render, screen, within } from '@testing-library/react';
import NewsletterSign from '.';

describe('NewsletterSign', () => {
  test('should render newsletter title', () => {
    render(<NewsletterSign />);

    const title = screen.getByText(/sua casa com as/i);
    const subTitle = screen.getByText(/melhores plantas/i);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  test('should render e-mail input', () => {
    render(<NewsletterSign />);

    const input = screen.getByPlaceholderText(/insira seu e-mail/i);
    expect(input).toBeInTheDocument();
  });
});