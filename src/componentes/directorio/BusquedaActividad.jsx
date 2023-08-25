import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { BusquedaCategoria, ConsultaActividad, ConsultaNivel3, BusquedaNombre, BusquedaNivel3 } from '../contextos/BusquedaDirectorio';

import { useNavigate } from 'react-router-dom';

import iconoCategoria from '../../assets/icono-categoria.svg';
import iconoActividad from '../../assets/icono-actividad.svg';
import iconoUbicacion from '../../assets/icono-ubicacion.svg';
import iconoNombre from '../../assets/icono-nombre.svg';

import PerfilTemporal from '../../assets/perfiltemporal.jpg';
import TarjetaGenerica from '../../assets/tarjetageneric.png';


const BusquedaActividad = () => {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState(false);
    const [actividad, setActividad] = useState(false);
    const [ubicacion, setUbicacion] = useState(false);
    const [nombre, setNombre] = useState(false);
    const [busqueda, setBusqueda] = useState(false);

    const [resultadosCategoria, setResultadosCategoria] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState('');

    const [resultadosActividad, setResultadosActividad] = useState([]);
    const [actividadSeleccionada, setActividadSeleccionada] = useState('');

    const [subresultados, setSubresultados] = useState([]);
    const [subresultadoSeleccionado, setSubresultadoSeleccionado] = useState('');

    const [capturaNombre, setCapturaNombre] = useState('');
    const [resultadosNombre, setResultadosNombre] = useState([]);

    const [resultadosNivel3, setResultadosNivel3] = useState([]);

    const [replegar, setReplegar] = useState(null);

    const propsAnimacion = {
        initial: {scale: 0},
        animate: {scale: 1},
        exit: {opacity: 0}
    }

    // Ancho de pantalla
    const ancho = window.innerWidth;

    const btnCategoria = async () => {
        // setCategoria(!categoria);
        setCategoria(true);
        setBusqueda(false);

        setCategoriaSeleccionada('');
        setSubresultadoSeleccionado('');

        if (ancho <= 575) {
            setActividad(false);
            setUbicacion(false);
            setNombre(false);    
        }

        // Busqueda
        const busqueda = await BusquedaCategoria();
        setResultadosCategoria(busqueda.SDTCategorias);
    }

    const btnActividad = () => {
        setActividad(!actividad);

        if (ancho <= 575) {
            setCategoria(false);
            setUbicacion(false);
            setNombre(false);
        }
    }

    const btnUbicacion = () => {
        setUbicacion(!ubicacion);

        if (ancho <= 575) {
            setCategoria(false);
            setActividad(false);
            setNombre(false);
        }

    }

    // Busqueda por Nombre (predictiva)
    const busquedaNombre = async (e) => {
        setCapturaNombre(e.target.value);
        setBusqueda(true);

        if (e.target.value.length >= 3) {
            const respuesta = await BusquedaNombre(e.target.value);
            setResultadosNombre(respuesta.ListTarjets);
        }

        if (e.target.value.length === 0) {
            setBusqueda(false);
        }
    }
    const cerrarNombre = () => {
        setBusqueda(false);
        setCapturaNombre('');
    }
    
    // Seleccion de categoria
    const selecCategoria = async (resultado, idCategoria) => {
        setCategoriaSeleccionada(resultado);
        setIdCategoriaSeleccionada(idCategoria);

        if (ancho <= 575) {
            setCategoria(false);
        }

        // Consulta json para actividad
        const busqueda = await ConsultaActividad(idCategoria);
        setResultadosActividad(busqueda.SDTCategorias[0].Level2);
    }

    // Seleccion de actividad
    const selecActividad = async (resultado, idActividad) => {
        setActividadSeleccionada(resultado);

        // Consulta json para subressultado Actividad
        const busqueda = await ConsultaNivel3(idCategoriaSeleccionada, idActividad);
        setSubresultados(busqueda.SDTCategorias[0].Level2[0].Level3);

        // Replegar
        setReplegar(idActividad === replegar ? null : idActividad);
    }

    // Seleccion de subresultado (resultado final)
    const selecSubResultado = async (resultado,id) => {
        setSubresultadoSeleccionado(resultado);
        setBusqueda(true);

        
        const busqueda = await BusquedaNivel3(id);
        setResultadosNivel3(busqueda.ListTarjets);
    };

    return ( 
        <div className="container-fluid BusquedaActividad">

            <hr/>

            <h2>Búsqueda por actividad</h2>
            {/* <p>Selecciona una o más opciones antes de dar click en buscar</p> */}

            <div className='busquedaNombre'>
                <p>
                    ¿Conoces el nombre o parte del nombre del Usuario Tarjet? <br/>
                    ¡Aquí puedes buscarlo fácilmente!
                </p>
                <div className='buscar-contenedor'>
                    <div className='img-form'>
                        {/* <img src={iconoNombre} /> */}
                        <i className="bi bi-search"></i>
                    </div>

                    <input 
                        type="text" 
                        placeholder='Escribe su nombre aquí'
                        value={capturaNombre}
                        onChange={busquedaNombre}
                    />

                    <div className='borrar'>
                        <button onClick={cerrarNombre}
                            className={`${capturaNombre === '' ? 'borrar-desactivate' : ''}`}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`controles ${capturaNombre ? 'controles-desactivate' : ''}`}>
                <div className="controles-body">
                    <div className="control control-inicio">
                        <button onClick={btnCategoria}>
                            <div>
                                <img src={iconoCategoria} className='categoria'/>
                            </div>
                            Categoría
                        </button>
                        <p>
                            {categoriaSeleccionada ? categoriaSeleccionada : 'Vacío'}
                        </p>
                    </div>
                    <div className="control">
                        <button 
                            onClick={btnActividad} 
                            className={categoriaSeleccionada ? '' : 'btn-desactivate'}
                        >
                            <div>
                                <img src={iconoActividad} className='actividad'/>
                            </div>
                            Actividad
                        </button>
                        <p>
                            { subresultadoSeleccionado ? subresultadoSeleccionado : 'Vacío' }
                        </p>
                    </div>
                    <div className="control control-ubicacion">
                        <button onClick={btnUbicacion}>
                            <div>
                                <img src={iconoUbicacion} className='ubicacion'/>
                            </div>
                            Ubicación
                        </button>
                        <p>Empty</p>
                    </div>
                </div>
            </div>

            { !busqueda &&
                <div className='resultados'>

                    {/* Resultado Categoría */}
                    <AnimatePresence>
                        { categoria &&
                            <motion.div className='resultado' {...propsAnimacion}>
                                <h6>Selecciona una opción</h6>
                                { resultadosCategoria.map((resultado)=>(
                                    <button 
                                        className={categoriaSeleccionada === resultado.Desc ? '' : 'no-check'}
                                        key={resultado.Id}
                                        onClick={()=>selecCategoria(resultado.Desc,resultado.Id)}
                                    >
                                        <div>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        {resultado.Desc}
                                    </button>
                                ))
                                }

                                <button className='btn-cerrar' onClick={()=>setCategoria(false)}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar
                                </button>
                            </motion.div>
                        }
                    </AnimatePresence>

                    {/* Resultado Actividad */}
                    <AnimatePresence>
                        { categoriaSeleccionada &&
                            <motion.div className='resultado' {...propsAnimacion}>
                                <h6>Selecciona una opción</h6>
                                { resultadosActividad.map((resultado)=>(
                                        <>
                                        <button 
                                            className={replegar === resultado.Id ? '' : 'no-check'}
                                            key={resultado.Id}
                                            onClick={()=>selecActividad(resultado.Desc, resultado.Id)}
                                        >
                                            <div>
                                                <i className="bi bi-check2"></i>
                                            </div>
                                            {resultado.Desc}
                                        </button>

                                        { replegar === resultado.Id &&
                                            <div className='sub-resultados'>
                                                { subresultados.map((resultadosub)=>(
                                                    <button 
                                                        className={subresultadoSeleccionado === resultadosub.Desc ? '' : 'no-check'}
                                                        key={resultadosub.Id}
                                                        onClick={()=>selecSubResultado(resultadosub.Desc, resultadosub.Id)}
                                                    >
                                                        <div>
                                                            <i className="bi bi-check2"></i>
                                                        </div>
                                                        {resultadosub.Desc}
                                                    </button>
                                                ))
                                                }
                                            </div>
                                        }
                                        </>
                                ))
                                }

                                <button className='btn-cerrar' onClick={()=>setActividad(false)}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar
                                </button>
                            </motion.div>
                        }
                    </AnimatePresence>

                    {/* Resultado Ubicación */}
                    <AnimatePresence>
                        { ubicacion &&
                            <motion.div className='resultado ubicacion' {...propsAnimacion}>
                                <div className='encabezado'>
                                    <h6>Selecciona una opción</h6>

                                    <button className='btn-cerrar' onClick={()=>setUbicacion(false)}>
                                        <i className="bi bi-x-lg"></i>
                                        Cerrar
                                    </button>
                                </div>

                                <button className='primer'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Cerca de mí
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Aguascalientes
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Baja California
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Baja California Sur
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Campeche
                                </button>
                            </motion.div>  
                        }
                    </AnimatePresence>
                </div>
            }

            { !busqueda &&
            <>
                {/* Resultado Categoría Mobile*/}
                <AnimatePresence>
                    { categoria &&
                        <motion.div className='resultadosMobile' {...propsAnimacion}>
                            <p>Selecciona una opción</p>

                            <div className='resultados'>
                                { resultadosCategoria.map((resultado)=>(
                                    <button 
                                        className={categoriaSeleccionada === resultado.Desc ? '' : 'no-check'}
                                        key={resultado.Id}
                                        onClick={()=>selecCategoria(resultado.Desc,resultado.Id)}
                                    >
                                        <div>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        {resultado.Desc}
                                    </button>
                                ))
                                }

                                <button className='btn-cerrar' onClick={()=>setCategoria(false)}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar
                                </button>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* Resultados Actividad Mobile */}
                <AnimatePresence>
                    { categoriaSeleccionada &&
                        <motion.div className='resultadosMobile' {...propsAnimacion}>
                            <div className='encabezado'>
                                <p>Selecciona una opción</p>

                                <button className='btn-cerrar' onClick={()=>setActividad(false)}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar
                                </button>
                            </div>

                            <div className='resultados'>
                                { resultadosActividad.map((resultado)=>(
                                    <>
                                        <button
                                            className={replegar === resultado.Id ? '' : 'no-check'}
                                            key={resultado.Id}
                                            onClick={()=>selecActividad(resultado.Desc, resultado.Id)}
                                        >
                                            <div>
                                                <i className="bi bi-check2"></i>
                                            </div>
                                            {resultado.Desc}
                                        </button>

                                        { replegar === resultado.Id &&
                                            <div className='sub-resultados'>
                                                { subresultados.map((resultadosub)=>(
                                                    <button 
                                                        className={subresultadoSeleccionado === resultadosub.Desc ? '' : 'no-check'}
                                                        key={resultadosub.Id}
                                                        onClick={()=>selecSubResultado(resultadosub.Desc, resultadosub.Id)}
                                                    >
                                                        <div>
                                                            <i className="bi bi-check2"></i>
                                                        </div>
                                                        {resultadosub.Desc}
                                                    </button>
                                                ))
                                                }
                                            </div>
                                        }
                                    </>
                                ))
                                }
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* Resultados por Ubicación */}
                <AnimatePresence>
                    { ubicacion &&
                        <motion.div className='resultadosMobile' {...propsAnimacion}>
                            <div className='encabezado'>
                                <p>Selecciona una opción</p>

                                <button className='btn-cerrar' onClick={()=>setUbicacion(false)}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar
                                </button>
                            </div>

                            <div className='resultados ubicacion'>
                                <button className='primer'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Cerca de mí
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Aguascalientes
                                </button>

                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Aguascalientes
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Aguascalientes
                                </button>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </>
            }


            {/* Resultados Cards*/}

            { busqueda &&
                <AnimatePresence>

                    { capturaNombre &&
                        <motion.div className='ResultadosCard' {...propsAnimacion}>
                            <div className='encabezado'>
                                <button onClick={cerrarNombre}>
                                    <i className="bi bi-x-lg"></i>
                                    Cerrar ventana de resultados
                                </button>
                            </div>
                            <div className='cards'>
                                { resultadosNombre.map((resultado)=>(
                                    <div className='contenedor' key={resultado.IdUsuario}>
                                        <div className='title'>
                                            <div className='img'>
                                                <img src={PerfilTemporal}/>
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
                                                src={`https://tarjet.site/imagenes/${resultado.FondoF}`} className='img-fluid'
                                                onClick={()=>navigate(`/st/${btoa(resultado.Token)}`)}
                                            />
                                        </div>
                                        <div className='footer'>
                                            <p>
                                                Da click sobre la imagen para ver tarjeta digital
                                            </p>
                                        </div>
                                    </div>
                                ))
                                }
            
                                {/* <div className='contenedor'>
                                    <div className='title'>
                                        <div className='img'>
                                            <img src={PerfilTemporal}/>
                                        </div>
                                        <div>
                                            <h5>
                                                Alberto Mérida
                                                <br/>
                                                <span>Desarrollo e integración</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='tarjetaImg'>
                                        <img src={TarjetaGenerica} className='img-fluid'/>
                                    </div>
                                    <div className='footer'>
                                        <p>
                                            Da click sobre la imagen para ver tarjeta digital
                                        </p>
                                    </div>
                                </div>
            
                                <div className='contenedor'>
                                    <div className='title'>
                                        <div className='img'>
                                            <img src={PerfilTemporal}/>
                                        </div>
                                        <div>
                                            <h5>
                                                Alberto Mérida
                                                <br/>
                                                <span>Desarrollo e integración</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='tarjetaImg'>
                                        <img src={TarjetaGenerica} className='img-fluid'/>
                                    </div>
                                    <div className='footer'>
                                        <p>
                                            Da click sobre la imagen para ver tarjeta digital
                                        </p>
                                    </div>
                                </div>
            
                                <div className='contenedor'>
                                    <div className='title'>
                                        <div className='img'>
                                            <img src={PerfilTemporal}/>
                                        </div>
                                        <div>
                                            <h5>
                                                Alberto Mérida
                                                <br/>
                                                <span>Desarrollo e integración</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='tarjetaImg'>
                                        <img src={TarjetaGenerica} className='img-fluid'/>
                                    </div>
                                    <div className='footer'>
                                        <p>
                                            Da click sobre la imagen para ver tarjeta digital
                                        </p>
                                    </div>
                                </div>
            
                                <div className='contenedor'>
                                    <div className='title'>
                                        <div className='img'>
                                            <img src={PerfilTemporal}/>
                                        </div>
                                        <div>
                                            <h5>
                                                Alberto Mérida
                                                <br/>
                                                <span>Desarrollo e integración</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='tarjetaImg'>
                                        <img src={TarjetaGenerica} className='img-fluid'/>
                                    </div>
                                    <div className='footer'>
                                        <p>
                                            Da click sobre la imagen para ver tarjeta digital
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    }

                    {   subresultadoSeleccionado &&
                        <motion.div className='ResultadosCard' {...propsAnimacion}>
                        <div className='encabezado'>
                            <button onClick={()=>setSubresultadoSeleccionado('')}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar ventana de resultados
                            </button>
                        </div>
                        <div className='cards'>
                            { resultadosNivel3.map((resultado)=>(
                                <div className='contenedor' key={resultado.IdUsuario}>
                                    <div className='title'>
                                        <div className='img'>
                                            <img src={PerfilTemporal}/>
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
                                            src={`https://tarjet.site/imagenes/${resultado.FondoF}`} className='img-fluid'
                                            onClick={()=>navigate(`/st/${btoa(resultado.Token)}`)}
                                        />
                                    </div>
                                    <div className='footer'>
                                        <p>
                                            Da click sobre la imagen para ver tarjeta digital
                                        </p>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                        </motion.div>
                    }
                </AnimatePresence>
            }
            
        </div>
    );
}

export default BusquedaActividad;