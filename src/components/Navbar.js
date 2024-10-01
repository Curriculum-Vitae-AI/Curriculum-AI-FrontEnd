import styles from "../styles/components/Navbar.module.css";
import Logo from "../assets/Logo.svg";
import MenuFechado from "../assets/menuFechado.svg";
import MenuAberto from "../assets/menuAberto.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar(){
    const location = useLocation();
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
      };

    return(
        <div className={styles.Navbar}>
            <div className={`${styles.Botoes} ${isResponsive ? styles.responsive : ''}`}>   
                <button id={styles.iconFechado} className={styles.icon} onClick={toggleResponsive}> <img src={MenuFechado} className={styles.iconFechado} alt="menu fechado"/> </button>
                <button id={styles.iconAberto} className={styles.icon}  onClick={toggleResponsive}> <img src={MenuAberto} className={styles.iconAberto} alt="menu aberto"/> </button>
        
                <Link to="/Curriculum-AI-FrontEnd"><img className={styles.Logo} src={Logo} alt="Logo"/></Link>
                
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