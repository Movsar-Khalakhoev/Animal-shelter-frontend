import React from "react"
import styles from "./PetImages.module.css"
import SliderContainer from "./SliderContainer/SliderContainer";

const PetImages = props => {
  return (
    <div className={styles.images}>
      <SliderContainer
        petImages={props.petImages}
      />
      <div className={styles.add_image}>
        <input
          type='file'
          name='file'
          id='input_file'
          className={styles.input_file}
        />
        <label
          htmlFor='input_file'
          className={styles.button}
        > </label>
      </div>
    </div>
  )
}

export default PetImages