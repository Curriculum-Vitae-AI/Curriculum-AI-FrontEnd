import styles from "../styles/components/Card.module.css";

function Card({ title, text, imgSrc, imgAlt, onClick, imgStyle = {} }){
    return(
        <div className={styles.card}>
            <div className={styles.esquerda}>
                <h1 className={styles.titulo}>{title}</h1>
                <p className={styles.texto}>{text}</p>
                <button onClick={onClick} className={styles.btnGerar}>GERAR</button>
            </div>
            <div className={styles.direita}>
                <img src={imgSrc} className={styles.img} alt={imgAlt} style={imgStyle} />
            </div>
        </div>
    );
}

export default Card;