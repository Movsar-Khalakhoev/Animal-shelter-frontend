import React from "react"
import styles from "./PetCards.module.css"
import PetCard from "./PetCard/PetCard";

const PetCards = (props) => {
  return (
    <div className={styles.cards}>
      {props.petsList.map((pet, index) => {
        return <PetCard key={index} pet={pet}/>
      })}
    </div>
  )
}

export default PetCards