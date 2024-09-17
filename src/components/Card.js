import "../styles/components/Card.css"

function Card({ title, text, imgSrc, imgAlt, onClick, imgStyle = {} }){
    return(
        <div className="card">
            <div className="esquerda">
                <h1 className="titulo">{title}</h1>
                <p className="texto">{text}</p>
                <button onClick={onClick} className="btnGerar">GERAR</button>
            </div>
            <div className="direita">
                <img src={imgSrc} className="img" alt={imgAlt} style={imgStyle} />
            </div>
        </div>
    );
}

export default Card;