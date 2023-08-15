import { useState } from 'react';
import Slider from 'react-slick';

import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';
import tarjetaGenerica from '../../assets/tarjetageneric.png';
import perfilTemporal from '../../assets/perfiltemporal.jpg';
import ilustracionPersonalizada from '../../assets/ilustracion-personalizada.png';


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
                    <button 
                        className={`primer ${optionColecciones === 'Gratuitas' ? 'activeOption' : ''}`}
                        onClick={(e)=>setOptionColecciones(e.target.innerText)}
                    >
                        <i className="bi bi-caret-down-fill"></i>
                        Gratuitas
                    </button>
                    <button
                        className={optionColecciones === 'Premium' ? 'activeOption' : ''}
                        onClick={(e)=>setOptionColecciones(e.target.innerText)}
                    >
                        <i className="bi bi-caret-down-fill"></i>
                        Premium
                    </button>
                    <button
                        className={optionColecciones === 'Personalizada' ? 'activeOption' : ''}
                        onClick={(e)=>setOptionColecciones(e.target.innerText)}
                    >
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
                                <p>
                                    1 de 8 modelos gratuitos
                                </p>
                            </div>
                            <div className='premium-select'>
                                <div>
                                    <p>1</p>
                                </div>
                                <p>
                                    Tarjeta premium seleccionada
                                </p>
                            </div>
                        </div>

                        <div className='formulario'>
                            <div className='logotipo'>
                                <div className='img-perfil'>
                                    <img src={perfilTemporal} />
                                </div>
                                <button className='cargar-imagen'>
                                    Logotipo <span>cargar ó cambiar imagen</span>
                                </button>
                            </div>

                            <div className='prefijo'>
                                <p>Prefijo</p>
                            </div>

                            <div className='form'>
                                <form>
                                    <div className='select'>
                                        <div>
                                            <select>
                                                <option value="Lic" key="1">Lic.</option>
                                                <option value="Lic" key="2">Arq.</option>
                                                <option value="Lic" key="3">Doc.</option>
                                            </select>
                                        </div>
                                        <input type="text" placeholder='Empresa ó tu Nombre (40 caracteres)' maxLength={40}/>
                                    </div>
                                    
                                    <input type="text" placeholder='Texto debajo de tu nombre (30 caracteres)' maxLength={30}/>
                                    <input type="text" placeholder='Encabezado ó servicio principal (opcional)' maxLength={30}/>

                                    <div className='buttons'>
                                        <div className='primer'>
                                            <button>
                                                Previsualizar
                                            </button>
                                        </div>
                                        <div className='segundo'>
                                            <button>
                                                Guardar Tarjeta
                                            </button>
                                        </div>
                                    </div>

                                    <div className='regresar'>
                                        <button>
                                            Regresar a perfil (x)
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }

                { optionColecciones === 'Premium' &&
                    <div className='premium'>
                        <div className='encabezado'>
                            <p>
                                En el plan Premium ****** <br/>
                                puedes elegir cualquier tarjeta
                            </p>
                            <button>
                                ¡Adquiérelo aquí!
                            </button>
                        </div>

                        <div className='tarjetasPremium'>
                            <img src={tarjetaGenerica} />
                        </div>

                        <div className='sliderpremium'>
                            <Slider {...settings}>
                                <div className='paquete'>
                                    <p>
                                        Nombremodelotarjet <br/>
                                        <span>Código TD-091</span>
                                    </p>
                                    <hr/>
                                    <div className='compra'>
                                        <div className='precio'>
                                            <p>$000.00 mxm</p>
                                        </div>
                                        <div className='btncompra'>
                                            <button>
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='paquete'>
                                    <p>
                                        Nombremodelotarjet <br/>
                                        <span>Código TD-091</span>
                                    </p>
                                    <hr/>
                                    <div className='compra'>
                                        <div className='precio'>
                                            <p>Premium</p>
                                        </div>
                                        <div className='btncompra'>
                                            <button>
                                                Seleccionar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className='desc'>
                            <p>
                                ó puedes comprar individualmente la <br/> tarjeta que te guste, ¡Conócelas!
                            </p>
                        </div>

                        <div className='buttons-rows'>
                            <div className='rowbuttons'>
                                <button>
                                    <div>
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                                <button>
                                    <div>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                            </div>
                            <div className='rowbuttons'>
                                <button>
                                    <div>
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                                <button>
                                    <div>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                            </div>
                            <div className='rowbuttons'>
                                <button>
                                    <div>
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                                <button>
                                    <div>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                            </div>
                            <div className='rowbuttons'>
                                <button>
                                    <div>
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                                <button>
                                    <div>
                                        <p>
                                            10
                                        </p>
                                    </div>
                                    Ejecutivas
                                </button>
                            </div>
                        </div>

                        <div className='regresar'>
                            <button>
                                Regresar a perfil (x)
                            </button>
                        </div>
                    </div>
                }

                { optionColecciones === 'Personalizada' &&
                    <div className='personalizada'>
                        <img src={ilustracionPersonalizada} />
                        <p>
                            ¿Tienes una idea o necesitas el diseño de tu tarjeta con un modelo exclusivo? 
                        </p>

                        <p>
                            <span>Ponte en contacto con nosotros,</span> <br/>
                            ¡nos encantaría escucharte y ayudarte!
                        </p>

                        <a href='' target='_blank'>
                            ¡Solicíta su costo aquí!
                        </a>

                        <div className='regresar'>
                            <button>
                                Cerrar ventana (x)
                            </button>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default DiseñaTarjet;