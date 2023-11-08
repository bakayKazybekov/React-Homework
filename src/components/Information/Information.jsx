import Hobbies from './components/Hobbies/Hobbies';
import Languages from './components/Languages/Languages';
import Links from './components/Links/Links';
import PersonalData from './components/Personal-Data/Personal-Data';
import Skills from './components/Skills/Skill';
import styles from './Information.module.css'

function Information () {
  return (
    <div className={styles.container}>
      <div className={styles.info_wrapper}>
        <div className={styles.item}><Links/></div>
        <div className={styles.item}><Skills/></div>
        <div className={styles.item}><Languages/></div>
        <div className={styles.item}><Hobbies/></div>
        <div><PersonalData/></div>
      </div>
    </div>
  )
}

export default Information;