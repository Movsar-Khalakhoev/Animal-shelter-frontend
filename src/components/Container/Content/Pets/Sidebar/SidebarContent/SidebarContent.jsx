import React from "react"
import styles from "./SidebarContent.module.css"
import Input from "./Input/Input";
import Properties from "./Properties/Properties";
import Sidebar from "../Sidebar";

const SidebarContent = (props) => {
  return (
    <div className={styles.sidebar_content}>
      <Input />
      <Properties
        allProperties={props.allProperties}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default SidebarContent
