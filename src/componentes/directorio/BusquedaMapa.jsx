import iconoLupa from '../../assets/icono-lupa.svg';

const BusquedaMapa = () => {
    return ( 
        <>
            <div className="container-fluid BusquedaMapa">
                <h2>Usuarios Tarjet cerca de tí</h2>
                <p>Búsqueda en Mapa</p>

                <div className="barraBusqueda">
                    <div>
                        <button>
                            Estado*
                        </button>
                        <p>Empty</p>
                    </div>
                    <div>
                        <button className='d-none d-md-block'>
                            Ciudad / Alcaldía
                        </button>
                        <button className='d-block d-md-none' style={{fontSize: '0.6rem'}}>
                            Ciudad / Deleg.
                        </button>
                        <p>Empty</p>
                    </div>
                    <div>
                        <button>
                            Actividad
                        </button>
                        <p>Empty</p>
                    </div>
                    <div>
                        <button className='btn-buscar'>
                            <img src={iconoLupa} />
                            Buscar
                        </button>
                    </div>
                </div>

                <div className='resultados'>
                    <div className='resultado'>
                        <div className='encabezado'>
                            <p>Selecciona una opción</p>
                            <button>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>
                        <div className='cerca'>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Cerca de mí
                            </button>
                        </div>
                        <div className='col-resultados'>
                            <div className='col-r'>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                            </div>
                            <div className='col-r'>
                                <button className=''>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='resultado'>
                        <div className='encabezado'>
                            <p>Selecciona una opción</p>
                            <button>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>
                        <div className='col-resultados'>
                            <div className='col-r'>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                            </div>
                            <div className='col-r'>
                                <button className=''>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Puebla
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='resultado'>
                        <div className='encabezado'>
                            <p>Selecciona una opción</p>
                            <button>
                                <i className="bi bi-x-lg"></i>
                                Cerrar
                            </button>
                        </div>
                        <div className='btn-resultados'>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Morelos
                            </button>
                            <button className='check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Morelos
                            </button>
                            {/* Subresultados */}
                            <div className='subresultados'>
                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                                <button className='check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>

                                {/* Resultado de subresultado */}
                                <div className='resultado-sub'>
                                    <button className='check'>
                                        <div>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        Morelos
                                    </button>
                                </div>

                                <button className='no-check'>
                                    <div>
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    Morelos
                                </button>
                            </div>
                            <button className='no-check'>
                                <div>
                                    <i className="bi bi-check2"></i>
                                </div>
                                Morelos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-0 Mapa'>
                <iframe
                    title="Google Maps"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21251.206351323992!2d-99.09023472164917!3d19.682031580612712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1691007922538!5m2!1ses-419!2smx"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}

export default BusquedaMapa;