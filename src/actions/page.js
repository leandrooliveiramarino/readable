export const PAGE_NAME = 'PAGE_NAME';

export function setPageName(name) {
  return {
    type: PAGE_NAME,
    name: name === null ? 'home' : name
  }
}