import { useState } from 'react';
import Slider from 'react-slick';

import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';
import tarjetaGenerica from '../../assets/tarjetageneric.png';

const DiseñaTarjet = () => {

    const [optionColecciones, setOptionColecciones] = useState('Gratuitas');

    const settings = {
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    }

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
                    <button className='activeOption primer'>
                        <i className="bi bi-caret-down-fill"></i>
                        Gratuitas
                    </button>
                    <button>
                        <i className="bi bi-caret-down-fill"></i>
                        Premium
                    </button>
                    <button>
                        <i className="bi bi-caret-down-fill"></i>
                        Personalizada
                    </button>
                </div>

                { optionColecciones === 'Gratuitas' &&
                    <div className='gratuitas'>
                        <Slider {...settings}>
                            <div className='tarjetaGratuitas'>
                                <img src={tarjetaGenerica}/>
                            </div>
                            <div className='tarjetaGratuitas'>
                                <img src={tarjetaGenerica}/>
                            </div>
                            <div className='tarjetaGratuitas'>
                                <img src={tarjetaGenerica}/>
                            </div>
                        </Slider>

                        <div className='mas-imagenes'>
                            <div className='view3'>
                                <img src={tarjetaGenerica} />
                                <img src={tarjetaGenerica} />
                                <img src={tarjetaGenerica} />
                            </div>
                            <div className='viewpremium'>
                                <img src={tarjetaGenerica} />
                            </div>
                        </div>

                        <div className='info'>
                            <div className='modelos'>

                            </div>
                            <div className='premium-select'>

                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default DiseñaTarjet;