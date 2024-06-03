import React from 'react'
import baseStyles from '../layout/Container.module.css'
import styles from './NewProject.module.css'
import classNames from 'classnames';
import ProjectForm from '../projects/ProjectForm';
import myApiFunctions from "../../api";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();
  const {projectPost}=myApiFunctions;

  const handleSubmit = ((newProject)=>{
    newProject.costs=0
    newProject.services=[]
    const project=JSON.stringify(newProject)
    try{
      projectPost.post('/',project)
      .then(
        navigate('/projects',{ state: { message: 'Projeto criado com sucesso!' } })
      )
    }
    catch(error){
      console.log(error)
    }
  })

  return (
    <div className={classNames(baseStyles.MainContainer,styles.newproject_container)}>
      <h1>Criar projeto</h1>
      <p>Crie um projeto para depois adicionar os serviços</p>
      <ProjectForm btnText={"Criar novo projeto"} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default NewProject