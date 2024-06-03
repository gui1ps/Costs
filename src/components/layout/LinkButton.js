import React from 'react'
import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import classNames from 'classnames'

function LinkButton({to,text}) {
  return (
    <Link className={classNames(styles.btn)} to={to}>
        {text}
    </Link>
  )
}

export default LinkButton