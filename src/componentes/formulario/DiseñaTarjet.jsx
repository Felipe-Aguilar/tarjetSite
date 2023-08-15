import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';
import tarjetaGenerica from '../../assets/tarjetageneric.png';
import perfilTemporal from '../../assets/perfiltemporal.jpg';
import ilustracionPersonalizada from '../../assets/ilustracion-personalizada.png';


const DiseñaTarjet = () => {

    const navigate = useNavigate();

    const [diseño, setDiseño] = useState(true);
    const [datos, setDatos] = useState(false);

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

    const btnDiseño = () => {
        setDiseño(true);
        setDatos(false);
    }

    const btnDatos = () => {
        setDatos(true);
        setDiseño(false);
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
                    <button 
                        className={`btn-1 ${diseño ? 'active' : ''}`} 
                        onClick={btnDiseño}
                    >
                        <div>
                            <span>1</span>
                        </div>
                        Tu diseño
                    </button>

                    <button 
                        className={`${datos ? 'active' : ''}`}
                        onClick={btnDatos}
                    >
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

            { diseño &&
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
            }

            { datos &&
                <div className='tusDatos'>
                    <h6>Esta información se mostrará en el directorio</h6>

                    <div className='imagen-perfil'>
                        <img src={perfilTemporal} />

                        <button>
                            Imagen ó Logotipo <span>(editar)</span>
                        </button>
                    </div>

                    <div className='formulario'>
                        <form>
                            <input type="text" placeholder='Empresa o nombre y apellidos (40 caracteres)' maxLength={40}/>
                            <select name="" id="">
                                <option value="categiria" key="1">Categoría *</option>
                            </select>
                            <a href='' target='_blank'>
                                Si no aparece tu área, solicítala aquí, con tu apoyo nos ayudas a aprender.
                            </a>
                            <select name="" id="">
                                <option value="categiria" key="1">Actividad *</option>
                            </select>
                            <a href='' target='_blank'>
                                Si no se menciona tu especialidad, solicítala aquí, nos encantará ayudarte.
                            </a>

                            <h6>Ubicación</h6>
                            <select name="" id="">
                                <option value="categiria" key="1">Estado *</option>
                            </select>
                            <select name="" id="">
                                <option value="categiria" key="1">Ciudad *</option>
                            </select>
                            <select name="" id="">
                                <option value="categiria" key="1">Delegación *</option>
                            </select>
                            <input type="text" placeholder='Calle, privada, avenida'/>

                            <div className='twoInput'>
                                <div className='w-50'>
                                    <input type="text" placeholder='Número'/>
                                </div>
                                <div className='w-50'>
                                    <input type="text" placeholder='C.P'/>
                                </div>
                            </div>

                            <input type="text" placeholder='Colonia'/>

                            <div className='check'>
                                <input type="checkbox" id='mostrarEmpresa'/>
                                <label htmlFor="mostrarEmpresa">Mostrar mi empresa en el mapa</label>
                            </div>

                            <div className='rango'>
                                <select name="" id="">
                                    <option value="" key="3">
                                        5 km.
                                    </option>
                                </select>
                                <label htmlFor="">Rango de visualización en el mapa</label>
                            </div>

                            <p>
                                Tu tarjet podrá ser vista en el buscador por personas que se encuentren dentro del rango configurado
                            </p>

                            <button className='btn-amarillo'>
                                Necesitas ser encontrado en mayor rango, <span>inscríbete a Premium, tu tarjeta sin límites.</span>
                            </button>

                            <div className='accept'>
                                <div className='switches'>
                                    <label class="switch mb-0">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>Mostrar mi tarjet en el directorio</p>
                                </div>
                            </div>

                            <div className='accept'>
                                <div className='switches'>
                                    <label class="switch mb-0">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>Permitir calificación por usuarios</p>
                                </div>
                            </div>

                            <div className='accept'>
                                <div className='switches'>
                                    <label class="switch mb-0">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>Permitir comentarios en directorio</p>
                                </div>
                            </div>

                            <div className='terminos'>
                                <input type="checkbox" id='terminos'/>
                                <label htmlFor='terminos'>
                                    Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span>
                                </label>
                            </div>

                            <div className='btn-guardar'>
                                <button>
                                    Guardar mis datos de tarjeta
                                </button>
                            </div>

                            <div className='regresar'>
                                <button>
                                    Regresar a perfil (x)
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </div>
    );
}

export default DiseñaTarjet;