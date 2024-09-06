import React from 'react';
import './styles/Contato.css';

const Contato = () => {
  return (
    <div className="contato-container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato" className="active">Contato</a>
      </nav>
      <div className="contato-content">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <form className="contact-form">
          <label>Nome:</label>
          <input type="text" />
          <label>E-mail:</label>
          <input type="email" />
          <label>Mensagem:</label>
          <textarea />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
