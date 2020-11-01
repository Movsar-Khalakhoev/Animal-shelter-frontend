import React from "react"
import styles from "./PetsContainer.module.css";
import Header from "./Header/Header";
import PetCardsContainer from "./PetCards/PetCards";

const PetsContainer = () => {
  return (
    <div className={styles.pets_container}>
      <Header />
      <PetCardsContainer />
    </div>
  )
}

export default PetsContainer