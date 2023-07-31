import React, {useState,useEffect, useRef, useContext} from 'react';
import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';

import { ComprobarUsuario, DatosUsuario } from '../contextos/ComprobarUsuario';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import celularPromo1 from '../../assets/celularPromo1.png';
import celularPromo2 from '../../assets/celularPromo2.png';
import celularPromo3 from '../../assets/celularPromo3.png';
import BannerTarjetaVirtual from '../../assets/BannerTuTarjetaVirtual.png';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

const TarjetProd = () => {
    
    const { pageId } = useParams();
    const [usuarioInfo, setUsuarioInfo]  = useState([]);
    const [usuario, setUsuario] = useState([]);
    
    useEffect(() => {
        const UsuarioComprueba = async () => {
            const respuesta = await ComprobarUsuario(atob( pageId ));
            setUsuarioInfo(respuesta);
    
            const datos = await DatosUsuario(respuesta.usuId);
            setUsuario(datos);
        }

        UsuarioComprueba();
    },[]);
    
    
    if ( usuarioInfo.usuId === 0 ) return null;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    // const [canvasContext, setCanvasContext] = useState(null);
    // const canvasRef = useRef(null);
    // const canvasRefMobile = useRef(null);

    // useEffect(()=>{

    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');

    //     const img = new Image();
    //     img.src = tarjetaAlberto;
    //     context.drawImage(img, 0, 0,397, 238);
    //     context.font = "bold 20px serif";
    //     context.fillStyle = "#fff";

    //     context.fillText('FELIPE AGUILAR' ,190, 160);
    //     context.fillText('DESARROLLADOR' ,190, 190);
    //     setCanvasContext(context);
    // });

    // Canvas Mobile
    // useEffect(()=>{
    //     const canvas = canvasRefMobile.current;
    //     const context = canvas.getContext('2d');

    //     const img = new Image();
    //     img.src = tarjetaAlberto;
    //     context.drawImage(img, 0, 0,330, 198);
        
    //     context.font = "bold 20px serif";
    //     context.fillStyle = "#fff";
    //     context.fillText('FELIPE AGUILAR' ,150,140);
    //     context.fillText('DESARROLLADOR' ,145,165);
        
    //     setCanvasContext(context);
    // });

    return (

        <div className='container-fluid'>
            <div className='tarjetProd'>
                <div className='row justify-content-center pruebas'>
                    <div className='col-11 col-md-4 p-0'>
                        {/* <canvas ref={canvasRef} width={'397px'} height={'238px'}>
                        </canvas> */}
                        <p>
                            Toca la tarjeta para más información
                        </p>
                        {/* <NavLink to={`/${btoa(usuario.empresaId)+btoa(usuario.token)}`}> */}
                        <NavLink to={'/st/'+btoa(usuario.UsuToken)}>
                            
                            <motion.div className='TarjetaContenedorVista'
                                style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+usuario.UsuFondoF})`}}
                                initial={{opacity:0}}
                                whileInView={{opacity:1 , rotate: [0,-5,5,0]}}
                                viewport={{once:true}}
                                transition={{delay: 2, duration:1, type: "spring", damping:30}}
                            >
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </motion.div>
                            
                            
                        </NavLink>
                        
                    </div>
                    <div className='col-11 col-md-8 d-none p-0' id='canvasMobile'>
                        {/* <canvas ref={canvasRefMobile} width={'330px'} height={'198px'} >
                        </canvas> */}
                    </div>
                </div>

                <div className='row mt-2 justify-content-center text-center'>
                    <div className='teEnvio'>
                        <h3>Hola!</h3>
                        <h4>Te envío mi tarjeta de presentación</h4>
                    </div>
                </div>



                <div className='row justify-content-center mt-4'>
                    <div className='col-11 col-md-4 banner'>
                        <motion.div 
                            className='mb-4 text-center'
                            transition={{repeat: Infinity, duration: 3}}
                            animate={{x: [0,-10,10,0]}}
                        >
                            <a href="https://wa.me/5586763895" target={"_blank"}>
                                Solicita aquí tu tarjeta 
                                <i className="bi bi-chevron-right"></i> 
                            </a>
                        </motion.div>
                        <img src={BannerTarjetaVirtual} className="img-fluid" />
                        <p>
                            Promoción válida únicamente para tarjetas personales, si necesita tarjetas para su empresa visite la sección Empresas en donde encontrará descuentos especiales.
                        </p>
                    </div>
                </div>

                <div className='row justify-content-center boton'>
                    <motion.div
                        transition={{repeat: Infinity, duration: 3}}
                        animate={{x: [0,-10,10,0]}}
                    >
                        <a href="https://wa.me/5586763895" target={"_blank"}>
                            Quiero mi Tarjet Gratis <i className="bi bi-chevron-right"></i>
                        </a>
                    </motion.div>
                </div>

                <div className='row justify-content-center slider'>
                    <div className='col-11 col-md-4'>
                        <Slider {...settings}>
                            <div>
                                <img src={celularPromo1} className="img-fluid" />
                            </div>
                            <div>
                                <img src={celularPromo2} className="img-fluid" />
                            </div>
                            <div>
                                <img src={celularPromo3} className="img-fluid" />
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TarjetProd;