import {
  mapSectionTwoColumns,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';
import mapImageGridMock from './mapImageGridMock';
import mapSection2ColMock from './mapSection2ColMock';
import mapSectionContMock from './mapSectionContMock';
import mapTextGridMock from './mapTextGridMock';
import mockPage from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();

    expect(data).toEqual([]);
  });

  it('should render section with correct data', () => {
    const data = mapSections(mockPage[0].sections);

    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withoutTextOrImageGrid = mapSections([
      { __component: 'section.section-grid' },
    ]);
    expect(withoutTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);

    const withoutComponent = mapSections([{}]);
    expect(withoutComponent).toEqual([{}]);
  });

  it('should test section grid without text_grid or image_grid', () => {
    const withoutTextOrImageGrid = mapSections([
      { __component: 'section.section-grid', image_grid: [{}] },
      { __component: 'section.section-grid', text_grid: [{}] },
    ]);
    expect(withoutTextOrImageGrid).toHaveLength(2);
  });

  it('should map section tow columns without data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns(mapSection2ColMock);

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent(mapSectionContMock);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('pricing');
    expect(data.html).toBe('abc');
    expect(data.title).toBe('Pricing');
  });

  it('should map text grid without data', () => {
    const data = mapTextGrid();

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map text grid with data', () => {
    const data = mapTextGrid(mapTextGridMock);

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map image grid without data', () => {
    const data = mapImageGrid();

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map image grid with data', () => {
    const data = mapImageGrid(mapImageGridMock);

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
