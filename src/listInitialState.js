const listInitialState = {
  sort: {
    param: null,
    asc: true,
  },
  isDefaultSortAsc: true,
  alwaysResetFilters: {},
  initialFilters: {},
  filters: {},
  appliedFilters: {},
  saveFiltersOnResetAll: [],
  saveItemsWhileLoad: false,
  appendItems: true,
  loading: false,
  items: [],
  additional: null,
  error: null,
  requestId: 0,
};

export default listInitialState;
