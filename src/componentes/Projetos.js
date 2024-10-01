import React from 'react';
import Slider from 'react-slick';
import './Projetos.css';

const projetos = [
  {
    id: 1,
    nome: 'Lista de Tarefas',
    descricao: 'Um site para criar, remover e organizar tarefas diárias.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/emilibarbosa/Lista-de-Tarefas',
    imagem: require('../assets/imagem1.png')
  },
  {
    id: 2,
    nome: 'Galeria de Fotos',
    descricao: 'Um site onde você pode exibir uma galeria de imagens permitindo que o usuário adicione e remova fotos.',
    tecnologias: ['React', 'TypeScript', 'CSS'],
    link: 'https://github.com/emilibarbosa/Galeria-de-Fotos',
    imagem: require('../assets/imagem2.png')
  },
  {
    id: 3,
    nome: 'Agenda de Contatos',
    descricao: 'Uma aplicação para gerenciar contatos pessoais e profissionais.',
    tecnologias: ['React', 'CSS', 'JavaScript'],
    link: 'https://github.com/emilibarbosa/Agenda-de-Contatos',
    imagem: require('../assets/imagem3.png')
  },
  {
    id: 4,
    nome: 'Clima',
    descricao: 'Site de previsão do tempo onde ao pesquisar a cidade desejada mostra a temperatura atual, condições climáticas e probabilidade de chuva.',
    tecnologias: ['React', 'CSS', 'JavaScript'],
    link: 'https://github.com/emilibarbosa/Clima',
    imagem: require('../assets/imagem4.png')
  },
  {
    id: 5,
    nome: 'Cadastro de Clientes',
    descricao: 'Programa permite adicionar, visualizar, editar e excluir clientes por meio de um menu interativo no console.',
    tecnologias: ['C#'],
    link: 'https://github.com/emilibarbosa/Cadastro-de-Clientes',
    imagem: require('../assets/imagem7.png')
  },
];

function Projetos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projetos">
      <h4>Meus Projetos</h4>
      <Slider {...settings}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projeto-item">
            <img src={projeto.imagem} alt={projeto.nome} className="projeto-imagem" />
            <h3>{projeto.nome}</h3>
            <p className="descricao">{projeto.descricao}</p>
            <p className="tecnologias"><strong>Tecnologias:</strong> {projeto.tecnologias.join(', ')}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projetos;
