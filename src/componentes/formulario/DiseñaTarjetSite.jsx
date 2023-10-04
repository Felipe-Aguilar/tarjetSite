import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DatosEditaPerfil, ActualizarPerfil2 } from '../contextos/EditaPerfil';
import CargarImagen from './CargarImagen';

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
import PopCorrecto from './PopCorrecto';


const DiseñaTarjetSite = () => {

    const { usuId } = useParams();
    const [datosSesion, setDatosSesion] = useState([]);
    const [ datosGenerales, setDatosGenerales ] = useState([]);
    const [error, setError] = useState(false);

    const objeto = {
        ServNum: "",
        ServDescrip: "",
        ServSubTitulo: "",
        ServImg: "",
        ServIcono: "",
        ServSiteId: "",
    }

    // Datos generales
    const [telefono1, setTelefono1] = useState('');
    const [telefono2, setTelefono2] = useState('');
    const [correo, setCorreo] = useState('');
    const [sitioWeb, setSitioWeb] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [telegram, setTelegram] = useState('');
    const [servicio1, setServicio1] = useState(objeto);
    const [servicio2, setServicio2] = useState(objeto);
    const [servicio3, setServicio3] = useState(objeto);
    const [servicio4, setServicio4] = useState(objeto);
    const [servicio5, setServicio5] = useState(objeto);
    const [servicio6, setServicio6] = useState(objeto);
    const [servicio7, setServicio7] = useState(objeto);

    useEffect(()=>{

        const datosSesion = JSON.parse(localStorage.getItem('DatosSesion'));
        setDatosSesion(datosSesion);

        const usuarioID = JSON.parse(localStorage.getItem('IdDatosSesion'));

        // Obtiene datos generales
        const DatosGenerales = async() => {
            const respuesta = await DatosEditaPerfil(usuarioID.usuId);
            setDatosGenerales(respuesta);

            setTelefono1(respuesta.Telefono1);
            setTelefono2(respuesta.Telefono2);
            setCorreo(respuesta.Mail);
            setSitioWeb(respuesta.Web);
            setFacebook(respuesta.Facebook);
            setInstagram(respuesta.Instagram);
            setTiktok(respuesta.Tiktok);
            setTwitter(respuesta.Twitter);
            setYoutube(respuesta.Youtube);
            setLinkedin(respuesta.Linkedin);
            setTelegram(respuesta.Telegram);

            // ESTO SE DEBE CAMBIAR!!!!
            setServicio1({
                ServNum: 1,
                ServDescrip: respuesta.Serv[0]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[0]?.ServSubTitulo,
                ServImg: respuesta.Serv[0]?.ServImg,
                ServIcono: respuesta.Serv[0]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio2({
                ServNum: 2,
                ServDescrip: respuesta.Serv[1]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[1]?.ServSubTitulo,
                ServImg: respuesta.Serv[1]?.ServImg,
                ServIcono: respuesta.Serv[1]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio3({
                ServNum: 3,
                ServDescrip: respuesta.Serv[2]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[2]?.ServSubTitulo,
                ServImg: respuesta.Serv[2]?.ServImg,
                ServIcono: respuesta.Serv[2]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio4({
                ServNum: 4,
                ServDescrip: respuesta.Serv[3]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[3]?.ServSubTitulo,
                ServImg: respuesta.Serv[3]?.ServImg,
                ServIcono: respuesta.Serv[3]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio5({
                ServNum: 5,
                ServDescrip: respuesta.Serv[4]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[4]?.ServSubTitulo,
                ServImg: respuesta.Serv[4]?.ServImg,
                ServIcono: respuesta.Serv[4]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio6({
                ServNum: 6,
                ServDescrip: respuesta.Serv[5]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[5]?.ServSubTitulo,
                ServImg: respuesta.Serv[5]?.ServImg,
                ServIcono: respuesta.Serv[5]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio7({
                ServNum: 7,
                ServDescrip: respuesta.Serv[6]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[6]?.ServSubTitulo,
                ServImg: respuesta.Serv[6]?.ServImg,
                ServIcono: respuesta.Serv[6]?.ServIcono,
                ServSiteId: 2,
            });
        }

        // Comprobar si es la sesión
        if (localStorage.UsuarioSesion && atob(usuId) === datosSesion.UsuToken) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            DatosGenerales();
        }
        else{
            navigate('/login');
        } 
        
    },[]);

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

    // BtnPasos
    const btnPaso2 = () => {
        setPortada(false);
        setDatos(true);
    }

    const btnPaso3 = () => {
        setDatos(false);
        setServicios(true);
    }

    const btnRegresarPaso1 = () => {
        setDatos(false);
        setPortada(true);
    }

    const btnRegresarPaso2 = () => {
        setServicios(false);
        setDatos(true);
    }

    // Sacar pop de datos actualizados
    const [popActualiza, setPopActualiza] = useState(false);

    // Guardar Tarjeta 1
    const GuardarTarjeta1 = async () => {

        if (error) {
            return;
        }

        const datosFormulario = {
            "Telefono1": telefono1,
            "Telefono2": telefono2,
            "Mail": correo,
            "Web": sitioWeb,
            "Facebook": facebook,
            "Instagram": instagram,
            "Tiktok": tiktok,
            "Twitter": twitter,
            "Youtube": youtube,
            "Telegram": telegram,
            "Servicio1": servicio1,
            "Servicio2": servicio2,
            "Servicio3": servicio3,
            "Servicio4": servicio4,
            "Servicio5": servicio5,
            "Servicio6": servicio6,
            "Servicio7": servicio7,
        }

        await ActualizarPerfil2(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            
        }, 3500);
    }

    const OnlyNumbers = (e) => {
        const numero = e.target.value.replace(/\D/g, '');
        setTelefono1(numero);
    }

    const OnlyNumbers2 = (e) => {
        const numero = e.target.value.replace(/\D/g, '');
        setTelefono2(numero);
    }

    const OnlyEmail = (e) => {
        setCorreo(e.target.value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(e.target.value)) {
            setError(true);

            if (e.target.value === '') {
                setError(false);
            }
        }else{
            setError(false);
        }
    }

    const BorrarBloque = (numero) => {

        if (numero === 4) {
            setServicio4({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 5) {
            setServicio5({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 6) {
            setServicio6({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 7) {
            setServicio7({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }
    }

    // Subir Imagen de servicios
    const [cargarImagen, setCargarImagen] = useState(false);
    const [nServicioImagen, setNServicioImagen] = useState(0);

    const SubirImagen = (numero) => {
        setCargarImagen(true);
        setNServicioImagen(numero);
    }

    const CerrarCarga = () => {
        setCargarImagen(false);
    }

    return ( 
        <div className="container-fluid DiseñaTarjetSite">

            { popActualiza &&
                <PopCorrecto />
            }

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
                                    Cargar archivo de imagen (premium)
                                </button>
                                <button className='guardar'>
                                    Guardar imagen
                                </button>
                            </div>

                            <div className='btn-continuar'>
                                <button onClick={btnPaso2}>
                                    Continuar a paso 2
                                </button>
                            </div>

                            <div className='btn-regresarr'>
                                <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
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
                                { datosGenerales.ImgFoto ?
                                    <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}`} />
                                :
                                    <img src={perfilTemporal} />
                                }
                            </div>

                            <div className='inputs'>
                                <input 
                                    type="text" 
                                    placeholder='Empresa ó Nombre (40 caracteres)' 
                                    maxLength={40}
                                    value={datosGenerales.Nom + " " +datosGenerales.AppP + " " +datosGenerales.AppM}
                                    readOnly
                                />
                                <input 
                                    type="text" 
                                    placeholder='Cargo o giro de la empresa'
                                    value={datosGenerales.Cargo}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* <div className='subirimagen'>
                            <button>
                                Subir imagen
                            </button>
                        </div> */}

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
                                <input 
                                    type="text" 
                                    maxLength={10}
                                    placeholder='Teléfono whatsapp'
                                    value={telefono1}
                                    onChange={OnlyNumbers}
                                />
                            </div>
                            <div className='input-datos'>
                                <div className='cont'>
                                    <img src={iconoTelefono}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Teléfono fijo ó de contacto'
                                    maxLength={10}
                                    value={telefono2}
                                    onChange={OnlyNumbers2}
                                />
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
                                <input 
                                    type="text" 
                                    placeholder='Correo electrónico'
                                    className={error ? 'input-error' : ''}
                                    value={correo}
                                    onChange={OnlyEmail}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoWeb}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Sitio web'
                                    value={sitioWeb}
                                    onChange={(e)=>setSitioWeb(e.target.value)}
                                />
                            </div>

                            <h3 className='mt-5 mb-0'>Redes sociales</h3>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoFacebook}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Facebook'
                                    value={facebook}
                                    onChange={(e)=>setFacebook(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoInstagram}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Instagram'
                                    value={instagram}
                                    onChange={(e)=>setInstagram(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTiktok}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Tiktok'
                                    value={tiktok}
                                    onChange={(e)=>setTiktok(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTwitter}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Twitter'
                                    value={twitter}
                                    onChange={(e)=>setTwitter(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoYoutube}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Youtube'
                                    value={youtube}
                                    onChange={(e)=>setYoutube(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoLinkedin}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Linkedin'
                                    value={linkedin}
                                    onChange={(e)=>setLinkedin(e.target.value)}
                                />
                            </div>

                            <div className='input-datos'>
                                <div className='cont ubi'>
                                    <img src={iconoTelegram}/>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder='Url Telegram'
                                    value={telegram}
                                    onChange={(e)=>setTelegram(e.target.value)}
                                />
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

                            { error &&
                                <div className='message-error'>
                                    <p>
                                        Por favor ingresa una dirección de correo válida. 
                                    </p>
                                </div>
                            }

                            {/* <div className='terminos'>
                                <input type="checkbox" id="terminos" />
                                <label htmlFor='terminos'>Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span></label>
                            </div> */}

                            <div className='guardar'>
                                <button onClick={GuardarTarjeta1}>
                                    Guardar ó actualizar información
                                </button>
                            </div>

                            <div className='buttons-pasos'>
                                <button onClick={btnRegresarPaso1}>
                                    Regresar a paso 1
                                </button>
                                <button onClick={btnPaso3}>
                                    Continuar a paso 3
                                </button>
                            </div>

                            <div className='btn-regresarr'>
                                <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
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
                        <input type="text" placeholder='Estética profesional canina.' readOnly value={datosGenerales.Lev3Desc}/>

                        <h3>Listado de actividades</h3>
                        <p>
                            Sugerimos uses enunciados en forma de lista que describan tus actividades ó principales servicios.
                        </p>
                        <h3>Servicios</h3>
                        <textarea 
                            placeholder='Escribe aquí tu listado ó parrafo de servicios / actividades'
                            value={servicio1.ServDescrip}
                            onChange={(e)=>setServicio1({...servicio1, ServDescrip: e.target.value})}
                        >
                        </textarea>

                        <h3>Muestra de productos ó servicios</h3>

                        { cargarImagen && 
                            <CargarImagen onBotonClick={CerrarCarga}  tipoImagen={"SERV"} numeroServicio={nServicioImagen}/>
                        }

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
                                        <input 
                                            type="text" 
                                            placeholder='Escribe su título'
                                            value={servicio4.ServSubTitulo}
                                            onChange={(e) => setServicio4({...servicio4, ServSubTitulo: e.target.value })}
                                        />
                                        { servicio4.ServImg ?
                                            <img 
                                                src={`https://tarjet.site/imagenes/servicios/${servicio4.ServImg}`} 
                                                className='imagen-servicio'
                                            />
                                        :
                                            <div className='mostrar-imagen'>
                                                <img src={iconoSubirImagen} />
                                            </div>
                                        }
                                        <div className='btn-subir'>
                                            <button onClick={()=> SubirImagen(1)}>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea 
                                            placeholder='Descripción de la foto (hasta 60 caracteres)' 
                                            maxLength={60}
                                            value={servicio4.ServDescrip}
                                            onChange={(e) => setServicio4({...servicio4, ServDescrip: e.target.value })}
                                        >
                                        </textarea>
                                        <div className='borrar'>
                                            <button onClick={()=>BorrarBloque(4)}>
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
                                        <input 
                                            type="text" 
                                            placeholder='Escribe su título'
                                            value={servicio5.ServSubTitulo}
                                            onChange={(e) => setServicio5({...servicio5, ServSubTitulo: e.target.value })}
                                        />
                                        { servicio5.ServImg ?
                                            <img 
                                                src={`https://tarjet.site/imagenes/servicios/${servicio5.ServImg}`} 
                                                className='imagen-servicio'
                                            />
                                        :
                                            <div className='mostrar-imagen'>
                                                <img src={iconoSubirImagen} />
                                            </div>
                                        }
                                        <div className='btn-subir'>
                                            <button onClick={()=> SubirImagen(2)}>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea 
                                            placeholder='Descripción de la foto (hasta 60 caracteres)' 
                                            maxLength={60}
                                            value={servicio5.ServDescrip}
                                            onChange={(e) => setServicio5({...servicio5, ServDescrip: e.target.value })}
                                        >
                                        </textarea>
                                        <div className='borrar'>
                                            <button onClick={()=>BorrarBloque(5)}>
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
                                        <input 
                                            type="text" 
                                            placeholder='Escribe su título'
                                            value={servicio6.ServSubTitulo}
                                            onChange={(e) => setServicio6({...servicio6, ServSubTitulo: e.target.value })}
                                        />
                                        { servicio6.ServImg ?
                                            <img 
                                                src={`https://tarjet.site/imagenes/servicios/${servicio6.ServImg}`} 
                                                className='imagen-servicio'
                                            />
                                        :
                                            <div className='mostrar-imagen'>
                                                <img src={iconoSubirImagen} />
                                            </div>
                                        }
                                        <div className='btn-subir'>
                                            <button onClick={()=> SubirImagen(3)}>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea 
                                            placeholder='Descripción de la foto (hasta 60 caracteres)' 
                                            maxLength={60}
                                            value={servicio6.ServDescrip}
                                            onChange={(e) => setServicio6({...servicio6, ServDescrip: e.target.value })}
                                        >
                                        </textarea>
                                        <div className='borrar'>
                                            <button onClick={()=>BorrarBloque(6)}>
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
                                        <input 
                                            type="text" 
                                            placeholder='Escribe su título'
                                            value={servicio7.ServSubTitulo}
                                            onChange={(e) => setServicio7({...servicio7, ServSubTitulo: e.target.value })}
                                        />
                                        { servicio7.ServImg ?
                                            <img 
                                                src={`https://tarjet.site/imagenes/servicios/${servicio7.ServImg}`} 
                                                className='imagen-servicio'
                                            />
                                        :
                                            <div className='mostrar-imagen'>
                                                <img src={iconoSubirImagen} />
                                            </div>
                                        }
                                        <div className='btn-subir'>
                                            <button onClick={()=> SubirImagen(4)}>
                                                Subir imagen
                                            </button>
                                        </div>
                                        <textarea 
                                            placeholder='Descripción de la foto (hasta 60 caracteres)' 
                                            maxLength={60}
                                            value={servicio7.ServDescrip}
                                            onChange={(e) => setServicio7({...servicio7, ServDescrip: e.target.value })}
                                        >
                                        </textarea>
                                        <div className='borrar'>
                                            <button onClick={()=>BorrarBloque(7)}>
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

                        {/* <div className='Btnterminos'>
                            <input type="checkbox" id="termino" />
                            <label htmlFor='termino'>
                                Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span>
                            </label>
                        </div> */}

                        <button className='btn-guardar' onClick={GuardarTarjeta1}>
                            Guardar ó actualizar información
                        </button>

                        <div className='pasos'>
                            <button onClick={btnRegresarPaso2}>
                                Regresar a paso 2
                            </button>
                        </div>

                        <div className='btn-regresarr'>
                            <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
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