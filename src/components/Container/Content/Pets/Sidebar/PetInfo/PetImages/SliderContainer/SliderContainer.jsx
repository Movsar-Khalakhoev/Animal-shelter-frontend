import React from "react"
import styles from "./SliderContainer.module.css"
import Slider from "./Slider/Slider";

const SliderContainer = props => {
  return (
    <div className={styles.slider_container}>
      <Slider
        petImages={props.petImages}
      />
    </div>
  )
}

export default SliderContainer