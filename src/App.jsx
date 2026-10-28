import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import NaoEncontrada from './pages/NaoEncontrada';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicamentos/novo" element={<Cadastro />} />
        <Route path="/medicamentos" element={<Visualizacao />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </div>
  );
}