import React from "react"
import styles from "./Properties.module.css"
import Property from "./Property/Property";

const Properties = (props) => {
  return (
    <div className={styles.properties}>
      {
        props.allProperties.map((property, index) => <Property property={property} />)
      }
    </div>
  )
}

export default Properties