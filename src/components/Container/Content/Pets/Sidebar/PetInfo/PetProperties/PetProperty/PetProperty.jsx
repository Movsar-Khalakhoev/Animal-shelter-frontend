import React from "react"
import styles from "./PetProperty.module.css"

const PetProperties = props => {
  const changeInputValueRef = React.createRef()
  const changeInputValue = () => {
    props.dispatch({
      type: 'CHANGE-ADD-PET-INPUTS',
      property: changeInputValueRef.current.dataset.property,
      value: changeInputValueRef.current.value
    })
  }
  return (
    <div className={styles.property}>
      <p className={styles.property_name}>{props.property}:</p>
      <input
        type="text"
        data-property={props.property}
        className={styles.property_value}
        value={props.value}
        ref={changeInputValueRef}
        onChange={changeInputValue}
      />
    </div>
  )
}

export default PetProperties
