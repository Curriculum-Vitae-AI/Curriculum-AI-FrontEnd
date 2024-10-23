import { Link } from 'react-router-dom';

function Vagas(){
    return(
        <div className="Vagas">
            <div>
                <div>
                    <h1>Cargo desejado</h1>
                    <input placeholder="Informe o nome do cargo desejado para realizar a busca"/>
                </div>
                <div>
                    <h1>Localidade</h1>
                    <input placeholder="Informe o local da vaga, ou digite 'remoto' para buscar vagas em todo o país"/>
                </div>
                <div>
                    <h1>Senioridade da vaga</h1>
                    <input placeholder="Júnior, Pleno, Sênior e  etc..."/>
                </div>                
            </div>
            <div className="botoes">
                <Link to="/Curriculum-AI-FrontEnd"><button className="btnVoltar">VOLTAR</button></Link>
                <button className="btnDownload">BUSCAR</button>
            </div>
        </div>
    );
}

export default Vagas;