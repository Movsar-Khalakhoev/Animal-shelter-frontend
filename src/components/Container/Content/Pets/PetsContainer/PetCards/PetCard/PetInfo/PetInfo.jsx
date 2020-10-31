import React from "react"
import styles from "./PetInfo.module.css"
import PetProperties from "./PetProperties/PetProperties";

const PetInfo = props => {
  return (
    <div className={styles.info}>
      <p className={styles.pet_name}>Кличка</p>
      <PetProperties
        petProperties={props.petInfo}
        allProperties={props.allProperties}
      />
    </div>
  )
}

export default PetInfo
