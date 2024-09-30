import { Link } from 'react-router-dom';

function Roadmap(){
    return(
        <div className="Roadmap">
            <div>
                <h1>Vaga</h1>
                <textarea placeholder="Qual vaga quer se candidatar?"></textarea>
            </div>
            <div className="botoes">
                <Link to="/Curriculum-AI-FrontEnd"><button className="btnVoltar">VOLTAR</button></Link>
                <button className="btnDownload">DOWNLOAD</button>
            </div>
        </div>
    );
}

export default Roadmap;