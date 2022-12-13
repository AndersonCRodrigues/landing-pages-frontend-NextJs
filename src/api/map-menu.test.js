import { mapMenu, mapMenuLinks } from './map-menu';
import mockMenu from './mapMenuMock';
import mockLinks from './mapLinksMock';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();

    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu(mockMenu);

    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();

    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks(mockLinks);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
