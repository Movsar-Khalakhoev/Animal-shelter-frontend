import filterReducer from "./filterReducer";

let renderUI

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
          'https://clck.ru/Rh6K2',
        ],
        properties: {
        "petName": "Tiger",
        "petAge": 5,
        "petWeight": 10
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
        "transcript": "Возраст",
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
    this._state.filter = filterReducer(this._state.filter, action)
  }
}

export default store


window.filter = store._state.filter