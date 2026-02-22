import React from 'react';

export const Content = () => {
 
  const productos = [
    { id: 1, nombre: 'Audífonos Pro', precio: '159.900', stock: 'En stock', badge: 'bg-success', img: '/img/audifono.jpg' },
    { id: 2, nombre: 'Teclado Mecánico', precio: '249.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/img/teclado.jpg' },
    { id: 3, nombre: 'Smartwatch', precio: '329.000', stock: 'Agotado', badge: 'bg-secondary', img: '/img/smartwatch.jpg' },
    { id: 4, nombre: 'Cámara HD', precio: '1.099.000', stock: 'En stock', badge: 'bg-success', img: '/img/camara.jpg' }
  ];

  return (
    <main className="container my-4">
      <div className="row">
        {/* Formulario */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0">Agregar nuevo producto</h5>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Nombre del producto:</label>
                  <input type="text" className="form-control" />
                </div>
                <button type="button" className="btn btn-success w-100 py-2">Agregar</button>
              </form>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="col-lg-8">
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {productos.map((p) => (
              <div className="col" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <div className="row g-0 align-items-center">
                    <div className="col-4 p-2 text-center">
                      {/* ESTA ES LA PARTE CLAVE: el src debe ser p.img */}
                      <img 
                        src={p.img} 
                        className="img-fluid rounded" 
                        alt={p.nombre}
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/100'; }} 
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body p-2">
                        <h6 className="card-title mb-1 fw-bold">{p.nombre}</h6>
                        <p className="text-primary mb-1 fw-bold">COP ${p.precio}</p>
                        <span className={`badge ${p.badge} mb-2`}>{p.stock}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};