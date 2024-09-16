import "../styles/components/Navbar.css";
import Logo from "../assets/Logo.svg";
function Navbar(){

    return(
        <div className="Navbar">
            <button className="Logo"> 
                <img src={Logo} alt="Logo"/>
            </button>
            <div className="Botoes">
                <button>
                    <p>ROADMAP</p>
                </button>
                <button>
                    <p >CARTA DE MOTIVAÇÃO</p>
                </button>
                <button>
                    <p >VAGAS</p> 
                </button>
                <button>
                    <p >SOBRE NÓS</p> 
                </button>
            </div>
        </div>
    );
}

export default Navbar;