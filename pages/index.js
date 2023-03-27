import Roles from '../components/Roles'
import styles from '../styles/home.module.css'


function Home() {
  return (
    <main className={styles.main}>
      <h1>Isar</h1>
      <hr className={styles.hr} />
        <Roles></Roles>
    </main>
  )
}

export default Home
