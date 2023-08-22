import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';

const MenuDesktop = () => {

    const sesionLocal = localStorage.getItem('UsuarioSesion');
    const { sesionFalse } = useContext(Sesion);

    const navigate = useNavigate();

    return ( 
        <MenuDesktopContenedor>
            
            {/* <a href="https://tarjet.mx/#/que-es-tarjet">Qué es Tarjet</a> */}
            <a href="https://shop.tarjet.mx/" target='_blank'>Tienda</a>
            <a href='https://tarjet.mx/#/empresas' className='disabled'>Empresas</a>
            <a href="https://tarjet.mx/#/hazte-premium">Premium</a>
            {/* <a href='https://wa.me/5586763895' target='_blank'>Contacto</a> */}

            { !sesionLocal ? 
                <NavLink to="/login">Iniciar Sesion</NavLink>
            :
                <button onClick={sesionFalse}>Cerrar Sesion</button>
            }

            { sesionLocal && 
                <NavLink to={'/mi-perfil'}>Mi perfil</NavLink>
            }

            <a onClick={()=>navigate('directorio-tarjet')}>Directorio Tarjet</a>

            <div className='social'>
                <a href="" target='_blank'>
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="" target='_blank'>
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