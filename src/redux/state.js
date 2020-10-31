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
        "value": "petName",
        "transcript": "Животное",
        "categories": [
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"]
        ]
      },
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
        "value": "petName",
        "transcript": "Животное",
        "categories": [
          ["cat", "Кошка"],
          ["dog", "Cобака"],
          ["all", "Любое"]
        ]
      }
    ],
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    renderUI = observer
  }
}

export default store

window.pets = store._state.petsList