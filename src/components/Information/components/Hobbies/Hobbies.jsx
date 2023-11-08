import styles from '../../Information.module.css'

function Hobbies () {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Хобби</h3>
      <div className={styles.info_item}>Воллейбол</div>
      <div className={styles.info_item}>Футбол</div>
    </div>
  )
}

export default Hobbies;