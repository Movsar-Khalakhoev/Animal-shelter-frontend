import React from "react"
import styles from "./PetsContainer.module.css";
import PetCards from "./PetCards/PetCards";
import Header from "./Header/Header";

const PetsContainer = (props) => {
  return (
    <div className={styles.pets_container}>
      <Header />
      <PetCards
        allProperties={props.allProperties}
        petsList={props.petsList}
      />
    </div>
  )
}

export default PetsContainer