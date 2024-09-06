import React from 'react';
import './styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <div className="home-content">
        <div className="text-section">
          <h1>Crie seus vídeos online</h1>
          <p>
            Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.
          </p>
          <button>Começar agora!</button>
        </div>
        <div className="image-section">
          <img src="/path-to-your-image.jpg" alt="Video Example" />
        </div>
      </div>
      <div className="cards-section">
        <div className="card"> {/* Estilização para os cards */}
          <h2>01</h2>
          <h3>Youtube</h3>
          <p>
            Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.
          </p>
        </div>
        {/* Continue para os outros cards */}
      </div>
    </div>
  );
};

export default Home;
