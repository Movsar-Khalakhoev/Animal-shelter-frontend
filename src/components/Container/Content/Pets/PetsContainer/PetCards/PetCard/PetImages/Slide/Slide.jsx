import React from "react"
import styles from "./Slide.module.css"

const Slide = (props) => {
  return (
    <div>
      <img
        className={styles.image}
        src={props.image}
        alt="Картинка"
      />
    </div>
  )
}

export default Slide