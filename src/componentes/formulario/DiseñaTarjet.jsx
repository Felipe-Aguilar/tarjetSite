import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';

const DiseñaTarjet = () => {
    return ( 
        <div className="container-fluid diseñaTarjet">

            <div className="img-banner">
                <img src={ilustracion} />
            </div>

            <div className='texto'>
                <h1>Gracias por pertenecer a esta gran comunidad</h1>
                <h5>
                    Nos alegra mucho que estés a punto de crear tu Tarjet. Con ella, podrás brindar una excelente primera impresión a tus prospectos y clientes
                </h5>
            </div>

            <div className='DiseñaTuTarjet'>
                <div className='texto'>
                    <h2>Diseña tu tarjet</h2>
                    <h3>Dale estilo a tu tarjeta de presentación digital</h3>
                    <p>
                        Esta tarjeta se mostrará en el directorio
                    </p>
                </div>
            </div>

            <div className='barra'>
                <div className='cuerpo'>
                    <button className='btn-1 active'>
                        <div>
                            <span>1</span>
                        </div>
                        Tu diseño
                    </button>

                    <button>
                        <div>
                            <span>2</span>
                        </div>
                        Tus datos
                    </button>
                </div>
            </div>

            <div className='separador'>
                <hr/>
            </div>

            <div className='colecciones'>
                <h2>Colecciones</h2>
                
                <div className='opciones'>

                </div>
            </div>

        </div>
    );
}

export default DiseñaTarjet;