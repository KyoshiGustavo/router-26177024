import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import NaoEncontrada from './pages/NaoEncontrada';

export default function App() {
  // Requisito R3: Estado centralizado com 3 registros iniciais.
  // Um deles contendo o seu RA no campo complementar (laboratório).
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, nome: 'Dipirona 500mg', preco: 12.50, tarja: 'Livre', laboratorio: 'RA 26177024 Lab' },
    { id: 2, nome: 'Amoxicilina 500mg', preco: 35.90, tarja: 'Vermelha', laboratorio: 'Medley' },
    { id: 3, nome: 'Rivotril 2mg', preco: 48.00, tarja: 'Preta', laboratorio: 'Roche' }
  ]);

  // Função criada no App para adicionar novo registro imutavelmente (Requisito R4 e R5)
  const adicionarMedicamento = (novo) => {
    setMedicamentos(prev => [...prev, novo]);
  };

  return (
    <div>
      {/* Navbar recebe a quantidade de registros para exibir no link */}
      <Navbar quantidade={medicamentos.length} />
      <Routes>
        <Route path="/" element={<Home quantidade={medicamentos.length} />} />
        <Route path="/medicamentos/novo" element={<Cadastro aoAdicionar={adicionarMedicamento} />} />
        {/* Passamos o estado e o título para a visualização */}
        <Route path="/medicamentos" element={<Visualizacao titulo="Lista de Medicamentos Cadastrados" medicamentos={medicamentos} />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </div>
  );
}