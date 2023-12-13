import React, { useState } from 'react';

const MiTarjeteroGet = React.createContext();

const ProveedorMiTarjeteroGet = ( { children } ) => {

    const obtenerMiTarjeteroGet = async(idUsuario) => {
        
        const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaMiTarjet/?Usutarjetid=${idUsuario}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            
            const dataUsuario = await response.json();
            
            return dataUsuario;
    }

    return ( 
        <MiTarjeteroGet.Provider value={{obtenerMiTarjeteroGet}}>
            { children }
        </MiTarjeteroGet.Provider>
    );
}

export { MiTarjeteroGet, ProveedorMiTarjeteroGet};