import React from 'react';
import './Tecnologias.css';

const techLinks = {
  React: 'https://react.dev/',
  Html: 'https://www.homehost.com.br/blog/tutoriais/o-que-e-html/',
  CSS: 'https://ebaconline.com.br/blog/o-que-e-css-e-para-que-serve-seo',
  JavaScript: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  TypeScript: 'https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/',
  CSharp: 'https://blog.somostera.com/desenvolvimento-web/linguagem-c',
};

const iconUrls = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  CSharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
};

function Tecnologia() {
  return (
    <section id="tecnologia">
      <h2>Tecnologias</h2>
      <div className="tecnologia-list">
        {Object.entries(iconUrls).map(([tech, url]) => (
          <div key={tech} className="tecnologia-item">
            <a href={techLinks[tech]} target="_blank" rel="noopener noreferrer">
              <img src={url} alt={tech} className="tecnologia-icon" />
              <p>{tech}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologia;
