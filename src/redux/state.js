import {act} from "@testing-library/react";

let renderUI

const updateFilter = 'UPDATE-FILTER'
const store = {
  _state: {
    "petsList": [
      {
        id: 0,
        images: [
          'https://clck.ru/RdnLF',
          'https://clck.ru/RdnAF',
          'https://clck.ru/RdnBn',
          'https://clck.ru/RdnCy'
        ],
        properties: {
          "petName": "Cat",
          "petAge": 3
        }
      },
      {
        id: 10,
        images: [
          'https://clck.ru/RdnFW',
          'https://clck.ru/RdnGw',
          'https://clck.ru/RdnHc'
        ],
        properties: {
        "petName": "Tiger",
        "petAge": 5,
        "petWeight": 114
        }
      }
    ],
    "allProperties": [
      {
        "value": "petName",
        "transcript": "Животное",
        "categories": [
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"]
        ]
      },
      {
        "value": "petAge",
        "transcript": "Возвраст",
        "categories": [
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"]
        ]
      },
      {
        "value": "petWeight",
        "transcript": "Вес",
        "categories": [
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"],
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"]
        ]
      }
    ],
    filter: {},
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    renderUI = observer
  },
  dispatch(action) {
    switch (action.type) {
      case updateFilter:
        const filterName = Object.keys(action.filter)[0]
        if (action.toggle) {
          if (this._state.filter[filterName]) {
            this._state.filter[filterName].push(action.filter[filterName])
          } else {
            this._state.filter[filterName] = [action.filter[filterName]]
          }
        } else {
          delete this._state.filter[filterName]
        }
        getPetList(this._state.filter)
    }
  }
}

export const updateFilterCreator = (filter, toggle) => {
  return {
    type: updateFilter,
    filter,
    toggle
  }
}

const getPetList = (filter) => {
}

export default store

window.pets = store._state.petsList

window.filter = store._state.filter