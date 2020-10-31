import React from "react"
import styles from "./Sidebar.module.css";
import Header from "./Header/Header";
import SidebarContent from "./SidebarContent/SidebarContent";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <Header />
      <SidebarContent
        allProperties={props.allProperties}
      />
    </div>
  )
}

export default Sidebar