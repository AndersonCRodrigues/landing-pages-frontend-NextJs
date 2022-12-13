import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>children</h1>
      </SectionBackground>,
    );

    const heading = screen.getByRole('heading', { name: 'children' });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    );

    const heading = screen.getByRole('heading', { name: 'children' });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
