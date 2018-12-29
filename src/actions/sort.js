export const CHANGE_SORT_OPTION = 'CHANGE_SORT_OPTION';

export const changeSortByOptions = options => {
  return {
    type: CHANGE_SORT_OPTION,
    options
  }
}