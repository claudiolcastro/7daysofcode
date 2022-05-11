import { render, screen, within } from '@testing-library/react';
import Menu from './';

describe('Menu', () => {
  test('deve renderizar logo Casa Verde', () => {
    render(<Menu />);

    const logo = screen.getByAltText(/logo casa verde/i);
    expect(logo).toBeInTheDocument();
  });

  test('deve ter um menu com itens', () => {
    render(<Menu />);

    const list = screen.getByRole("list", {
      name: /menu/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(5);
  });
});