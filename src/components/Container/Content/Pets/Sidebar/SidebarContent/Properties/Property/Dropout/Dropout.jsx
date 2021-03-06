import React from "react"
import styles from "./Dropout.module.css"
import CategoryContainer from "./Category/CategoryContainer";

const Dropout = (props) => {
  return (
    <div className={`${props.categoriesClass} ${styles.categories}`}>
      <div className={styles.dropout}>
        <p className={styles.header}>{props.property.transcript}</p>
        <ul className={styles.categories_items}>
          {
            props.property.categories.map(
              (category, index) =>
                <CategoryContainer
                  property_value={props.property.value}
                  category={category}
                  key={index}
                  categoryIndex={index}
                  propertyIndex={props.propertyIndex}
                  dispatch={props.dispatch}
                />
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default Dropout