import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>children</h1>
      </SectionContainer>,
    );

    const heading = screen.getByRole('heading', { name: 'children' });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
