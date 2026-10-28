import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Requisito R5 & Tabela B (Regra 0): Nome com no mínimo 3 caracteres (trim)
export default function Cadastro({ aoAdicionar }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    preco: '',
    tarja: 'Livre',
    laboratorio: ''
  });
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome || !form.preco || !form.tarja || !form.laboratorio) {
      setErro('Preencha todos os campos!');
      return;
    }

    if (form.nome.trim().length < 3) {
      setErro('O nome do medicamento deve ter no mínimo 3 caracteres (ignorando espaços)!');
      return;
    }

    const novoMedicamento = {
      id: Date.now(),
      nome: form.nome.trim(),
      preco: parseFloat(form.preco),
      tarja: form.tarja,
      laboratorio: form.laboratorio
    };

    aoAdicionar(novoMedicamento);
    navigate('/medicamentos'); 
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Cadastrar Novo Medicamento</h2>
      {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>{erro}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <div>
          <label>Nome do Medicamento: </label><br />
          <input type="text" name="nome" value={form.nome} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        </div>
        <div>
          <label>Preço (R$): </label><br />
          <input type="number" step="0.01" name="preco" value={form.preco} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        </div>
        <div>
          <label>Tarja: </label><br />
          <select name="tarja" value={form.tarja} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }}>
            <option value="Livre">Livre</option>
            <option value="Vermelha">Vermelha</option>
            <option value="Preta">Preta</option>
          </select>
        </div>
        <div>
          <label>Laboratório: </label><br />
          <input type="text" name="laboratorio" value={form.laboratorio} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        </div>
        <button type="submit" style={{ backgroundColor: 'var(--cor-principal, #3b2314)', color: '#fff', padding: '0.6rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Salvar
        </button>
      </form>
    </main>
  );
}