import React from "react";
import styles from "./Navbar.module.css";
import baseStyles from './Container.module.css'
import { Link } from "react-router-dom";
import classNames from "classnames";
import logo from "../../img/costs_logo.png";
function Navbar() {
  return (
    <header>
      <nav className={classNames(styles.navContainer,baseStyles.LayoutContainer)}>
        <Link to="/">
          <img className={classNames(styles.logo)} src={logo} alt="Logo do Costs" />
        </Link>
        <ul className={classNames(styles.linksList)}>
          <li className={classNames(styles.link)}>
            <Link to="/">Home</Link>
          </li>
          <li className={classNames(styles.link)}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={classNames(styles.link)}> 
            <Link to="/company">Empresa</Link>
          </li>
          <li className={classNames(styles.link)}>
            <Link to="/contacts">Contato</Link>
          </li >
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
