import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/generales.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { Proveedor } from './componentes/contextos/Sesion';
import { ProveedorDatosUsuarioSesion } from './componentes/contextos/DatosUsuarioSesion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ProveedorDatosUsuarioSesion>
        <Proveedor>
            <App />
        </Proveedor>
      </ProveedorDatosUsuarioSesion>
    </HashRouter>
  </React.StrictMode>
);
