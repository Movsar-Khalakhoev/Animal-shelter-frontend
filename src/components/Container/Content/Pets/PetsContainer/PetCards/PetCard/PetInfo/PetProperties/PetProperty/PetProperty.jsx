import React from "react"
import styles from "./PetProperty.module.css"

const PetProperty = (props) => {
  return (
    <div className={styles.property}>
      <span className={styles.property_name}>{props.property}</span>
      <span className={styles.property_value}>{props.property_value}</span>
    </div>
  )
}

export default PetProperty
