import React from "react"
import styles from "./PetProperties.module.css"
import PetProperty from "./PetProperty/PetProperty";

const PetProperties = (props) => {
  return (
    <div className={styles.properties}>
      {Object.keys(props.petProperties).map((property, index) => {
        let property_transcript
        props.allProperties.forEach(prop => {
          if (prop.value === property) {
            property_transcript = prop.transcript
          }
        })
        return <PetProperty
                key={index}
                property={property_transcript}
                property_value={props.petProperties[property]}
              />
      })}
    </div>
  )
}

export default PetProperties