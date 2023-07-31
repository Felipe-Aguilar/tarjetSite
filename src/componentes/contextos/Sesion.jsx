import React, { useState, useEffect } from 'react';

const Sesion = React.createContext();


const Proveedor = ({ children }) => {
    const [estadoSesion, setEstadoSesion] = useState(false);

    const sesionTrue = () =>{
        setEstadoSesion(true);
        localStorage.setItem('UsuarioSesion', true);
    }
    const sesionFalse = () =>{
        localStorage.removeItem('UsuarioSesion');
        setEstadoSesion(false);
        window.location.reload();
    }

    // useEffect(()=>{
    //     localStorage.setItem('sesion', estadoSesion);
    // },[estadoSesion]);

    return ( 
        <Sesion.Provider value={{estadoSesion, sesionTrue, sesionFalse}}>
            { children }
        </Sesion.Provider>
    );
}

export {Sesion, Proveedor};