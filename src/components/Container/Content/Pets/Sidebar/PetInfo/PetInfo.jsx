import React from "react"
import styles from "./PetInfo.module.css"
import PetImages from "./PetImages/PetImages";
import PetProperties from "./PetProperties/PetProperties";
import {withRouter} from "react-router-dom";
import AddProperty from "./AddProperty/AddProperty";

const PetInfo = (props) => {

  let pet
  if (props.type === 'changePet') {
    const index = +props.match.params.number
    pet = props.petList.filter(pet => {
      return pet.id === index
    })
    pet = pet[0]
  }
  return (
    <div className={styles.info}>
      <p className={styles.header}>{props.header}</p>
      <PetImages
        petImages={
          props.type === 'changePet'
          ? pet.images
          : props.newPet.images
        }
      />
      {
        props.type === 'addPet'
        ? <AddProperty
          existingProperties={props.newPet.properties}
          allProperties={props.allProperties}
          dispatch={props.dispatch}
          />
        : null
      }
      <PetProperties
        petProperties={
          props.type === 'changePet'
          ? pet.properties
          : props.newPet.properties
        }
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default withRouter(PetInfo)