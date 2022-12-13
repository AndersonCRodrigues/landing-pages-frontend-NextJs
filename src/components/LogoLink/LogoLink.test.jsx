import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="logo" link="#target" />);
    const link = screen.getByRole('link', { name: 'logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink text="logo" link="#target" srcImg="image.jpg" />);
    const image = screen.getByRole('img', { name: 'logo' });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="logo" link="#target" srcImg="image.jpg" />,
    );

    expect(container).toMatchSnapshot();
  });
});
