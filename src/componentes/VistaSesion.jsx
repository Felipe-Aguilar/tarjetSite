import React, {useContext, useEffect} from 'react';

import { Sesion } from './contextos/Sesion';
import { useNavigate } from 'react-router-dom';

import TarjetProd from './tarjet-prod/tarjet';
import MiTarjetero from './tarjet-prod/MiTarjetero';


const VistaSesion = ({servicioToken}) => {

    const sesion = useContext(Sesion);
    const sesionLocal = localStorage.getItem('UsuarioSesion');

    const navigate = useNavigate();

    useEffect(()=>{
        if (!sesion.estadoSesion && !sesionLocal) {
            navigate('/login');
        }
    },[])

    return ( 
        <>
            { sesion.estadoSesion || sesionLocal && 
                <MiTarjetero servicioToken={servicioToken}/>
            // :
            //     <TarjetProd servicioToken={servicioToken}/>
            }
        
        </>
    );
}

export default VistaSesion;