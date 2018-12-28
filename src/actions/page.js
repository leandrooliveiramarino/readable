export const PAGE_NAME = 'PAGE_NAME';

export function setPageTitle(name, subtitle = '') {
  return {
    type: PAGE_NAME,
    name: name === null ? 'home' : name,
    subtitle
  }
}