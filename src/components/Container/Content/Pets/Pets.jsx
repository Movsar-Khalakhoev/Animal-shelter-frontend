import React from "react"
import styles from "./Pets.module.css";
import Sidebar from "./Sidebar/Sidebar";
import PetsContainer from "./PetsContainer/PetsContainer";

const Pets = props => {

  return (
    <div className={styles.pets}>
      <Sidebar
        allProperties={props.state.allProperties}
        dispatch={props.dispatch}
      />
      <PetsContainer
        allProperties={props.state.allProperties}
        petsList={props.state.petsList}
      />
    </div>
  )
}

export default Pets