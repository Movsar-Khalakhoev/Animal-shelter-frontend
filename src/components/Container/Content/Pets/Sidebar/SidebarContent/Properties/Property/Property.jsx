import React from "react"
import styles from "./Property.module.css"

const Property = (props) => {
  return (
    <div className={styles.property}>
      <input
        type="text"
        className={styles.property_value}
        data-property={props.property.value}
        placeholder={props.property.transcript}
      />
      <div className={styles.categories}>
        <div className={styles.dropout}>
          <p className={styles.header}>{props.property.transcript}</p>
          <ul className={styles.categories_items}>
            <li className={styles.item}>
              <input
                type="checkbox"
                className={styles.checkbox}
                data-category={props.property.categories[0][0]}
              />
              <p className={styles.item_text}>{props.property.categories[0][1]}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Property