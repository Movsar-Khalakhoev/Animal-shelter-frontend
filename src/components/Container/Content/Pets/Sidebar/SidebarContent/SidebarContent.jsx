import React from "react"
import styles from "./SidebarContent.module.css"
import Input from "./Input/Input";
import Properties from "./Properties/Properties";

const SidebarContent = (props) => {
  return (
    <div className={styles.sidebar_content}>
      <Input />
      <Properties
        allProperties={props.allProperties}
      />
    </div>
  )
}

export default SidebarContent
