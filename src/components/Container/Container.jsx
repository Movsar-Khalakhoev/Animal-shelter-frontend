import React from "react"
import styles from "./Container.module.css";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

const Container = props => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Content />
    </div>
  )
}

export default Container