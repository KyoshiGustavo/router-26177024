export default function Visualizacao({ titulo, medicamentos }) {
  const medicamentosOrdenados = [...medicamentos].sort((a, b) => b.preco - a.preco);

  const valorTotal = medicamentos.reduce((acc, med) => acc + Number(med.preco), 0);

  return (
    <main style={{ padding: '2rem' }}>
      <h2>{titulo}</h2>

      {medicamentos.length === 0 ? (
        <p>Nenhum medicamento cadastrado no momento.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--cor-principal, #3b2314)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Nome</th>
              <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Laboratório</th>
              <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>Tarja</th>
              <th style={{ padding: '0.8rem', border: '1px solid #ddd', textAlign: 'right' }}>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {medicamentosOrdenados.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>{item.nome}</td>
                <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>{item.laboratorio}</td>
                <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>{item.tarja}</td>
                <td style={{ padding: '0.8rem', border: '1px solid #ddd', textAlign: 'right' }}>
                  R$ {Number(item.preco).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
              <td colSpan="3" style={{ padding: '0.8rem', border: '1px solid #ddd', textAlign: 'right' }}>
                TOTAL:
              </td>
              <td style={{ padding: '0.8rem', border: '1px solid #ddd', textAlign: 'right' }}>
                R$ {valorTotal.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </main>
  );
}