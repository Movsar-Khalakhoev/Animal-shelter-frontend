import React from "react"
import styles from "./ReturnButton.module.css"
import {NavLink} from "react-router-dom";

const ReturnButton = () => {
  return (
    <NavLink to='/' className={styles.return}>
      <div className={styles.arrow}>
      </div>
    </NavLink>
  )
}

export default ReturnButton