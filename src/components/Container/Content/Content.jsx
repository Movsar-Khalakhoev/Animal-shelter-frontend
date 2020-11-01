import React from "react"
import styles from "./Content.module.css";
import Pets from "./Pets/Pets";

const Content = props => {
  return (
    <div className={styles.content}>
      <Pets />
    </div>
  )
}

export default Content