import { NavLink } from 'react-router-dom';

export default function Navbar({ quantidade }) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--cor-principal, #3b2314)',
      color: '#fff'
    }}>
      <h2>Farmácia Gustavo</h2>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/medicamentos" 
          style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}
        >
          Medicamentos ({quantidade})
        </NavLink>
        <NavLink 
          to="/medicamentos/novo" 
          style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}
        >
          Novo Medicamento
        </NavLink>
      </div>
    </nav>
  );
}