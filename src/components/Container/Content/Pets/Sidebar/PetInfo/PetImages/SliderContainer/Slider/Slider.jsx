import React from "react"
import styles from "./Slider.module.css"
import SliderSlick from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderArrow from "../SliderArrow/SliderArrow";
import Slide from "./Slide/Slide";

const Slider = props => {

  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction={true} />,
    prevArrow: <SliderArrow direction={false} />
  }

  return (
    <div className={styles.slider}>
      <SliderSlick {...settings}>
        {props.petImages.map((image, index) => <Slide key={index} image={image} />) }
      </SliderSlick>
    </div>
  )
}

export default Slider
