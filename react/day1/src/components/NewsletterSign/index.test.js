import { render, screen, fireEvent } from '@testing-library/react';
import NewsletterSign from '.';

describe('NewsletterSign', () => {
  test('should render newsletter title', () => {
    render(<NewsletterSign />);

    const title = screen.getByText(/sua casa com as/i);
    const subTitle = screen.getByText(/melhores plantas/i);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  test('should render e-mail input with button', () => {
    render(<NewsletterSign />);

    const input = screen.getByPlaceholderText(/insira seu e-mail/i);
    const button = screen.getByRole('button', { name: /assinar newsletter/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should send an alert for a valid e-email', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    render(<NewsletterSign />);

    const input = screen.getByPlaceholderText(/insira seu e-mail/i);
    fireEvent.change(input, { target: { value: 'claudio@alura.com' } });

    const button = screen.getByRole('button', { name: /assinar newsletter/i });
    fireEvent.click(button);

    expect(window.alert).toBeCalledWith(
      expect.stringMatching(
        /obrigado pela sua assinatura, você receberá nossas novidades no e-mail claudio@alura.com/i
      )
    );
  });

  test('should send an alert for a non-valid e-email', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    render(<NewsletterSign />);

    const input = screen.getByPlaceholderText(/insira seu e-mail/i);
    fireEvent.change(input, { target: { value: 'claudio_email' } });

    const button = screen.getByRole('button', { name: /assinar newsletter/i });
    fireEvent.click(button);

    expect(window.alert).toBeCalledWith(
      expect.stringMatching(
        /por favor, digite um e-mail valido/i
      )
    );
  });
});