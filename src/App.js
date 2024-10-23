import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import VerFilme from './pages/VerFilme/VerFilme';
import AlterarFilme from './pages/AlterarFilme/AlterarFilme';
import ApagarFilme from './pages/ApagarFilme/ApagarFilme';
import AdicionarFilme from './pages/AdicionarFilme/AdicionarFilme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ver-filme/:id" element={<VerFilme />} />
            <Route path="/adicionar-filme" element={<AdicionarFilme />} />
            <Route path="/alterar-filme" element={<AlterarFilme />} />
            <Route path="/apagar-filme" element={<ApagarFilme />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
