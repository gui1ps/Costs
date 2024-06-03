import React from 'react'
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton';
import classNames from 'classnames'
import baseStyles from '../layout/Container.module.css'
import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom'

function Projects() {
  const location = useLocation()
  let message=''
  if(location.state){
    message=location.state.message
  }
  return (
    <div className={classNames(baseStyles.MainContainer,baseStyles.start)}>
      <h1>Meus Projetos</h1>
      <LinkButton to="/newproject" text="Criar projeto"/>
      {message && (<Message msg={message} type={'success'}/>)}
      <div>
        Projetos....
      </div>
    </div>
  )
}

export default Projects