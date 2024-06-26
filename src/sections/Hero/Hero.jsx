import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/Resume_Sailesh - IIIT Sricity.pdf"
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const twitter = theme === 'light' ? twitterLight : twitterDark
    const github = theme === 'light' ? githubLight : githubDark
    const linkedin = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroimg} className={styles.hero} alt="profile picture" />
        <img src={themeIcon} className={styles.colorMode} alt="color mode" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Chandra <br/> Sailesh</h1>
        <h2>Full-Stack Developer</h2>
        <span>
            <a href="https://twitter.com/SAILESH3000" target="_blank">
            <img src={twitter} alt="twitter" />
            </a>
            <a href="https://github.com/Sailesh3000" target="_blank">
            <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/chandra-sailesh-b8584b24b/" target="_blank">
            <img src={linkedin} alt="linkedin" />
            </a>
        </span>
        <p className={styles.description}>With a passion for developing full stack web apps for commercial businesses.</p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
