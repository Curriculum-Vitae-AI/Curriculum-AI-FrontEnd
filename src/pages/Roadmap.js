import "../styles/pages/Roadmap.css";

function Roadmap(){
    return(
        <div className="Roadmap">
            <div>
                <h1>Vaga</h1>
                <textarea placeholder="Qual vaga quer se candidatar?"></textarea>
            </div>
            <div className="botoes">
                <button className="btnVoltar">VOLTAR</button>
                <button className="btnDownload">DOWNLOAD</button>
            </div>
        </div>
    );
}

export default Roadmap;