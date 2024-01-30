import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { BusquedaNombre, BusquedaCategoria, ConsultaActividad, ConsultaNivel3, BusquedaNivel3 } from "../contextos/BusquedaDirectorio";

import NuevosUsuarios from './NuevosUsuarios';
import VideoBanner from './VideoBanner';

import iconoComida from '../../assets/icono-comida.svg';
import iconoEducacion from '../../assets/icono-educacion.svg';
import iconoModa from '../../assets/icono-moda.svg';
import iconoSalud from '../../assets/icono-salud.svg';
import iconoServicios from '../../assets/icono-servicios.svg';
import iconoTiendas from '../../assets/icono-tiendas.svg';
import iconoTransporte from '../../assets/icono-transporte.svg';
import iconoTurismo from '../../assets/icono-turismo.svg';
import PerfilTemporal from '../../assets/perfiltemporal.jpg';

const BusquedaDirectorio = () => {

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState(false);
    const [nombreBusqueda, setNombreBusqueda] = useState(false);
    const [categoriaBusqueda, setCategoriaBusqueda] = useState(false);

    const [categorias, setCategorias] = useState([]);

    const iconCategoria = [
        {id:1, imagen: iconoServicios},
        {id:2, imagen: iconoSalud},
        {id:3, imagen: iconoTiendas},
        {id:4, imagen: iconoTurismo},
        {id:5, imagen: iconoEducacion},
        {id:6, imagen: iconoTransporte},
        {id:7, imagen: iconoComida},
        {id:8, imagen: iconoModa},
        {id:9, imagen: iconoTiendas},
    ]

    useEffect(()=>{

        const Categorias = async () => {
            const response = await BusquedaCategoria();
            setCategorias(response.SDTCategorias);
        }

        Categorias();

    },[]);


// Busqueda por Nombre
    const [capturaNombre, setCapturaNombre] = useState('');
    const [resultadosNombre, setResultadosNombre] = useState([]);

    const busquedaNombre = async (e) => {
        setCategoriaBusqueda(false);
        setReCategoria(false);
        setReplegar(null);
        setBtnSeleccionado('');

        setCapturaNombre(e.target.value);
        setBusqueda(true);
        setNombreBusqueda(true);

        if (e.target.value.length >= 3) {
            const respuesta = await BusquedaNombre(e.target.value);
            setResultadosNombre(respuesta.ListTarjets);
        }

        if (e.target.value.length === 0) {
            setBusqueda(false);
        }
    }

    const borrarNombre = () => {
        setBusqueda(false);
        setNombreBusqueda(false);
        setCapturaNombre('');
    }

    
// Busqueda por Categoría
    const [categoriaN1, setCategoriaN1] = useState([]);
    const [categoriasN2, setCategoriasN2] = useState([]);
    const [replegar, setReplegar] = useState(null);
    const [btnSeleccionado, setBtnSeleccionado] = useState('');

    const busquedaCategoria = async (e, categoria, idCategoria) => {
        setNombreBusqueda(false);
        setCapturaNombre('');
        setBtnSeleccionado(e.target.innerText);
        setReCategoria(false);
        setUsuariosCategoria([]);

        setBusqueda(true);
        setCategoriaBusqueda(true);
        setCategoriaN1([idCategoria, categoria]);

        const response = await ConsultaActividad(idCategoria);
        setCategoriasN2(response.SDTCategorias[0].Level2);
    }

    const borrarCategoria = () => {
        setBusqueda(false);
        setCategoriaBusqueda(false);
        setReplegar(null);
        setBtnSeleccionado('');
    }

    // Selección de categoría N2
    const[categoriasN3, setCategoriasN3] = useState([]);

    const SelectCategoriaN2 = async (categoria, idCategoria) => {
        const response = await ConsultaNivel3(categoriaN1[0], idCategoria);
        setCategoriasN3(response.SDTCategorias[0].Level2[0].Level3);
        
        setReplegar(idCategoria === replegar ? null : idCategoria);
    }

    // Busqueda de usuarios categoría N3
    const [usuariosCategoria, setUsuariosCategoria] = useState([]);
    const [reCategoria, setReCategoria] = useState(false);

    const busquedaCategoriaN3 = async (categoria, idCategoria) => {
        setCategoriaBusqueda(false);
        setReCategoria(true);

        const response = await BusquedaNivel3(idCategoria);
        setUsuariosCategoria(response.ListTarjets);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

// Settings Slider
    const SliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <i className="bi bi-chevron-left" ></i>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <i className="bi bi-chevron-right" ></i>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                arrows:true
                }
            },
            {
                breakpoint: 1250,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                arrows:true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                arrows:true
                }
            },
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows:true
                }
            }
        ]
    };

