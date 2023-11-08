import styles from '../../Information.module.css'

function PersonalData () {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Личные данные</h3>
      <div className={styles.info_item}>
        <h4 className={styles.info_item_title}>Дата рождения</h4>
        <div className={styles.info}>10.14.2006</div>
      </div>
      <div className={styles.info_item}>
        <h4 className={styles.info_item_title}>Нацианальность</h4>
        <div className={styles.info}>Кыргыз</div>
      </div>
    </div>
  )
}

export default PersonalData;
