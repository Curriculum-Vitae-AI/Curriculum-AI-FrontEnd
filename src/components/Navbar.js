import styles from "../styles/components/Navbar.module.css";
import Logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar(){
    const location = useLocation();

    return(
        <div className={styles.Navbar}>
            <button className={styles.Logo}> 
            <Link to="/Curriculum-AI-FrontEnd"><img src={Logo} alt="Logo"/></Link>
            </button>
            <div className={styles.Botoes}>
            <button className={`${styles.btn} ${location.pathname === '/Roadmap' ? styles.active : ''}`}>
                    <Link id={styles.link} to="/Roadmap">ROADMAP</Link>
                </button>
                <button className={`${styles.btn} ${location.pathname === '/CartaDeMotivacao' ? styles.active : ''}`}>
                    <Link id={styles.link} to="/CartaDeMotivacao">CARTA DE MOTIVAÇÃO</Link>
                </button>
                <button className={`${styles.btn} ${location.pathname === '/Vagas' ? styles.active : ''}`}>
                    <Link id={styles.link} to="/Vagas">VAGAS</Link> 
                </button>
                <button className={`${styles.btn} ${location.pathname === '/SobreNos' ? styles.active : ''}`}>
                    <Link id={styles.link} to="/SobreNos">SOBRE NÓS</Link> 
                </button>
            </div>
        </div>
    );
}

export default Navbar;