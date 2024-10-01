import React from 'react';
import './Contato.css'; 

//URL ícones 
const iconUrls = {
  linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg',
  github: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg',
  email: 'https://cdn.icon-icons.com/icons2/614/PNG/512/mail-black-envelope-symbol_icon-icons.com_56519.png', // URL atualizada do ícone de e-mail
};

function Contact() {
  return (
    <section id="contato">
      <div className="contato-links">
        <a href="https://www.linkedin.com/in/emili-barbosa" target="_blank" rel="noopener noreferrer" className="contato-item">
          <img src={iconUrls.linkedin} alt="LinkedIn" className="contato-icon" />
        </a>
        <a href="https://github.com/emilibarbosa" target="_blank" rel="noopener noreferrer" className="contato-item">
          <img src={iconUrls.github} alt="GitHub" className="contato-icon" />
        </a>
        <a href="mailto:emilibarbosasilva3@gmail.com" className="contato-item">
          <img src={iconUrls.email} alt="E-mail" className="contato-icon" />
        </a>
      </div>
    </section>
  );
}
export default Contact;
