import React, {useContext} from 'react';

import { Sesion } from './contextos/Sesion';

import TarjetProd from './tarjet-prod/tarjet';
import MiTarjetero from './tarjet-prod/MiTarjetero';

const VistaSesion = ({servicioToken}) => {

    const sesion = useContext(Sesion);

    
    const sesionLocal = localStorage.getItem('UsuarioSesion');

    return ( 
        <>
            { sesion.estadoSesion || sesionLocal ? 
                <MiTarjetero servicioToken={servicioToken}/>
            :
                <TarjetProd servicioToken={servicioToken}/>
            }
        
        </>
    );
}

export default VistaSesion;