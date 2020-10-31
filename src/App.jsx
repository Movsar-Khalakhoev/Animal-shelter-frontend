import React from "react"
import styles from './App.module.css';
import Container from "./components/Container/Container";

function App(props) {
  return (
    <div className={styles.app_wrapper}>
      <Container
        state={props.state}
      />
    </div>
  );
}

export default App;
