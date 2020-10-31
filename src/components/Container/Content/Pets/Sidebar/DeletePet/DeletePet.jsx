import React from "react"
import styles from "./DeletePet.module.css"
import {NavLink, withRouter} from "react-router-dom";

const DeletePet = props => {
  const deletePet = () => {
    props.dispatch({
      type: 'DELETE-PET',
      id: +props.match.params.number
    })
  }
  return (
    <div className={styles.delete_pet}>
      <NavLink
        to='/'
        className={styles.button}
        onClick={deletePet}
      >
        Удалить питомца
      </NavLink>
    </div>
  )
}

export default withRouter(DeletePet)