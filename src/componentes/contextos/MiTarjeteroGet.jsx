import React, { useState } from 'react';

const MiTarjeteroGet = React.createContext();

const ProveedorMiTarjeteroGet = ( { children } ) => {

    const obtenerMiTarjeteroGet = async(idUsuario) => {
        
        const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaMiTarjet/?Usutarjetid=${idUsuario}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error(error));
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