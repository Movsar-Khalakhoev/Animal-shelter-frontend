import React from "react"
import styles from "./PetCards.module.css"
import PetCard from "./PetCard/PetCard";
import {connect} from "react-redux";
const PetCards = (props) => {
  return (
    <div className={styles.cards}>
      {props.petsList.map((pet, index) => {
        return <PetCard
          key={index}
          pet={pet}
          allProperties={props.allProperties}
        />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allProperties: state.allProperties,
    petsList: state.petsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const PetCardsContainer = connect(mapStateToProps, mapDispatchToProps)(PetCards)

export default PetCardsContainer