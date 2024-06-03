import React from 'react'
import styles from './Home.module.css'
import classNames from 'classnames';
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={classNames(styles.home_container)}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Começe a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto"/>
      <img src={savings} alt='Cofrinho'/>
    </section>
  )
}

export default Home