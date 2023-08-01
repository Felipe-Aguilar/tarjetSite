import iconoCategoria from '../../assets/icono-categoria.svg';
import iconoActividad from '../../assets/icono-actividad.svg';
import iconoUbicacion from '../../assets/icono-ubicacion.svg';
import iconoNombre from '../../assets/icono-nombre.svg';
import iconoBuscar from '../../assets/icono-lupa-blanca.svg';

const BusquedaActividad = () => {
    return ( 
        <div className="container-fluid BusquedaActividad">

            <hr/>

            <h2>Búsqueda por actividad</h2>
            <p>Selecciona una o más opciones antes de dar click en buscar</p>

            <div className="controles">
                <div className="controles-body">
                    <div className="control control-inicio">
                        <button>
                            <div>
                                <img src={iconoCategoria} className='categoria'/>
                            </div>
                            Categoría
                        </button>
                    </div>
                    <div className="control">
                        <button>
                            <div>
                                <img src={iconoActividad} className='actividad'/>
                            </div>
                            Actividad
                        </button>
                    </div>
                    <div className="control">
                        <button>
                            <div>
                                <img src={iconoUbicacion} className='ubicacion'/>
                            </div>
                            Ubicación
                        </button>
                    </div>
                    <div className="control" style={{border: 'none'}}>
                        <button>
                            <div>
                                <img src={iconoNombre} className='nombre'/>
                            </div>
                            Nombre
                        </button>
                    </div>
                    <div className="control control-buscar">
                        <button>
                            <div>
                                <img src={iconoBuscar} className='nombre'/>
                            </div>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <div className='resultados'>

                {/* Primer */}
                <div className='resultado'>
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

                    <button className='btn-cerrar'>
                        <i className="bi bi-x-lg"></i>
                        Cerrar
                    </button>
                </div>

                {/* Segundo */}
                <div className='resultado'>
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

                    <button className='btn-cerrar'>
                        <i className="bi bi-x-lg"></i>
                        Cerrar
                    </button>
                </div>

                {/* Tercero */}
                <div className='resultado ubicacion'>
                    <div className='encabezado'>
                        <h6>Selecciona una opción</h6>

                        <button className='btn-cerrar'>
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
                </div>

                {/* Cuarto */}
                <div className='resultado'>
                    <h6>
                        ¿Conoces el nombre o parte del nombre del Usuario Tarjet? <br/>
                        ¡Aquí puedes buscarlo fácilmente!
                    </h6>
                    <input type="text" placeholder='Escribe su nombre aquí'/>

                    <button className='btn-cerrar'>
                        <i className="bi bi-x-lg"></i>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BusquedaActividad;