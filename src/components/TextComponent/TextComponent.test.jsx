import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextCompornent />', () => {
  it('should render TextComponent', () => {
    renderTheme(<TextComponent>texto</TextComponent>);

    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);

    expect(container).toMatchSnapshot();
  });
});
