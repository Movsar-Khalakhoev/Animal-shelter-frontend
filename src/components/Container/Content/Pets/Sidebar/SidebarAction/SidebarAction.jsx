import React from "react"
import styles from "./SidebarAction.module.css"
import {Route, NavLink} from "react-router-dom";

const SidebarAction = props => {

  const savePet = () => {
    props.dispatch({
      type: 'ADD-NEW-PET',
      newPet: props.newPet
    })
  }
  return (
    <div className={styles.sidebar_action}>
      <Route
        exact
        path='/'
        render={ () =>
            <NavLink to='/add-pet' className={styles.button} >
              Добавить питомца
            </NavLink>
        }
        />
        <Route
          path='/(add-pet|pet)'
          render={ () =>
            <button
              onClick={savePet}
              className={styles.button}
            >
              Сохранить
            </button>
          }
        />
    </div>
  )
}

export default SidebarAction