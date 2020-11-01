import axios from "axios"

const getPetList = 'GET-PET-LIST'

const initialState = []

const petsList = (state = initialState, action) => {
  switch (action.type) {
    case getPetList:
      const stateCopy = [...action.petsList]
      return stateCopy
  }
  return state
}

export const petListCreator = (petsList) => {
  return {
    type: getPetList,
    petsList
  }
}

export default petsList