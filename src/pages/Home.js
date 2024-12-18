import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import imgRoadmap from "../assets/Home/imgRoadmap.svg";
import imgCarta from "../assets/Home/imgCarta.svg";
import imgVagas from "../assets/Home/imgVagas.svg";
import styles from "../styles/pages/Home.module.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const items = [
    { 
      id: 1, 
      content: 
        <Card
          title="ROADMAP"
          text="
            Com nosso gerador de roadmaps você somente precisa indicar 
            a sua vaga desejada e ele irá montar um plano de estudos para 
            que você possa focar somente no aprendizado."
          imgSrc={imgRoadmap}
          imgAlt="Imagem de roadmap"
          onClick={() => navigate('/roadmap')}
          imgStyle={({width: '85%'})}
        /> 
    },
    { 
      id: 2, 
      content: 
        <Card
          title="CARTA DE MOTIVAÇÃO"
          text="
            Com nosso gerador de carta de motivação basta você indicar suas 
            experiências e a vaga a qual quer se candidatar que o programa irá 
            gerar uma carta com todas suas informações e o porque de você ser o 
            candidato ideal para a vaga!"
          imgSrc={imgCarta}
          imgAlt="Imagem de carta de motivação"
          onClick={() => navigate('/motivacao')}
          imgStyle={({width: '40%'})}
        /> 
    },
    { 
      id: 3, 
      content: 
        <Card 
          title="VAGAS"
          text="
            Utilizando conexão com o Gemini você pode informar a área que você quer 
            trabalhar, sua experiência e ele indicará para você as melhores vagas que se 
            encaixam para você."
          imgSrc={imgVagas}
          imgAlt="Imagem de vagas"
          onClick={() => navigate('/vagas')}
          imgStyle={({width: '60%'})}
        /> 
    }
  ];

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.cardHome}>
        <div className={styles.carousel}>
          <button onClick={prevItem} className={styles.carouselBtn}><div className={styles.btnFlecha} id={styles.first} alt='Botão anterior' /></button>

          <div className={styles.carouselItem}>
            {items[currentIndex].content}
          </div>

          <button onClick={nextItem} className={styles.carouselBtn}> <div className={styles.btnFlecha} id={styles.second} alt='Botão próximo'/> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;