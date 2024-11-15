import styles from "../styles/pages/SobreNos.module.css";

function SobreNos() {
    return (
            <div className={styles.sobreNos}>
                <div className={styles.cardSobreNosPrincipal}>
                    <div className={styles.tituloSobreNos}>
                        <h1>
                            Conquiste seu futuro profissional.
                        </h1>
                    </div>
                    <div className={styles.cardSobreNosSegundario}>
                        <p>
                            Em um mundo cada vez mais conectado, a tecnologia está presente em todos os aspectos da
                            nossa vida. No Curriculum AI, acreditamos que a tecnologia pode auxiliar no nosso desempenho,
                            nos estudos. Facilitando nossa trilha de aprendizagem, independentemente do seu conhecimento
                            técnico. Nossa missão é oferecer ferramentas e recursos para que você possa adquirir conhecimento
                            de forma mais fácil e eficiente. <br/> Se você é um estudante buscando aprimorar suas habilidades para
                            ingressar no mercado de trabalho, um profissional em busca de novas oportunidades de carreira,
                            aqui você encontrará tudo o que precisa para estar sempre com todo conhecimento em dia.
                        </p>
                    </div>
                </div>
                <div className={styles.cardSobreNosPrincipal}>
                    <div className={styles.tituloSobreNos}>
                        <h1>
                            O caminho, a motivação e a oportunidade em um só lugar.
                        </h1>
                    </div>
                    <div className={styles.cardSobreNosSegundario}>
                        <p>
                            Nosso objetivo é:
                        </p>
                        <ul>
                            <li>Simplificar a vida: Oferecendo soluções tecnológicas para acelerar sua aprendizagem.</li>
                            <li>Inspirar: Compartilhando conhecimento e promovendo a inovação.</li>
                            <li>Conectar: Criando uma comunidade de pessoas apaixonadas por aprender.</li>
                        </ul>
                        <p>
                            Site desenvolvido por estudantes de sistemas da informação com o intuito
                            de facilitar sua jornada de estudos, encurtando e direcionando as pessoas
                            direto aos conhecimentos necessarios de suas areas desejadas de trabalho.
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default SobreNos;