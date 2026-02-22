import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0 text-muted">
          © 2026 · <strong>Carrito de Compras</strong> (Maquetación Bootstrap)
        </p>
        <div className="d-flex gap-4">
          <a href="#" className="text-decoration-none text-primary"><i className="bi bi-info-circle me-1"></i>Ayuda</a>
          <a href="#" className="text-decoration-none text-primary"><i className="bi bi-shield-check me-1"></i>Políticas</a>
        </div>
      </div>
    </footer>
  );
};