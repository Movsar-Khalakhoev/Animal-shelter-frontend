import axios from "axios"

const getPetList = 'GET-PET-LIST'

const initialState = []

// let State
// const state = () => {
//   axios.get(`http://${document.domain}:8000/api/animals/?format=json`)
//     .then(response => {
//       State = [...response]
//     })
// }
// state()
// console.log(
//   State
// )

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