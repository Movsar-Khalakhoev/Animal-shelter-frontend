import React from "react"
import styles from './App.module.css';
import Container from "./components/Container/Container";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Container />
    </div>
  );
}

export default App;
