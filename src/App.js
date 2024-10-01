import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Cabeçalho from './componentes/Cabeçalho';
import Sobre from './componentes/Sobre';
import Tecnologia from './componentes/Tecnologias'; 
import Contact from './componentes/Contato';
import Projetos from './componentes/Projetos';
import Conhecimentos from './componentes/Conhecimentos'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? 'home-background' : ''}>
      <Routes>
        <Route path="/" element={<><Cabeçalho showTitle /><Sobre/></>} />
        <Route path="/tecnologia" element={<><Cabeçalho /><Tecnologia /></>} />
        <Route path="/contact" element={<><Cabeçalho /><Contact /></>} />
        <Route path="/projetos" element={<><Cabeçalho /><Projetos /></>} />
        <Route path="/conhecimentos" element={<><Cabeçalho /><Conhecimentos /></>} />

      </Routes>
    </div>
  );
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
