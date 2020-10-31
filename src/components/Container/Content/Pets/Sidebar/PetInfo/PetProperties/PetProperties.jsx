import React from "react"
import styles from "./PetProperties.module.css"
import PetProperty from "./PetProperty/PetProperty";

const PetProperties = (props) => {
  return (
    <div className={styles.properties}>
      {
        Object.keys(props.petProperties).map((property, index) => {
          return <PetProperty
            key={index}
            property={property}
            value={props.petProperties[property]}
            dispatch={props.dispatch}
          />
        })
      }
    </div>
  )
}

export default PetProperties