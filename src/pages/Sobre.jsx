import React from 'react';
import './styles/Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/sobre" className="active">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <div className="sobre-content">
        <h1>Bem-vindo à revolução dos vídeos!</h1>
        <p>
          Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional.
        </p>
        <button>Baixe o app</button>
      </div>
      <div className="plans-section">
        {/* Adicione os planos conforme o design */}
      </div>
    </div>
  );
};

export default Sobre;
