import React from "react"
import styles from "./Properties.module.css"
import Property from "./Property/Property";
import Sidebar from "../../Sidebar";

const Properties = (props) => {
  return (
    <div className={styles.properties}>
      {
        props.allProperties.map((property, index) =>
          <Property
            property={property}
            key={index}
            index={index}
            dispatch={props.dispatch}
          />
          )
      }
    </div>
  )
}

export default Properties