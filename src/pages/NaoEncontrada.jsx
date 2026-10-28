import { useLocation, Link } from 'react-router-dom';

export default function NaoEncontrada() {
  const location = useLocation();

  return (
    <main style={{ padding: '2rem' }}>
      <h2>404 - Página Não Encontrada</h2>
      <p>O caminho <code>{location.pathname}</code> não foi encontrado neste sistema.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}