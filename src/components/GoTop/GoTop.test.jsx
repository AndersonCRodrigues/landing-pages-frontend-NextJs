import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);

    const button = screen.getByRole('link', { name: 'Go to top' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
