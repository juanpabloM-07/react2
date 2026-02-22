import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  // Clase activa para resaltar en qué página estamos
  const activeClass = ({ isActive }) => 
    `nav-link ${isActive ? 'text-primary fw-bold' : 'text-white'}`;

  return (
    <header className="bg-dark text-white p-3 mb-4 shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          
          {/* Logo y Eslogan */}
          <div>
            <NavLink to="/" className="text-decoration-none text-white">
              <h2 className="m-0 text-uppercase fw-bold">Carrito de Compras</h2>
            </NavLink>
            <small className="text-secondary">Maquetación profesional en React</small>
          </div>

          {/* Menú de Navegación */}
          <nav className="d-flex gap-3">
            <NavLink to="/inicio" className={activeClass}>
              Inicio
            </NavLink>
            <NavLink to="/articles" className={activeClass}>
              Article
            </NavLink>
            <NavLink to="/props" className={activeClass}>
              Props
            </NavLink>
           
          </nav>

          {/* Buscador */}
          <div className="d-flex mt-2 mt-lg-0" style={{ maxWidth: '300px', width: '100%' }}>
            <input 
              type="text" 
              className="form-control form-control-sm me-2" 
              placeholder="Buscar..." 
            />
            <button className="btn btn-sm btn-primary px-3">Buscar</button>
          </div>

        </div>
      </div>
    </header>
  );
};