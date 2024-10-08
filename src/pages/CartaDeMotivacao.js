import { Link } from 'react-router-dom';

function CartaDeMotivacao(){
    return(
        <div className="CartaDeMotivacao">
            <div>
                <div>
                    <h1>Nome da empresa</h1>
                    <input placeholder="Qual é o nome da empresa?"/>
                </div>
                <div>
                    <h1>Cargo desejado</h1>
                    <input placeholder="Qual é a vaga?"/>
                </div>
                <div>
                    <h1>Experiência</h1>
                    <textarea id='' placeholder="Escreva sua experiência"></textarea>
                </div>
                
            </div>
            <div className="botoes">
                <Link to="/Curriculum-AI-FrontEnd"><button className="btnVoltar">VOLTAR</button></Link>
                <button className="btnDownload">DOWNLOAD</button>
            </div>
        </div>
    );
}

export default CartaDeMotivacao;