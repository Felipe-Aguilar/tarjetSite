import { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ilustracion from '../../assets/ilustracion-diseña-tarjetsite.png';
import tarjetaGenerica from '../../assets/tarjetageneric.png';
import perfilTemporal from '../../assets/perfiltemporal.jpg';
import iconoWhats from '../../assets/icono-t-whatsapp.svg';
import iconoTelefono from '../../assets/icono-t-telefono.svg';
import iconoUbicacion from '../../assets/icono-t-ubicacion.svg';
import iconoCorreo from '../../assets/icono-t-correo.svg';
import iconoWeb from '../../assets/icono-t-web.svg';
import iconoFacebook from '../../assets/icono-t-facebook.svg';
import iconoInstagram from '../../assets/icono-t-instagram.svg';
import iconoTiktok from '../../assets/icono-t-tiktok.svg';
import iconoTwitter from '../../assets/icono-t-twitter.svg';
import iconoYoutube from '../../assets/icono-t-youtube.svg';
import iconoLinkedin from '../../assets/icono-t-linkedin.svg';
import iconoTelegram from '../../assets/icono-t-telegram.svg';
import iconoTarjet from '../../assets/icono-t-tarjet.svg';
import iconoSubirImagen from '../../assets/icono-imagen.svg';


const DiseñaTarjetSite = () => {
    const navigate = useNavigate();

    const [portada, setPortada] = useState(true);
    const [datos, setDatos] = useState(false);
    const [servicios, setServicios] = useState(false);

    const btnPortada = () => {
        setPortada(true);
        setDatos(false);
        setServicios(false);
    }

    const btnDatos = () => {
        setDatos(true);
        setPortada(false);
        setServicios(false);
    }

    const btnServicios = () => {
        setServicios(true);
        setPortada(false);
        setDatos(false);
    }

    const [opcion, setOpcion] = useState('Gratuitas');

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

    // Btn Bloque
    const [bloque1, setBloque1] = useState(false);
    const [bloque2, setBloque2] = useState(false);
    const [bloque3, setBloque3] = useState(false);
    const [bloque4, setBloque4] = useState(false);

    const acordeonVariantes = {
        open: { height: 'auto' },
        closed: { height: 0 }
    };

    return ( 
        <div className="container-fluid DiseñaTarjetSite">
            <div className='img-banner'>
                <img src={ilustracion} />
            </div>

            <div className='text'>
                <h1>Tarjet site</h1>
                <p>
                    El micro sitio que te ayudará a que la gente te contacte y conozca tus servicios y productos.
                </p>
                <p>
                    Este site es tu presentación, se mostrará al momento de compartir tu tarjeta, ya sea en url, tarjeta nfc ó QR.
                </p>
            </div>

            <div className='controls'>
                <h2>Personaliza tu Tarjet site</h2>

                <div className='cuerpo'>
                    <button 
                        className={portada ? 'active' : ''}
                        onClick={btnPortada}
                    >
                        <div>1</div>
                        Portada
                    </button>
                    <button
                        className={datos ? 'active' : ''}
                        onClick={btnDatos}
                    >
                        <div>2</div>
                        Tus datos
                    </button>
                    <button 
                        className={`btn-3 ${servicios ? 'active' : ''}`}
                        onClick={btnServicios}
                    >
                        <div>3</div>
                        Tus servicios
                    </button>
                </div>
            </div>

            <div className='separador'>
                <hr/>
            </div>

            { portada &&
                <div className='colecciones'>
                    <h2>Colecciones</h2>

                    <div className='opciones'>
                        <button 
                            className={`primer ${opcion === 'Gratuitas' ? 'activeOption' : ''}`}
                            onClick={(e)=>setOpcion(e.target.innerText)}
                        >
                            <i className="bi bi-caret-down-fill"></i>
                            Gratuitas
                        </button>
                        <button
                            className={opcion === 'Premium' ? 'activeOption' : ''}
                            onClick={(e)=>setOpcion(e.target.innerText)}
                        >
                            <i className="bi bi-caret-down-fill"></i>
                            Premium
                        </button>
                        <button
                            className={opcion === 'Personalizado' ? 'activeOption' : ''}
                            onClick={(e)=>setOpcion(e.target.innerText)}
                        >
                            <i className="bi bi-caret-down-fill"></i>
                            Personalizado
                        </button>
                    </div>

                    { opcion === 'Gratuitas' &&
                        <div className='gratuitas'>
                            <Slider {...settings}>
                                <div className='tarjetaGratuita'>
                                    <div className='cuerpo'></div>
                                </div>
                                <div className='tarjetaGratuita'>
                                    <div className='cuerpo'></div>
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

                            <div className='buttons-confirm'>
                                <button>
                                    Cargar archivo de imagen
                                </button>
                                <button className='guardar'>
                                    Guardar imagen
                                </button>
                            </div>

                            <div className='btn-continuar'>
                                <button>
                                    Continuar a paso 2
                                </button>
                            </div>

                            <div className='btn-regresarr'>
                                <button>
                                    Regresar a perfil (x)
                                </button>
                            </div>
                        </div>
                    }
                </div>
            }

            { datos &&
                <div className='Tusdatos'>
                    <form>
                        <div className='img-perfil'>
                            <div className='img'>
                                <img src={perfilTemporal} />
                            </div>

                            <div className='inputs'>
                                <input type="text" placeholder='Empresa ó Nombre (40 caracteres)' maxLength={40}/>
                                <input type="text" placeholder='Cargo o giro de la empresa'/>
                            </div>
                        </div>

                        <div className='subirimagen'>
                            <button>
                                Subir imagen
                            </button>
                        </div>

                        <div className='indicaciones'>
                            <p>
                                En tu Tarjet Site, se mostrarán los campos con la información que llenes, mientras que los campos vacíos permanecerán ocultos.
                            </p>
                        </div>

                        <div className='datosContacto'>
                            <h3>Datos de contacto</h3>

                            <div className='input-datos'>
                                <div className='cont'>
                                    <img src={iconoWhats}/>
                                </div>
                                <input type="text" placeholder='Teléfono whatsapp'/>
                            </div>
                            <div className='input-datos'>
                                <div className='cont'>
                                    <img src={iconoTelefono}/>
                                </div>
                                <input type="text" placeholder='Teléfono fijo ó de contacto'/>
                            </div>

                            <div className='checkbox'>
                                <input type="checkbox"/>
                                <label>Mostrar mi ubicación registrada en mi perfil</label>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoUbicacion}/>
                                </div>
                                <select name="" id="">
                                    <option value="" key="001">Visita mi oficina ubicada en</option>
                                </select>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoCorreo}/>
                                </div>
                                <input type="text" placeholder='Correo electrónico'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoWeb}/>
                                </div>
                                <input type="text" placeholder='Sitio web'/>
                            </div>

                            <h3 className='mt-5 mb-0'>Redes sociales</h3>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoFacebook}/>
                                </div>
                                <input type="text" placeholder='Url Facebook'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoInstagram}/>
                                </div>
                                <input type="text" placeholder='Url Instagram'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTiktok}/>
                                </div>
                                <input type="text" placeholder='Url Tiktok'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTwitter}/>
                                </div>
                                <input type="text" placeholder='Url Twitter'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoYoutube}/>
                                </div>
                                <input type="text" placeholder='Url Youtube'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoLinkedin}/>
                                </div>
                                <input type="text" placeholder='Url Linkedin'/>
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTelegram}/>
                                </div>
                                <input type="text" placeholder='Url Telegram'/>
                            </div>

                            <div className='input-datos mostrarUsuario'>
                                <div className='cont ubi'>
                                    <img src={iconoTarjet}/>
                                </div>
                                <div className='in'>
                                    <label htmlFor='acept'>Mostrar mi usuario Tarjet</label>
                                    <input type="checkbox" id='acept'/>
                                </div>
                            </div>

                            <div className='terminos'>
                                <input type="checkbox" id="terminos" />
                                <label htmlFor='terminos'>Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span></label>
                            </div>

                            <div className='guardar'>
                                <button>
                                    Guardar ó actualizar información
                                </button>
                            </div>

                            <div className='buttons-pasos'>
                                <button>
                                    Regresar a paso 1
                                </button>
                                <button>
                                    Regresar a paso 3
                                </button>
                            </div>

                            <div className='btn-regresarr'>
                                <button>
                                    Regresar a perfil (x)
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            }

            { servicios &&
                <div className='TusServicios'>
                    <p>
                        En tu Tarjet Site, se mostrarán los campos con la información que llenes, mientras que los campos vacíos permanecerán ocultos.
                    </p>
                    
                    <h3>Actividad principal</h3>
                    <p>
                        Sugerimos uses palabras claves que resuman tu actividad. En el cuadro de llenado te damos un ejemplo:
                    </p>

                    <form>
                        <input type="text" placeholder='Estética profesional canina.'/>

                        <h3>Listado de actividades</h3>
                        <p>
                            Sugerimos uses enunciados en forma de lista que describan tus actividades ó principales servicios.
                        </p>
                        <h3>Servicios</h3>
                        <textarea placeholder='Escribe aquí tu listado ó parrafo de servicios / actividades'></textarea>

                        <h3>Muestra de productos ó servicios</h3>

                        <div>
                            <button className='btn-bloque' onClick={()=>setBloque1(!bloque1)}>
                                Bloque de servicio No. 1
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                            <AnimatePresence>
                                { bloque1 &&
                                    <motion.div 
                                        className='cuerpo-bloque'
                                        initial= "closed"
                                        animate= "open"
                                        exit= "closed"
                                        variants={acordeonVariantes}
                                    >
                                        <input type="text" placeholder='Escribe su título'/>
                                        <div className='mostrar-imagen'>
                                            <img src={iconoSubirImagen} />
                                        </div>
                                        <div className='btn-subir'>
                                            <button>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea placeholder='Descripción de la foto (hasta 60 caracteres)' maxLength={60}>
                                        </textarea>
                                        <div className='borrar'>
                                            <button>
                                                Borrar contenido de bloque
                                            </button>
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                        <div>
                            <button className='btn-bloque' onClick={()=>setBloque2(!bloque2)}>
                                Bloque de servicio No. 2
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                            <AnimatePresence>
                                { bloque2 &&
                                    <motion.div 
                                        className='cuerpo-bloque'
                                        initial= "closed"
                                        animate= "open"
                                        exit= "closed"
                                        variants={acordeonVariantes}
                                    >
                                        <input type="text" placeholder='Escribe su título'/>
                                        <div className='mostrar-imagen'>
                                            <img src={iconoSubirImagen} />
                                        </div>
                                        <div className='btn-subir'>
                                            <button>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea placeholder='Descripción de la foto (hasta 60 caracteres)' maxLength={60}>
                                        </textarea>
                                        <div className='borrar'>
                                            <button>
                                                Borrar contenido de bloque
                                            </button>
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                        <div>
                            <button className='btn-bloque' onClick={()=>setBloque3(!bloque3)}>
                                Bloque de servicio No. 3
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                            <AnimatePresence>
                                { bloque3 &&
                                    <motion.div 
                                        className='cuerpo-bloque'
                                        initial= "closed"
                                        animate= "open"
                                        exit= "closed"
                                        variants={acordeonVariantes}
                                    >
                                        <input type="text" placeholder='Escribe su título'/>
                                        <div className='mostrar-imagen'>
                                            <img src={iconoSubirImagen} />
                                        </div>
                                        <div className='btn-subir'>
                                            <button>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea placeholder='Descripción de la foto (hasta 60 caracteres)' maxLength={60}>
                                        </textarea>
                                        <div className='borrar'>
                                            <button>
                                                Borrar contenido de bloque
                                            </button>
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                        <div>
                            <button className='btn-bloque' onClick={()=>setBloque4(!bloque4)}>
                                Bloque de servicio No. 4
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>

                            <AnimatePresence>
                                { bloque4 &&
                                    <motion.div 
                                        className='cuerpo-bloque'
                                        initial= "closed"
                                        animate= "open"
                                        exit= "closed"
                                        variants={acordeonVariantes}
                                    >
                                        <input type="text" placeholder='Escribe su título'/>
                                        <div className='mostrar-imagen'>
                                            <img src={iconoSubirImagen} />
                                        </div>
                                        <div className='btn-subir'>
                                            <button>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea placeholder='Descripción de la foto (hasta 60 caracteres)' maxLength={60}>
                                        </textarea>
                                        <div className='borrar'>
                                            <button>
                                                Borrar contenido de bloque
                                            </button>
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                        <p>
                            Al adquirir el plan Premium ******** <br/> puedes agregar hasta 10 productos ó servicios
                        </p>

                        <a href="" className='btn-premium'>
                            ¡Adquiérelo aquí!
                        </a>

                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 5
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 6
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 7
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 8
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 9
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className='btn-bloque premium'>
                                Bloque de servicio No. 10
                                <div>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                            </button>
                        </div>

                        <div className='Btnterminos'>
                            <input type="checkbox" id="termino" />
                            <label htmlFor='termino'>
                                Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span>
                            </label>
                        </div>

                        <button className='btn-guardar'>
                            Guardar ó actualizar información
                        </button>

                        <div className='pasos'>
                            <button>
                                Regresar a paso 2
                            </button>
                        </div>

                        <div className='btn-regresarr'>
                            <button>
                                Regresar a perfil (x)
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

export default DiseñaTarjetSite;