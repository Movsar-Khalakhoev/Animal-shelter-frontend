import React from "react"
import styles from "./Pets.module.css";
import PetsContainer from "./PetsContainer/PetsContainer";
import SidebarContainer from "./Sidebar/Sidebar";

const Pets = props => {
  return (
    <div className={styles.pets}>
      <SidebarContainer />
      <PetsContainer />
    </div>
  )
}

export default Pets