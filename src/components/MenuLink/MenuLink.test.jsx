import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">link</MenuLink>);

    const link = screen.getByRole('link', { name: 'link' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        link
      </MenuLink>,
    );

    const link = screen.getByRole('link', { name: 'link' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost">link</MenuLink>,
    );

    expect(container).toMatchSnapshot();
  });
});
