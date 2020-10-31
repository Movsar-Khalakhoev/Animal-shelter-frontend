import React from "react"
import styles from "./PetInfo.module.css"
import PetProperties from "./PetProperties/PetProperties";

const PetInfo = props => {
  return (
    <div
      className={styles.info}
    >
      <PetProperties
        petProperties={props.petInfo}
      />
    </div>
  )
}

export default PetInfo
