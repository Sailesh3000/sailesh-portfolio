import styles from './SkillsStyles.module.css'
import checkIcon from "../../assets/checkmark-dark.svg"
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkIcon} skill="HTML"/>
            <SkillList src={checkIcon} skill="CSS"/>
            <SkillList src={checkIcon} skill="Javascript"/>
            <SkillList src={checkIcon} skill="Node"/>
            <SkillList src={checkIcon} skill="React"/>
            <SkillList src={checkIcon} skill="Tailwind CSS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkIcon} skill="Material UI"/>
            <SkillList src={checkIcon} skill="MySQL"/>
            <SkillList src={checkIcon} skill="Java"/>
            <SkillList src={checkIcon} skill="C"/>
            <SkillList src={checkIcon} skill="Python"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkIcon} skill="Bootstrap"/>
            <SkillList src={checkIcon} skill="Redux"/>
            <SkillList src={checkIcon} skill="Webpack"/>
            <SkillList src={checkIcon} skill="Git"/>
            <SkillList src={checkIcon} skill="Github"/>
        </div>
    </section>
  )
}

export default Skills