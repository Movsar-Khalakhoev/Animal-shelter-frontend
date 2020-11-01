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
        images={[
          'https://clck.ru/RhENm',
          'https://clck.ru/RhEP6',
          'https://clck.ru/RhEPe',
          'https://clck.ru/RhEPz',
          'https://clck.ru/RhEQP'
        ]}
      />
      <PetInfo
        petInfo={props.pet}
        allProperties={props.allProperties}
      />
    </NavLink>
  )
}

export default PetCard