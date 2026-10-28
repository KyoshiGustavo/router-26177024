export default function Home({ quantidade }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Farmácia Gustavo</h1>
      <p>Bem-vindo ao módulo web de cadastro de medicamentos da Farmácia!</p>
      <p><strong>Desenvolvedor Responsável:</strong> Gustavo Kyoshi Kodama Prajo</p>
      <p><strong>Total de Medicamentos Cadastrados:</strong> {quantidade}</p>
    </main>
  );
}