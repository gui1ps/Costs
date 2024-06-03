import React from "react";
import { useState,useEffect } from "react";
import styles from "./ProjectForm.module.css";
import Input from "../Form/Input";
import SubmitButtn from "../Form/SubmitButtn";
import Select from "../Form/Select";
import myApiFunctions from "../../api";

function ProjectForm({handleSubmit,btnText,projectData}) {
  const {categories}=myApiFunctions;
  const [Categories,setCategories]=useState([])
  const [project,setProject]=useState(projectData || {})

  useEffect(()=>{
    const obterCategorias = async ()=>{
      try {
        const catsReq= await categories.get('/')
        const catsData=catsReq.data
        setCategories(catsData)
      }
      catch (error){
        console.log(error)
      }
    }
    obterCategorias();
  },[])

  const Submit= async (event)=>{
    event.preventDefault(); 
    handleSubmit(project)
  }

  const handleChange=(event)=>{
    setProject(
      {
      ...project,
      [event.target.name]:event.target.value
      }
    )
  }

  const handleCategory = (event) => {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text
      }
    });
  };
  

  return (
    <form id={styles.form} onSubmit={Submit}>
      <fieldset id={styles.fildset}>
        <legend id={styles.title}>Novo projeto</legend>
        <Input
          name={"name"}
          type={"text"}
          placeholder={"Insira o nome do projeto"}
          labelTitle={"Nome"}
          handleOnChange={handleChange}
          value={project.name?project.name:""}
        />
        <Input
          name={"budget"}
          type={"number"}
          placeholder={"Insira o orçamento do projeto"}
          labelTitle={"Orçamento"}
          handleOnChange={handleChange}
          value={project.budget?project.budget:""}
        />
        <Select
          name={"category"}
          labelTitle={"Tipo"}
          selectDisabledOption={"Selecione uma categoria"}
          listOfOption={Categories}
          handleOnChange={handleCategory}
          value={project.category?project.category.id:""}
        />
        <SubmitButtn value={btnText} />
      </fieldset>
    </form>
  );
}

export default ProjectForm;