// Animación Resultados
    const PropsAnimation = {
        initial: {scale: 0},
        animate: {scale: 1}
    }

    return ( 
        <div className="container-fluid BusquedaDirectorio">

            <div className="Barra">
                <div className="Title">
                    <h1>Busca en el Directorio Tarjet</h1>

                    <div className="switch-toggle">
                        <span>5km</span>

                        <label className="switch mb-0">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

                <div className='buscar-contenedor'>
                    <div className='img-form'>
                        <i className="bi bi-search"></i>
                    </div>

                    <input 
                        type="text" 
                        placeholder='Nombre, actividad ó Usuario Tarjet'
                        value={capturaNombre}
                        onChange={busquedaNombre}
                    />

                    <div className='borrar'>
                        <button onClick={borrarNombre} disabled={capturaNombre === '' ? true : false}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="categorias-busqueda">
                <Slider {...SliderSettings}>
                    { categorias.map((categoria, index)=>(
                        <div key={index} className="categoria-button">
                            <button 
                                onClick={(e)=>busquedaCategoria(e,categoria.Desc, categoria.Id)}
                                className={btnSeleccionado === categoria.Desc ? 'select' : ''}
                            >
                                <img src={iconCategoria[index].imagen} />
                                {categoria.Desc}
                            </button>
                        </div>
                    ))
                    }
                </Slider>
            </div>

            { busqueda ?
                <>
                    { nombreBusqueda &&
                        (
                            <motion.div className="Resultados" {...PropsAnimation}>
                                
                                <div className="cerrar">
                                    <button onClick={borrarNombre}>
                                        <i className="bi bi-x-lg"></i>
                                        Cerrar ventana de resultados
                                    </button>
                                </div>
                                
                                { resultadosNombre.length > 0 ? 
                                    (
                                        <div className='cards'>
                                            { resultadosNombre.map((resultado)=>(
                                                resultado.PublicPriva === 0 ? (
                                                    resultado.RegistroTarjet &&
                                                        <div className='contenedor' key={resultado.IdUsuario}>
                                                            <div className='title'>
                                                                <div className='img'>
                                                                    { resultado.ImgFoto !== '' ?
                                                                        <img src={`https://tarjet.site/imagenes/perfil-imagenes/${resultado.ImgFoto}`}/>
                                                                    : 
                                                                        <img src={PerfilTemporal}/>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <h5>
                                                                        {resultado.NombreCompleto}
                                                                        <br/>
                                                                        <span>{resultado.Actividad}</span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className='tarjetaImg'>
                                                                <img 
                                                                    src={`https://tarjet.site/imagenes/tarjetas_frente_usuarios/${resultado.FondoF}`} className='img-fluid'
                                                                    onClick={()=>navigate(`/st/${btoa(resultado.Token)}`)}
                                                                />
                                                            </div>
                                                            <div className='footer'>
                                                                <p>
                                                                    Da click sobre la imagen para ver tarjeta digital
                                                                </p>
                                                            </div>
                                                        </div>
                                                ) : null
                                            ))
                                            }
                                        </div>
                                    ) : (
                                        <p className="no-results">No se encontraron resultados</p>
                                    )
                                }

                            </motion.div>
                        )
                    }
                    { categoriaBusqueda &&
                        (
                            <motion.div className="Resultados" {...PropsAnimation}>
                                <div className="cerrar">
                                    <button onClick={()=>borrarCategoria()}>
                                        <i className="bi bi-x-lg"></i>
                                        Cerrar ventana de resultados
                                    </button>
                                </div>

                                <div className="resultados-categorias">
                                    { categoriasN2.map((categoria)=>(
                                        <div key={categoria.Id}>
                                            <button
                                                className={replegar === categoria.Id ? '' : 'no-check'}
                                                onClick={()=>SelectCategoriaN2(categoria.Desc, categoria.Id)}
                                            >
                                                <div>
                                                    <i className="bi bi-check2"></i>
                                                </div>

                                                {categoria.Desc}
                                            </button>
                                            { replegar === categoria.Id &&
                                                (
                                                    <div className="subresultados">
                                                        { categoriasN3.map((categoriaN3)=>(
                                                            <button 
                                                                key={categoriaN3.Id} 
                                                                onClick={()=>busquedaCategoriaN3(categoriaN3.Desc, categoriaN3.Id)}
                                                            >   
                                                                {categoriaN3.Desc}
                                                            </button>
                                                        ))
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                    }
                                </div>
                            </motion.div>
                        )
                    }
                    
                    { reCategoria &&
                        (
                            <motion.div className="Resultados" {...PropsAnimation}>
                                
                                <div className="cerrar">
                                    <button onClick={borrarNombre}>
                                        <i className="bi bi-x-lg"></i>
                                        Cerrar ventana de resultados
                                    </button>
                                </div>

                                { usuariosCategoria.length > 0 ?
                                    (
                                        <div className='cards'>
                                            { usuariosCategoria.map((resultado)=>(
                                                resultado.PublicPriva === 0 ? (
                                                    resultado.RegistroTarjet &&
                                                        <div className='contenedor' key={resultado.IdUsuario}>
                                                            <div className='title'>
                                                                <div className='img'>
                                                                    { resultado.ImgFoto !== '' ?
                                                                        <img src={`https://tarjet.site/imagenes/perfil-imagenes/${resultado.ImgFoto}`}/>
                                                                    : 
                                                                        <img src={PerfilTemporal}/>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <h5>
                                                                        {resultado.NombreCompleto}
                                                                        <br/>
                                                                        <span>{resultado.Actividad}</span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className='tarjetaImg'>
                                                                <img 
                                                                    src={`https://tarjet.site/imagenes/tarjetas_frente_usuarios/${resultado.FondoF}`} className='img-fluid'
                                                                    onClick={()=>navigate(`/st/${btoa(resultado.Token)}`)}
                                                                />
                                                            </div>
                                                            <div className='footer'>
                                                                <p>
                                                                    Da click sobre la imagen para ver tarjeta digital
                                                                </p>
                                                            </div>
                                                        </div>
                                                ) : null
                                            ))
                                            }
                                        </div>
                                    )
                                    : (
                                        <p className="no-results">No se encontraron resultados</p>
                                    )
                                }

                            </motion.div>
                        )
                    }
                </>
                : (
                    <div>
                        <VideoBanner />
                        <NuevosUsuarios />
                    </div>
                )
            }
        </div>
    );
}

export default BusquedaDirectorio;