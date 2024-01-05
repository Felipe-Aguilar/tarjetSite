import React, {useState} from 'react';
import { AnimatePresence ,motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './Menu';
import MenuDesktop from './MenuDesktop';

import TarjetNegro from '../assets/TarjetNegro.png';
import LogoTarjet from '../assets/logo-tarjet.svg';
import LogoBuscador from '../assets/entrada-buscador-persona.svg';
import LogoBolsa from '../assets/icono-bolsa-ventas-tarjet.svg';

const Header = () => {

    const [menu, cambioMenu] = useState(true);

    return (
        <>
            <Encabezado className='row m-0 justify-content-between align-items-center'>
                <div className='w-auto'>
                    <a href="https://tarjet.mx/#/acerca-tarjet">
                        <img src={LogoTarjet} alt="Tarjet | Tu tarjeta de presentación Online" onClick={()=> cambioMenu(true)}/>
                    </a>
                </div>


                <div className='w-auto d-flex align-items-center d-lg-none'>

                    <div className='iconosMenuMobile mr-2'>
                        <a href="https://tarjet.site/#/directorio-tarjet">
                            <img src={LogoBuscador} alt="Lupa para búsqueda en directorio tarjet" />
                        </a>
                        <a href="https://shop.tarjet.mx/">
                            <img src={LogoBolsa} alt="Lupa para búsqueda en directorio tarjet" />
                        </a>
                    </div>
                    { menu ?
                        <motion.div 
                            className='Icon'
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1
                            }}
                        >
                            <button onClick={()=> cambioMenu(false)}>
                                {/* <i className="bi bi-list"></i> */}
                                MENÚ
                            </button>
                        </motion.div>
                    :
                        <motion.div 
                            className='Icon'
                            initial={{opacity:0}}
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1
                            }}
                        >
                            <button onClick={()=> cambioMenu(true)}>
                                <i className="bi bi-x" style={{color: '#272527'}}></i>
                            </button>
                        </motion.div>
                    }
                </div>
                <div className='w-auto d-none d-lg-flex'>
                    <div className='iconosMenuDesktop'>
                        <a href="https://tarjet.site/#/directorio-tarjet">
                            <img src={LogoBuscador} alt="Lupa para búsqueda en directorio tarjet" />
                        </a>
                        <a href="https://shop.tarjet.mx/">
                            <img src={LogoBolsa} alt="Lupa para búsqueda en directorio tarjet" />
                        </a>
                    </div>
                    <MenuDesktop />
                </div>
            </Encabezado>
            <AnimatePresence>
                {!menu &&(
                    <NavMenu>
                        <motion.div
                            initial={{opacity: 0, scale:0}}
                            animate={{opacity: 1, scale:1}}
                            exit={{opacity:0, scale:0, x: 200}}
                            className="contenedorMenu"
                        >
                            <Menu cambioMenu={cambioMenu}/>
                        </motion.div>
                    </NavMenu>
                )}
            </AnimatePresence>
        </>
    );
}

const Encabezado = styled.div`
    padding: 15px 100px;
    backdrop-filter: blur(16px);
    backdrop-filter: blur(3px);
    background-color: rgba(234, 237, 240, 0.8);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgb(223, 227, 231);
    @media screen and (max-width: 575px){
        padding: 13px 15px;
    }

    .iconosMenuMobile{
        display: flex;
        gap: 15px;
        
        
        @media (width > 600px) {
            display: none;
        }
        img{
            width: 30px;
        }
    }
    .iconosMenuDesktop{
        display: flex;
        gap: 25px;
        margin-right: 25px;
        align-items: center;
        
        img{
            width: 28px;
        }
    }

    img{
        width: 110px;
        
        @media (width <= 600px) {
            width: 105px;
        }
    }

    .Icon{
        /* background: #fff; */
        padding: 3px 3px;
        /* border-radius: 12px; */
        transition: all .3s ease;

        /* Nuevo dieseño */
        text-transform: uppercase;
        border-bottom: 1px solid #272527;

        button{
            border:none;
            background: transparent;
            outline: none;
            color: #000;
        }
        i{
            font-size: 20px;
            font-weight: bold;
        }
    }
`;

const NavMenu = styled.div`
    .contenedorMenu{
        background: #fff;
        width: 30%;
        /* position: absolute;
        right: 0; */
        position: fixed;
        top: 60px;
        padding: 20px;
        z-index: 99;
        
        @media screen and (max-width: 575px){
            width: 100%;
            /* height: 85%; */
            height: 90.7%;
        }
    
        a{
            display: block;
        }
    }
`;

export default Header;