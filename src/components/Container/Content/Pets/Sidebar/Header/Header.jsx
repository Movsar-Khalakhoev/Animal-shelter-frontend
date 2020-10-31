import React from "react"
import styles from "./Header.module.css"
import vector from "../../../../../../vector.svg";
import ReturnButton from "./ReturnButton/ReturnButton";
import {Route} from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.vector}
        src={vector}
        alt='Заголовок'
      />
    </div>
  )
}

export default Header