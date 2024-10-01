import React from 'react';
import { useNavigate} from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Importando a seta da biblioteca react-icons
import './Cabeçalho.css';

function Cabeçalho({ showTitle }) {
  const navigate = useNavigate(); // Certifique-se de que o hook useNavigate está sendo chamado

  return (
    <header>
      {showTitle ? (
        <div className="header-container">
          <nav className="nav-links">
            <a href="#tecnologia" className="nav-link">Tecnologias</a>
            <a href="#conhecimentos" className="nav-link">Conhecimentos</a>
            <a href="#projetos" className="nav-link">Projetos</a>
           
          </nav>
        </div>
      ) : (
        <FaChevronLeft className="back-icon" onClick={() => navigate(-1)} />
      )}
    </header>
  );
}

export default Cabeçalho;
