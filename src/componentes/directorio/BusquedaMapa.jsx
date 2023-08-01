const BusquedaMapa = () => {
    return ( 
        <div className="container-fluid BusquedaMapa">
            <h2>Usuarios Tarjet cerca de tí</h2>
            <p>Búsqueda en Mapa</p>

            <div className="barraBusqueda">
                <div>
                    <button>
                        Estado*
                    </button>
                </div>
                <div>
                    <button>
                        Ciudad / Alcaldía
                    </button>
                </div>
                <div>
                    <button>
                        Actividad
                    </button>
                </div>
                <div>
                    <button>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BusquedaMapa;