import React from "react"
import styles from "./Content.module.css";
import Pets from "./Pets/Pets";

const Content = props => {
  return (
    <div className={styles.content}>
      <Pets
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Content