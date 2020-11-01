import {combineReducers, createStore} from "redux";
import filterReducer from "./filterReducer";
import allProperties from "./allProperties";
import petsList, {petListCreator} from "./petsListReducer";
import axios from "axios";

let reducers = combineReducers({
  filterReducer,
  allProperties,
  petsList
})

let store = createStore(reducers);

axios.get(`http://${document.domain}:8000/api/animals/?format=json`)
  .then(response => {
    console.log(response)
    store.dispatch(petListCreator(response.data.data))
  })

export default store

window.store = store