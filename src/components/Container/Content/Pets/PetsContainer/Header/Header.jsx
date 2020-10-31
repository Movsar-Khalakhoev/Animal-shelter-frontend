import React from "react"
import styles from "./Header.module.css"
import vector from "../../../../../../vector.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.vector}
        src={vector}
        alt='Кривая линия'
      />
    </div>
  )
}

export default Header