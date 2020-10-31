import React from "react"
import styles from "./Navbar.module.css";
import logo from "./../../../logo.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logo_image} src={logo} alt="mos.ru"/>
        Официальный сайт Мэра Москвы
      </div>
      <div>
        <a href='https://www.mos.ru/' className={styles.login}>Войти</a>
        <a className={styles.feedback}>Обратная связь</a>
      </div>
    </div>
  )
}

export default Navbar
