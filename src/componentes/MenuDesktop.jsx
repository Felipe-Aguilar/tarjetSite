import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';

const MenuDesktop = () => {

    const sesionLocal = localStorage.getItem('UsuarioSesion');
    const { sesionFalse } = useContext(Sesion);

    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem('DatosSesion'));

    return ( 
        <MenuDesktopContenedor>
            
            {/* <a href="https://tarjet.mx/#/que-es-tarjet">Qué es Tarjet</a> */}
            <a href="https://shop.tarjet.mx/" target='_blank'>Tienda</a>
            <a onClick={()=>navigate('/empresas')}>Empresas</a>
            <a href="https://tarjet.mx/#/hazte-premium">Planes</a>
            {/* <a href='https://wa.me/5586763895' target='_blank'>Contacto</a> */}

            { sesionLocal && 
                // <NavLink to={`/mi-perfil/${btoa(usuario.UsuToken)}`}>Mi perfil</NavLink>
                <NavLink to={`/${btoa(usuario.UsuToken)}`}>Mi Tarjetero</NavLink>
            }

            <a href="https://tarjet.mx/#/acerca-tarjet">Acerca de Tarjet</a>
            <a onClick={()=>navigate('directorio-tarjet')}>Directorio Tarjet</a>

            { !sesionLocal ? 
                // <NavLink to="/login">Iniciar Sesion</NavLink>
                <NavLink to="/login">Mi tarjetero</NavLink>
            :
                <button onClick={sesionFalse}>Cerrar Sesion</button>
            }

            <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100095193982785&mibextid=ZbWKwL" target='_blank'>
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/tarjetmx/" target='_blank'>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            
        </MenuDesktopContenedor>
    );
}

const MenuDesktopContenedor = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    a{
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: #48657c!important;
        cursor: pointer;
        letter-spacing: 0;
    }
    button{
        background: none;
        border: none;
        outline: none;

        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: #48657c;
        letter-spacing: 0;
    }
    .disabled{
        color: #696969;
        pointer-events: none;
    }
    .social{
    display: flex;
    gap: 15px;

    i{
        font-size: 1.5rem;
    }
}
`;

export default MenuDesktop;