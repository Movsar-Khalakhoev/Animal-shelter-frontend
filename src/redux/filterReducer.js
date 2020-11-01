const updateFilter = 'UPDATE-FILTER'

const initialState = {}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateFilter:
      const stateCopy = {...state}
      const filterName = Object.keys(action.filter)[0]
      if (action.toggle) {
        stateCopy.filter = [...state.filter]
        if (stateCopy.filter[filterName]) {
          stateCopy.filter[filterName].push(action.filter[filterName])
        } else {
          stateCopy.filter[filterName] = [action.filter[filterName]]
        }
      } else {
        delete stateCopy.filter[filterName]
      }
      return stateCopy
    default:
      return null
  }
}

export const updateFilterCreator = (filter, toggle) => {
  return {
    type: updateFilter,
    filter,
    toggle
  }
}

export default filterReducer