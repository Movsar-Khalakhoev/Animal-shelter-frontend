import React from "react"
import styles from "./Category.module.css"

const Category = (props) => {
  const updateFilter = (event) => {
    const toggle = event.target.checked
    const filter = {
      [props.property_value]: event.target.dataset.category
    }
    props.updateFilter(filter, toggle)
  }
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        id={`checkbox${props.propertyIndex}${props.categoryIndex}`}
        className={styles.checkbox}
        data-category={props.category[0]}
        onChange={updateFilter}
      />
      <label
        htmlFor={`checkbox${props.propertyIndex}${props.categoryIndex}`}
        className={styles.label}
      >{props.category[1]}
      </label>
    </li>
  )
}

export default Category