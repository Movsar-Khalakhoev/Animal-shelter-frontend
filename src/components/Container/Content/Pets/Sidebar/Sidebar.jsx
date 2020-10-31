import React from "react"
import styles from "./Sidebar.module.css";
import SidebarContent from "./SidebarContent/SidebarContent";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <SidebarContent
        allProperties={props.allProperties}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Sidebar