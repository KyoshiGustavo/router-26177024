import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import NaoEncontrada from './pages/NaoEncontrada';

export default function App() {
  return (
    <div>
      <Navbar quantidade={0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicamentos/novo" element={<Cadastro />} />
        <Route path="/medicamentos" element={<Visualizacao />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </div>
  );
}