import React from 'react'
import PropTypes from 'prop-types'

import Paginator from './Paginator'
import Th from './Th'

import {reduxFilterlist, filterlistPropTypes} from 'redux-filterlist'

import constructUrl from './constructUrl'

const List = ({
  listState: {
    additional,
    items,
    loading,

    sort,

    appliedFilters: {
      page,
      perPage,
    },
  },

  setAndApplyFilter,
  setSorting,
}) => (
  <div>
    <table>
      <thead>
        <tr>
          <Th
            param='id'
            current={ sort.param }
            asc={ sort.asc }
            setSorting={ setSorting }
          >
            id
          </Th>

          <Th
            param='brand'
            current={ sort.param }
            asc={ sort.asc }
            setSorting={ setSorting }
          >
            brand
          </Th>

          <Th
            param='owner'
            current={ sort.param }
            asc={ sort.asc }
            setSorting={ setSorting }
          >
            owner
          </Th>

          <Th
            param='color'
            current={ sort.param }
            asc={ sort.asc }
            setSorting={ setSorting }
          >
            color
          </Th>
        </tr>
      </thead>

      <tbody>
        {
          items.map(({
            id,
            brand,
            owner,
            color,
          }) => (
            <tr key={ id }>
              <td>{ id }</td>
              <td>{ brand }</td>
              <td>{ owner }</td>
              <td>{ color }</td>
            </tr>
          ))
        }
      </tbody>
    </table>


    {
      additional && (
        <h4>
          Total: { additional.count }
        </h4>
      )
    }

    {
      loading && (
        <h3>Loading...</h3>
      )
    }

    <p>
      Items per page:
      {' '}
      <select
        value={ perPage }
        onChange={ ({ target: { value }}) => setAndApplyFilter('perPage', parseInt(value)) }
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
    </p>

    {
      additional && (
        <Paginator
          count={ additional.count }
          perPage={ perPage }
          current={ page }

          setPage={ setAndApplyFilter.bind(null, 'page') }
        />
      )
    }
  </div>
)

List.propTypes = {
  ...filterlistPropTypes({
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),

    additional: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }),

    filters: PropTypes.shape({
      page: PropTypes.number.isRequired,
      perPage: PropTypes.number.isRequired,
    }),
  }),
}

export default reduxFilterlist({
  listId: 'sorting',
  alwaysResetFilters: {
    page: 1,
  },
  appliedFilters: {
    page: 1,
    perPage: 10,
  },
  loadItems: ({
    sort,
    appliedFilters: {
      page,
      perPage,
    },
  }) => {
    return fetch(constructUrl('/cars', {
      page,
      per_page: perPage,
      sort: `${ sort.param ? `${ sort.asc ? '' : '-' }${ sort.param }` : '' }`,
    }))
      .then((response) => response.json())
      .then(({ cars, count }) => ({
        items: cars,
        additional: {
          count: count,
        },
      }))
  },
})(List)
