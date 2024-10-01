import React from 'react';
import Slider from 'react-slick';
import './Conhecimentos.css';

function Conhecimentos() {
  const conhecimentos = [
    { nome: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { nome: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { nome: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
    { nome: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { nome: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { nome: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { nome: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 ícones por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <button className="seta-direita">&#10095;</button>, // Seta direita
    prevArrow: <button className="seta-esquerda">&#10094;</button>, // Seta esquerda
  };

  return (
    <section id="conhecimentos">
      <h2>Conhecimentos</h2>
      <Slider {...settings}>
        {conhecimentos.map((habilidade, index) => (
          <div key={index} className="habilidade-item">
            <img src={habilidade.icon} alt={habilidade.nome} className="habilidade-icon" />
            <p className="habilidade-nome">{habilidade.nome}</p> {/* Nome abaixo do ícone */}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Conhecimentos;
