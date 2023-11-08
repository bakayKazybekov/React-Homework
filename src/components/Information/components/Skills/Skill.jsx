import styles from '../../Information.module.css'

function Skills () {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Навыки</h3>
      <div className={styles.info_item}>HTML</div>
      <div className={styles.info_item}>CSS</div>
      <div className={styles.info_item}>JavaScript</div>
      <div className={styles.info_item}>GIT</div>
      <div className={styles.info_item}>REACT</div>
    </div>
  )
}

export default Skills;