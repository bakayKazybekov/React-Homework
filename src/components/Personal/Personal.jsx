import styles from './Personal.module.css'

function Personal () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h3 className={styles.full_name}>Бакай Казыбеков</h3>
            <h3 className={styles.speciality}>future front-end разработчик</h3>
          </div>
          <div className={styles.contacts}>
            <div className={styles.adress}>Аким Тыналиева 57, Бишкек, Кыргызстан</div>
            <div className={styles.number}>+996 708 066 850</div>
            <div className={styles.email}>bakaykazybekovich@gmail.com</div>
          </div>
        </div>
        <div className={styles.about_me}>
          <h3 className={styles.about_me_title}>ОБО МНЕ</h3>
          <p className={styles.about_me_text}>Студент 2 курса IT-колледжа, КНУ</p>
        </div>
      </div>
    </>
  )
}

export default Personal;