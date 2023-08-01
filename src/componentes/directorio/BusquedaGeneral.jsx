import iconoComida from '../../assets/icono-comida.svg';
import iconoEducacion from '../../assets/icono-educacion.svg';
import iconoModa from '../../assets/icono-moda.svg';
import iconoSalud from '../../assets/icono-salud.svg';
import iconoServicios from '../../assets/icono-servicios.svg';
import iconoTiendas from '../../assets/icono-tiendas.svg';
import iconoTransporte from '../../assets/icono-transporte.svg';
import iconoTurismo from '../../assets/icono-turismo.svg';

const BusquedaGeneral = () => {
    return ( 
        <div className="container-fluid BusquedaGeneral">
            <h2>Búsqueda en General</h2>

            <div className="buttons">
                <button>
                    <div>
                        <img src={iconoComida} />
                    </div>
                    Comida y Alimentos
                </button>
                <button>
                    <div>
                        <img src={iconoEducacion} />
                    </div>
                    Educación
                </button>
                <button>
                    <div>
                        <img src={iconoModa} />
                    </div>
                    Moda y cuidado personal
                </button>
                <button>
                    <div>
                        <img src={iconoSalud} />
                    </div>
                    Salud
                </button>
                <button>
                    <div className='resuActive'>
                        <img src={iconoServicios} />
                    </div>
                    Servicios
                </button>
                <button>
                    <div>
                        <img src={iconoTiendas} />
                    </div>
                    Tiendas
                </button>
                <button>
                    <div>
                        <img src={iconoTransporte} />
                    </div>
                    Transporte
                </button>
                <button>
                    <div>
                        <img src={iconoTurismo} />
                    </div>
                    Turismo
                </button>
            </div>

            <div className="buttons buttons-mobile">
                <div className='fila1'>
                    <button style={{fontSize: '0.7rem'}}>
                        <div>
                            <img src={iconoComida} />
                        </div>
                        Comida y Alimentos
                    </button>
                    <button>
                        <div>
                            <img src={iconoEducacion} />
                        </div>
                        Educación
                    </button>
                    <button style={{fontSize: '0.7rem'}}>
                        <div>
                            <img src={iconoModa} />
                        </div>
                        Moda y cuidado personal
                    </button>
                    <button>
                        <div>
                            <img src={iconoSalud} />
                        </div>
                        Salud
                    </button>
                </div>
                <div className='fila2'>
                    <button>
                        <div className='resuActive'>
                            <img src={iconoServicios} />
                        </div>
                        Servicios
                    </button>
                    <button>
                        <div>
                            <img src={iconoTiendas} />
                        </div>
                        Tiendas
                    </button>
                    <button>
                        <div>
                            <img src={iconoTransporte} />
                        </div>
                        Transporte
                    </button>
                    <button>
                        <div>
                            <img src={iconoTurismo} />
                        </div>
                        Turismo
                    </button>
                </div>
            </div>

            <div className='resultados'>
                <button>
                    <i className="bi bi-x-lg"></i>
                    Cerrar ventana de resultados
                </button>

                <div className='btn-resultados'>
                    <button>Artes visuales</button>
                    <button>Profesionales</button>
                    <button>Sociales</button>
                    <button>Construcción, remodelación, mantenimiento</button>
                    <button>Oficios</button>
                    <button>Deportivo</button>
                    <button>Industrial</button>
                    <button>Reparación</button>
                    <button>Talleres de reparación terrestre</button>
                    <button>Seguridad</button>
                    <button>Esotérico</button>
                </div>
            </div>
        </div>
    );
}

export default BusquedaGeneral;