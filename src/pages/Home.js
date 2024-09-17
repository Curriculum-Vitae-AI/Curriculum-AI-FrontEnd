import React, { useState } from 'react';
import "../styles/pages/Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    { 
      id: 1, 
      content: "1"
    },
    { 
      id: 2, 
      content: "2"
    },
    { 
      id: 3, 
      content: "3"
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
          <button onClick={prevItem} className="carouselBtn"><img alt='Botão anterior' /></button>

          <div className="carouselItem">
            {items[currentIndex].content}
          </div>

          <button onClick={nextItem} className="carouselBtn"> <img alt='Botão próximo'/> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;