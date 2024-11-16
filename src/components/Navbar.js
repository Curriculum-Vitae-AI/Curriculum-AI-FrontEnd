import styles from "../styles/components/Navbar.module.css";
import Logo from "../assets/Logo.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    };

    return (
        <div className={styles.Navbar}>
            <div className={`${styles.Botoes} ${isResponsive ? styles.responsive : ''}`}>
                <button id={styles.iconFechado} className={styles.icon} onClick={toggleResponsive}>
                    <div className={`${styles.iconFechado} ${isResponsive ? styles.responsive : ''}`} alt="menu fechado" />
                </button>

                <Link to="/"><img className={styles.Logo} src={Logo} alt="Logo" /></Link>

                <button className={`${styles.btn} ${location.pathname === '/roadmap' ? styles.active : ''}`}>
                    <Link to="/roadmap">ROADMAP</Link>
                </button>
                <button className={`${styles.btn} ${location.pathname === '/motivacao' ? styles.active : ''}`}>
                    <Link to="/motivacao">CARTA DE MOTIVAÇÃO</Link>
                </button>
                <button className={`${styles.btn} ${location.pathname === '/vagas' ? styles.active : ''}`}>
                    <Link to="/vagas">VAGAS</Link>
                </button>
                <button className={`${styles.btn} ${location.pathname === '/sobre' ? styles.active : ''}`}>
                    <Link to="/sobre">SOBRE NÓS</Link>
                </button>
            </div>
        </div>
    );
}

export default Navbar;