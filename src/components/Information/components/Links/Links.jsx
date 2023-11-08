import styles from '../../Information.module.css'

function Links () {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Ссылки</h3>
      <div className={styles.info_item_title}>
        <h4 className={styles.social_network}>Instagram:</h4>
        <div className={styles.link}>@bkazybekov_</div>
      </div>
      <div className={styles.info_item_title}>
        <h4 className={styles.social_network}>Tik-Tok:</h4>
        <div className={styles.link}>@barcelunya</div>
      </div>
    </div>
  )
}

export default Links;