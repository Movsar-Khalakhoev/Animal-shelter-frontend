import React from "react"
import styles from "./AddProperty.module.css"
import Property from "./Property/Property"

const AddProperty = props => {

  const allProperties = props.allProperties.filter(property => {
    return !Object.keys(props.existingProperties).includes(property[0])
  })

  return (
    <div className={styles.container}>
      <p className={styles.button}>
        Добавить свойство
      </p>
      <ul className={styles.list}>
        {
          allProperties.map((property, index) => {
            return <Property
              key={index}
              property={property[0]}
              value={property[1]}
              dispatch={props.dispatch}
            />
          })
        }
      </ul>
    </div>
  )
}

export default AddProperty