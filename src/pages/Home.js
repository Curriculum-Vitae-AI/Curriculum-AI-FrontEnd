import React, { useState } from 'react';
import Card from '../components/Card';
import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import imgCarta from "../assets/Home/imgCarta.svg"
import imgVagas from "../assets/Home/imgVagas.svg"
import FlechaDireita from '../assets/Home/flechaDireita.svg'
import FlechaEsquerda from '../assets/Home/flechaEsquerda.svg'
import "../styles/pages/Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          onClick=""
          imgStyle={({width: '75%'})}
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
          onClick=""
          imgStyle={({width: '40%'})}
        /> 
    },
    { 
      id: 3, 
      content: 
        <Card 
          title="VAGAS"
          text="
            Utilizando conexão com o Chat GPT você pode informar a área que você quer 
            trabalhar, sua experiência e ele indicará para você as melhores vagas que se 
            encaixam para você."
          imgSrc={imgVagas}
          imgAlt="Imagem de vagas"
          onClick=""
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
    <div className="Home">
      <div className="cardHome">
        <div className="carousel">
          <button onClick={prevItem} className="carouselBtn"><img src={FlechaEsquerda} alt='Botão anterior' /></button>

          <div className="carouselItem">
            {items[currentIndex].content}
          </div>

          <button onClick={nextItem} className="carouselBtn"> <img src={FlechaDireita} alt='Botão próximo'/> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;