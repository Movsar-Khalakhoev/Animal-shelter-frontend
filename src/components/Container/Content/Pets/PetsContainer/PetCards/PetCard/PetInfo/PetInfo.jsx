import React from "react"
import styles from "./PetInfo.module.css"
import PetProperties from "./PetProperties/PetProperties";

const PetInfo = props => {
  return (
    <div className={styles.info}>
      <div className={styles.button}>Забрать</div>
      <p className={styles.pet_name}>{props.petInfo['name_animal'] || 'без клички'}</p>
      <PetProperties
        petProperties={props.petInfo}
        allProperties={props.allProperties}
      />
    </div>
  )
}

export default PetInfo
