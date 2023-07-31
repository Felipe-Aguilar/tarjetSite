import React, { useState } from 'react';

const DatosUsuarioSesion = React.createContext();

const ProveedorDatosUsuarioSesion = ({children}) => {

    const [datosUsuario, setDatosUsuario] = useState();
    const [datosUsuarioId, setDatosUsuarioId] = useState();

    return ( 
        <DatosUsuarioSesion.Provider value={{ datosUsuario, setDatosUsuario, datosUsuarioId, setDatosUsuarioId }}>
            {children}
        </DatosUsuarioSesion.Provider>
    );
}

export { DatosUsuarioSesion, ProveedorDatosUsuarioSesion };