import React from 'react'
import styles from './SubmitButtn.module.css'
import classNames from 'classnames'
function SubmitButtn({value}) {
  return (
    <>
        <input
            type='submit'
            value={value}
            className={classNames(styles.SubmitButtn)}
        />
    </>
  )
}

export default SubmitButtn