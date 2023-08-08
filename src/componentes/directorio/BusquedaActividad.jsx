import { motion, AnimatePresence } from 'framer-motion';

import iconoCategoria from '../../assets/icono-categoria.svg';
import iconoActividad from '../../assets/icono-actividad.svg';
import iconoUbicacion from '../../assets/icono-ubicacion.svg';
import iconoNombre from '../../assets/icono-nombre.svg';

import PerfilTemporal from '../../assets/perfiltemporal.jpg';
import TarjetaGenerica from '../../assets/tarjetageneric.png';

import { useState } from 'react';

const BusquedaActividad = () => {

    const [categoria, setCategoria] = useState(false);
    const [actividad, setActividad] = useState(false);
    const [ubicacion, setUbicacion] = useState(false);
    const [nombre, setNombre] = useState(false);
    const [buscar, setBuscar] = useState(false);

    const propsAnimacion = {
        initial: {scale: 0},
        animate: {scale: 1},
        exit: {opacity: 0}
    }

    // Ancho de pantalla
    const ancho = window.innerWidth;

    const btnCategoria = () => {
        setCategoria(!categoria);

        if (ancho <= 575) {
            setActividad(false);
            setUbicacion(false);
            setNombre(false);    
        }
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

    const btnNombre = () => {
        setNombre(!nombre);

        if (ancho <= 575) {
            setCategoria(false);
            setActividad(false);
            setUbicacion(false);
        }
    }

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
                        <img src={iconoNombre} />
                    </div>

                    <input type="text" placeholder='Escribe su nombre aquí'/>

                    <div className='borrar'>
                        <button>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="controles">
                <div className="controles-body">
                    <div className="control control-inicio">
                        <button onClick={btnCategoria}>
                            <div>
                                <img src={iconoCategoria} className='categoria'/>
                            </div>
                            Categoría
                        </button>
                        <p>Empty</p>
                    </div>
                    <div className="control">
                        <button onClick={btnActividad}>
                            <div>
                                <img src={iconoActividad} className='actividad'/>
                            </div>
                            Actividad
                        </button>
                        <p>Empty</p>
                    </div>
                    <div className="control">
                        <button onClick={btnUbicacion}>
                            <div>
                                <img src={iconoUbicacion} className='ubicacion'/>
                            </div>
                            Ubicación
                        </button>
                        <p>Empty</p>
                    </div>
                    <div className="control control-nombre" onClick={btnNombre}>
                        <button>
                            <div>
                                <img src={iconoNombre} className='nombre'/>
                            </div>
                            Nombre
                        </button>
                        <p>Empty</p>
                    </div>
                </div>
            </div>

            <div className='resultados'>

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

                {/* Resultado Categoría */}
                <AnimatePresence>
                    { categoria &&
                        <motion.div className='resultado' {...propsAnimacion}>
                            <h6>Selecciona una opción</h6>
                            <button>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>

                            <button className='btn-cerrar' onClick={()=>setCategoria(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* Resultado Actividad */}
                <AnimatePresence>
                    { actividad &&
                        <motion.div className='resultado' {...propsAnimacion}>
                            <h6>Selecciona una opción</h6>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comestibles
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Establecimientos
                            </button>

                            {/* SubResultados */}
                            <div className='sub-resultados'>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Asadero / parrillera / carnes
                                </button>
                                <button>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Asador de pollos
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Cafetería
                                </button>
                            </div>

                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>

                            <button className='btn-cerrar' onClick={()=>setActividad(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* Búsqueda por Nombre */}
                <AnimatePresence>
                    { nombre &&
                        <motion.div className='resultado' {...propsAnimacion}>
                            <h6>
                                ¿Conoces el nombre o parte del nombre del Usuario Tarjet? <br/>
                                ¡Aquí puedes buscarlo fácilmente!
                            </h6>
                            <input type="text" placeholder='Escribe su nombre aquí'/>

                            <button className='btn-cerrar' onClick={()=>setNombre(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

            <AnimatePresence>
                { categoria &&
                    <motion.div className='resultadosMobile' {...propsAnimacion}>
                        <p>Selecciona una opción</p>

                        <div className='resultados'>
                            <button className=''>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>

                            <button className='btn-cerrar' onClick={()=>setCategoria(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                { actividad &&
                    <motion.div className='resultadosMobile' {...propsAnimacion}>
                        <div className='encabezado'>
                            <p>Selecciona una opción</p>

                            <button className='btn-cerrar' onClick={()=>setActividad(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>

                        <div className='resultados'>
                            <button className=''>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>

                            <div className='sub-resultados'>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Comida
                                </button>
                                <button className=''>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Comida
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Comida
                                </button>
                            </div>

                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Comida
                            </button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

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

            <AnimatePresence>
                { nombre &&
                    <motion.div className='resultadosMobile' {...propsAnimacion}>
                        <p>¿Conoces el nombre o parte del nombre del usuario Tarjet? ¡Aquí puedes buscarlo fácilmente!</p>

                        <input type="text" placeholder='Escribe su nombre aquí'/>

                        <div className='resultados'>
                            <button className='btn-cerrar' onClick={()=>setNombre(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence {...propsAnimacion}>
                { buscar &&
                    <motion.div className='ResultadosCard'>
                        <div className='encabezado'>
                            <button onClick={()=>setBuscar(false)}>
                                <i className="bi bi-x-lg"></i>
                                Cerrar ventana de resultados
                            </button>
                        </div>
                        <div className='cards'>
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
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default BusquedaActividad;