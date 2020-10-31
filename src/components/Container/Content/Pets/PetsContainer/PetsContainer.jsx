import React from "react"
import styles from "./PetsContainer.module.css";
import Header from "./Header/Header";
import PetCards from "./PetCards/PetCards";

const PetsContainer = (props) => {
  return (
    <div className={styles.pets_container}>
      <Header />
      <PetCards
        petsList={props.petsList}
      />
    </div>
  )
}

export default PetsContainer