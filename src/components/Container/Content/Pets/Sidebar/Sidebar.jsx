import React from "react"
import styles from "./Sidebar.module.css";
import SidebarContent from "./SidebarContent/SidebarContent";
import {connect} from "react-redux";

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

let mapStateToProps = (state) => {
  return {
    allProperties: state.allProperties
  }
}

let mapDispatchToProps = () => {
  return {
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer