import collectListInitialState from '../collectListInitialState';
import listInitialState from '../listInitialState';

test('should return listInitialState', () => {
  expect(collectListInitialState({})).toEqual(listInitialState);
});

test('should set initial sort', () => {
  const state = collectListInitialState({
    sort: {
      param: 'param',
      asc: false,
    },
  });

  expect(state.sort).toEqual({
    param: 'param',
    asc: false,
  });
});

test('should set initial filters', () => {
  const filters = {
    filter1: 'value1',
    filter2: 'value2',
    filter3: ['value3', 'value4'],
  };

  const state = collectListInitialState({
    appliedFilters: filters,
  });

  expect(state.filters).toEqual(filters);
  expect(state.appliedFilters).toEqual(filters);
});

test('should set filters for resetting', () => {
  const alwaysResetFilters = {
    filter1: 'value1',
    filter2: 'value2',
  };

  const state = collectListInitialState({
    alwaysResetFilters,
  });

  expect(state.alwaysResetFilters).toEqual(alwaysResetFilters);
});

test('should set isDefaultSortAsc true', () => {
  const state = collectListInitialState({
    isDefaultSortAsc: true,
  });

  expect(state.isDefaultSortAsc).toEqual(true);
});

test('should set isDefaultSortAsc false', () => {
  const state = collectListInitialState({
    isDefaultSortAsc: true,
  });

  expect(state.isDefaultSortAsc).toEqual(true);
});

test('should no set isDefaultSortAsc (true by default)', () => {
  const state = collectListInitialState({
  });

  expect(state.isDefaultSortAsc).toEqual(true);
});

test('should set saveFiltersOnResetAll', () => {
  const state = collectListInitialState({
    saveFiltersOnResetAll: ['filter1', 'filter2'],
  });

  expect(state.saveFiltersOnResetAll).toEqual(['filter1', 'filter2']);
});

test('should set additional', () => {
  const state = collectListInitialState({
    additional: {
      count: 0,
    },
  });

  expect(state.additional).toEqual({
    count: 0,
  });
});

test('should no set additional (null by default)', () => {
  const state = collectListInitialState({
  });

  expect(state.additional).toEqual(null);
});

test('should set saveItemsWhileLoad', () => {
  const state = collectListInitialState({
    saveItemsWhileLoad: true,
  });

  expect(state.saveItemsWhileLoad).toEqual(true);
});

test('should no set saveItemsWhileLoad (false by default)', () => {
  const state = collectListInitialState({
  });

  expect(state.saveItemsWhileLoad).toEqual(false);
});

test('should set appendItems to specified value', () => {
  const state = collectListInitialState({
    appendItems: true,
  });

  expect(state.appendItems).toEqual(true);
});

test('should set appendItems to default true value', () => {
  const state = collectListInitialState({});

  expect(state.appendItems).toEqual(true);
});

