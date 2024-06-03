import React from 'react'
import styles from './Message.module.css'
import classNames from 'classnames'
import { useState,useEffect } from 'react'
function Message({msg,type}) {

  const [visible,setVisible]=useState(false)

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        else{
            setVisible(true)
        }

        const timer=setTimeout(()=>{
            setVisible(false)
        },3000)

        return ()=>{clearTimeout(timer)}
    },[msg])

  return (
    <>
    {visible &&
        (<span className={classNames(styles.message,styles[type])}>{msg}</span>)
    }
    </>
  )
}

export default Message