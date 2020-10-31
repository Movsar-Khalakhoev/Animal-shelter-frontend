import React from "react"
import styles from "./PetCard.module.css"
import PetImages from "./PetImages/PetImages";
import PetInfo from "./PetInfo/PetInfo";
import {NavLink} from "react-router-dom";

const PetCard = (props) => {

  const link = `/pet/${props.pet.id}`
  return (
    <NavLink
      to={link}
      data-cardid={props.pet.id}
      className={styles.card}
      activeClassName={styles.active}
    >
      <PetImages
        images={props.pet.images}
      />
      <PetInfo
        petInfo={props.pet.properties}
        allProperties={props.allProperties}
      />
    </NavLink>
  )
}

export default PetCard