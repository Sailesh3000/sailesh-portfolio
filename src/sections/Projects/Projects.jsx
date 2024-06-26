import React from 'react'
import styles from './ProjectStyles.module.css'
import elect from '../../assets/electease.jpg'
import joke from "../../assets/_d5d83452-178d-4425-9c02-ac5521a62daa.jpg"
import snake from "../../assets/_b4a99118-6b26-4ce2-a8ae-3b493fc6ce1e.jpg"
import recipe from "../../assets/_17f080fc-e797-450e-96a2-49ab7e2220f7.jpg"
import ProjectCard from '../../common/ProjectCard'



const Projects = () => {
  return (
    <setion id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={elect} link={"https://github.com/Sailesh3000/ElectEase"} h3='ElectEase' p="Online Voting Platform" />
            <ProjectCard src={joke} link={"https://github.com/Sailesh3000/JokeAPI"} h3='JOKER' p="A JOKE API" />
            <ProjectCard src={snake} link={"https://github.com/Sailesh3000/Snake_Game"} h3='Snake Game' p="Classic snake game" />
            <ProjectCard src={recipe} link={"https://github.com/Sailesh3000/RecipeNet"} h3='RecipeNet' p="Recipe Suggestor" />
        </div>
    </setion>
  )
}

export default Projects