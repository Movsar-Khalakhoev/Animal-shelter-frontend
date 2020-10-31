import React from "react"
import styles from "./Property.module.css"
import Dropout from "./Dropout/Dropout";
import Sidebar from "../../../Sidebar";

const Property = (props) => {
  return (
    <div className={styles.property}>
      <input
        type="text"
        className={styles.property_value}
        data-property={props.property.value}
        placeholder={props.property.transcript}
      />
      <Dropout
        property={props.property}
        categoriesClass={styles.categories}
        propertyIndex={props.index}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Property