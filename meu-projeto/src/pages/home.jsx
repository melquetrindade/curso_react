import styles from '../styles/backgroundPrincipal.module.css'

function Home(){
    return(
        <div className={styles.backgroundHome}>
            <h1>Home</h1>
            <p>Bem-vindo à nossa página inicial!</p>
        </div>
    )
}

export default Home