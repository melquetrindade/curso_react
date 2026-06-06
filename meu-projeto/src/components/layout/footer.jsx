import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from '../../styles/footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook color="#3b5998" />
                </li>
                <li>
                    <FaInstagram color="#e4405f" />
                </li>
                <li>
                    <FaLinkedin color="#0077b5" />
                </li>
            </ul>
            <p>© 2024 Minha Empresa. Todos os direitos reservados.</p> 
        </footer>
    )
}

export default Footer