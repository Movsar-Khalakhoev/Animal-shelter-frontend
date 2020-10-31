import React from "react"
import styles from "./Property.module.css"

const Property = props => {

  const itemRef = React.createRef()

  const addNewProperty = (event) => {

    const property = event.target.dataset.property
    props.dispatch({
      type: 'ADD-PROPERTY-TO-NEW-PET',
      property,
      value: ''
    })
  }

  return (
    <li
      data-property={props.property}
      className={styles.item}
      onClick={addNewProperty}
      ref={itemRef}
    >
      {props.value}
    </li>
  )
}

export default Property