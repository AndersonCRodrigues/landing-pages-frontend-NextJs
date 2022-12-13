import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render a link', () => {
    renderTheme(<NavLinks links={mock} />);

    const link = screen.getAllByRole('link');

    expect(link).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);

    const link = screen.queryAllByAltText(/links/i);

    expect(link).toHaveLength(0);
  });

  it('should render correct when using mobile', () => {
    renderTheme(<NavLinks links={mock} />);

    const link = screen.getByText(/Link 1/i).parentElement;

    expect(link).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container).toMatchSnapshot();
  });
});
