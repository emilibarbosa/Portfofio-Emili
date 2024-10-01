import React from 'react';
import './Sobre.css';
import imagem6 from '../assets/imagem6.png'; 
import Contact from './Contato'; 
import Tecnologia from './Tecnologias'; 
import Projetos from './Projetos'; 
import Conhecimentos from './Conhecimentos'; 


function Sobre() {
  return (
    <section id="sobre">
      <div className="sobre-content">
        <img
          src={imagem6}
          alt="Minha Foto"
          className="profile-pic" />
        <div className="welcome-text">Olá, sou Emili Barbosa!</div>
        <Contact />
        <div className="info-box">
          <p>🎓 Graduanda em Sistemas de Informação pela PUC Minas.</p>
        </div>
        <div className="info-box">
          <p>💡 Entusiasta do mundo da tecnologia e sempre buscando maneiras de me envolver.</p>
        </div>
        <div className="info-box">
          <p>📈 Proativa, estou constantemente aprendendo e aproveitando ao máximo as oportunidades que surgem.</p>
        </div>
        <div className="info-box">
          <p>🎯 Objetivo: Contribuir para a inovação e eficiência em projetos de tecnologia, desenvolvendo soluções que façam a diferença.</p>
        </div>
      </div>
      <Tecnologia />
      <Conhecimentos />
      <Projetos />
     
    </section>
  );
}
export default Sobre;
