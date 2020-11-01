import React from "react"
import styles from "./PetProperties.module.css"
import PetProperty from "./PetProperty/PetProperty";

const PetProperties = (props) => {
  const properties = {...props.petProperties}
  const unwantedFields = [
    'id',
    'idcard_registration_animal',
    'shelter_address_animal',
    'name_animal',
    'author'
  ]

  unwantedFields.forEach(field => {
    delete properties[field]
  })
  return (
    <div className={styles.properties}>
      {Object.keys(properties).map((property, index) => {
        let property_transcript
        props.allProperties.forEach(prop => {
          if (prop.value === property) {
            property_transcript = prop.transcript
          }
        })
        return <PetProperty
                key={index}
                property={property_transcript}
                property_value={properties[property]}
              />
      })}
    </div>
  )
}

export default PetProperties