import React from 'react'
import styles from './Footer.module.css'
import baseStyles from './Container.module.css'
import classNames from "classnames";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <footer className={classNames(styles.footerContainer,baseStyles.LayoutContainer)}>
      <p>© 2024 <span>Costs</span>. Todos os direitos reservados.</p>
      <ul className={classNames(styles.socialMediaList)}>
        <li className={classNames(styles.socialMedia)}><FaFacebook/></li>
        <li className={classNames(styles.socialMedia)}><FaInstagram/></li>
        <li className={classNames(styles.socialMedia)}><FaLinkedin/></li>
      </ul>
    </footer>
  )
}

export default Footer