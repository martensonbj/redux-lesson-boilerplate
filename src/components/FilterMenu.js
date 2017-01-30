import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const FilterMenu = () => {
  return (
    <section className="FilterMenu">
      <FilterContainer filter="SHOW_ALL">All Todos</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">Active</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">Completed</FilterContainer>
    </section>
  )
}

export default FilterMenu
