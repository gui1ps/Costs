import React from 'react'
import baseStyles from '../layout/Container.module.css'
import classNames from 'classnames';

function Company() {
  return (
    <div className={classNames(baseStyles.container)}>Company</div>
  )
}

export default Company