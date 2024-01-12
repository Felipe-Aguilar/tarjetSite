import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DatosEditaPerfil, ActualizarPerfil2, ActualizarPerfil3, ActualizarHeaderPerfil } from '../contextos/EditaPerfil';
import { ColeccionEncabezados } from '../contextos/Colecciones';
import CargarImagen from './CargarImagen';
import DOMPurify from 'dompurify';

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
import PrevisualizarHeader from './PrevisualizarHeader';
import iconoMiPerfil from '../../assets/icono-perfil-02.svg';
import InfoFacebook from './InfoFacebook';
import { BsTwitterX } from "react-icons/bs";


const DiseñaTarjetSite = () => {

    const { usuId } = useParams();
    const [datosSesion, setDatosSesion] = useState([]);
    const [ datosGenerales, setDatosGenerales ] = useState([]);
    const [error, setError] = useState(false);
    const [previsualizar, setPrevisualizar] = useState(false);

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
    const [servicio8, setServicio8] = useState(objeto);
    const [servicio9, setServicio9] = useState(objeto);
    const [servicio10, setServicio10] = useState(objeto);
    const [servicio11, setServicio11] = useState(objeto);
    const [servicio12, setServicio12] = useState(objeto);
    const [servicio13, setServicio13] = useState(objeto);
    const [servicio14, setServicio14] = useState(objeto);
    
    const [servicio15, setServicio15] = useState(objeto);
    const [servicio16, setServicio16] = useState(objeto);
    const [servicio17, setServicio17] = useState(objeto);
    const [servicio18, setServicio18] = useState(objeto);

    const [titulo, setTitulo] = useState('Lic');

    const [colecciones, setColecciones] = useState([]);
    const [coleccionesGratis, setColeccionesGratis] = useState([]);
    const [coleccionesPremium, setColeccionesPremium] = useState([]);

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
            if (respuesta.Titulo === '') {
                setTitulo('Lic');
            }else{
                setTitulo(respuesta.Titulo);
            }

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
                ServSiteId: 1,
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
            setServicio8({
                ServNum: 8,
                ServDescrip: respuesta.Serv[7]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[7]?.ServSubTitulo,
                ServImg: respuesta.Serv[7]?.ServImg,
                ServIcono: respuesta.Serv[7]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio9({
                ServNum: 9,
                ServDescrip: respuesta.Serv[8]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[8]?.ServSubTitulo,
                ServImg: respuesta.Serv[8]?.ServImg,
                ServIcono: respuesta.Serv[8]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio10({
                ServNum: 10,
                ServDescrip: respuesta.Serv[9]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[9]?.ServSubTitulo,
                ServImg: respuesta.Serv[9]?.ServImg,
                ServIcono: respuesta.Serv[9]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio11({
                ServNum: 11,
                ServDescrip: respuesta.Serv[10]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[10]?.ServSubTitulo,
                ServImg: respuesta.Serv[10]?.ServImg,
                ServIcono: respuesta.Serv[10]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio12({
                ServNum: 12,
                ServDescrip: respuesta.Serv[11]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[11]?.ServSubTitulo,
                ServImg: respuesta.Serv[11]?.ServImg,
                ServIcono: respuesta.Serv[11]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio13({
                ServNum: 13,
                ServDescrip: respuesta.Serv[12]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[12]?.ServSubTitulo,
                ServImg: respuesta.Serv[12]?.ServImg,
                ServIcono: respuesta.Serv[12]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio14({
                ServNum: 14,
                ServDescrip: respuesta.Serv[13]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[13]?.ServSubTitulo,
                ServImg: respuesta.Serv[13]?.ServImg,
                ServIcono: respuesta.Serv[13]?.ServIcono,
                ServSiteId: 2,
            });
            setServicio15({
                ServNum: 15,
                ServDescrip: respuesta.Serv[14]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[14]?.ServSubTitulo,
                ServImg: respuesta.Serv[14]?.ServImg,
                ServIcono: respuesta.Serv[14]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio16({
                ServNum: 16,
                ServDescrip: respuesta.Serv[15]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[15]?.ServSubTitulo,
                ServImg: respuesta.Serv[15]?.ServImg,
                ServIcono: respuesta.Serv[15]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio17({
                ServNum: 17,
                ServDescrip: respuesta.Serv[16]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[16]?.ServSubTitulo,
                ServImg: respuesta.Serv[16]?.ServImg,
                ServIcono: respuesta.Serv[16]?.ServIcono,
                ServSiteId: 1,
            });
            setServicio18({
                ServNum: 18,
                ServDescrip: respuesta.Serv[17]?.ServDescrip,
                ServSubTitulo: respuesta.Serv[17]?.ServSubTitulo,
                ServImg: respuesta.Serv[17]?.ServImg,
                ServIcono: respuesta.Serv[17]?.ServIcono,
                ServSiteId: 1,
            });
        }

        const Colecciones = async () => {
            const response = await ColeccionEncabezados();
            setColecciones(response.ListSiteHeader);

            setColeccionesGratis( response.ListSiteHeader.filter(coleccion => coleccion.SiteHeaderPremium === 0) );
            setColeccionesPremium( response.ListSiteHeader.filter(coleccion => coleccion.SiteHeaderPremium === 1) );
        }

        // Comprobar si es la sesión
        if (localStorage.UsuarioSesion && atob(usuId) === datosSesion.UsuToken) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            DatosGenerales();
            Colecciones();
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentFondo, setCurrentFondo] = useState('SiteHeader1.webp');
    const [currentFondo2, setCurrentFondo2] = useState('SiteHeadPr1.webp');

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
        afterChange: (current) => {
            // Se ejecuta después de que cambie la diapositiva
            setCurrentSlide(current);

            // const objectImagen = colecciones.find(coleccion => coleccion.SiteHeaderId == current+1);
            const objectImagen = colecciones.find(coleccion => coleccion.SiteHeaderImagen === `SiteHeader${current+1}.webp`);
            setCurrentFondo(objectImagen.SiteHeaderImagen);
            
            const objectImagen2 = coleccionesPremium.find(coleccion => coleccion.SiteHeaderImagen === `SiteHeadPr${current+1}.webp`);
            
            if (objectImagen2) {
                setCurrentFondo2(objectImagen2);
            }
        },
    }

    // Btn Bloque
    const [bloque1, setBloque1] = useState(false);
    const [bloque2, setBloque2] = useState(false);
    const [bloque3, setBloque3] = useState(false);
    const [bloque4, setBloque4] = useState(false);
    const [bloque5, setBloque5] = useState(false);
    const [bloque6, setBloque6] = useState(false);
    const [bloque7, setBloque7] = useState(false);
    const [bloque8, setBloque8] = useState(false);
    const [bloque9, setBloque9] = useState(false);
    const [bloque10, setBloque10] = useState(false);

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
    const GuardarTarjeta1 = async (e) => {
        e.preventDefault();

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
            "Servicio8": servicio8,
            "Servicio9": servicio9,
            "Servicio10": servicio10,
            "Servicio11": servicio11,
            "Servicio12": servicio12,
            "Servicio13": servicio13,
            "Servicio14": servicio14,
            "Servicio15": servicio15,
            "Servicio16": servicio16,
            "Servicio17": servicio17,
            "Servicio18": servicio18,
            "Titulo": titulo,
        }

        await ActualizarPerfil2(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            setTimeout(()=>{
                window.location.reload();
            },1000);
            
        }, 3500);
    }
    
    // Guarda el encabezado
    const GuardarImagenEncabezado = async (tipo, e) => {
        e.preventDefault();

        var fondo;

        if (tipo === 'gratis') {

            fondo = currentFondo;

        }else if(tipo === 'premium'){

            if (currentFondo2.SiteHeaderImagen === undefined) {
                fondo = currentFondo2;
            }else{
                fondo = currentFondo2.SiteHeaderImagen;
            }
        }
        
        const datosFormulario = {
            "ImgHeader": fondo,
        }

        await ActualizarHeaderPerfil(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            setTimeout(()=>{
                window.location.reload();
            },1000);
            
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
        setCorreo(e.target.value.trim());

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(e.target.value.trim())) {
            setError(true);

            if (e.target.value.trim() === '') {
                setError(false);
            }
        }else{
            setError(false);
        }
    }

    const BorrarBloque = (numero) => {

        if (numero === 5) {
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
        }else if (numero === 8) {
            setServicio8({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 9) {
            setServicio9({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 10) {
            setServicio10({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 11) {
            setServicio11({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 12) {
            setServicio12({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 13) {
            setServicio13({
                ServNum: numero,
                ServDescrip: "",
                ServSubTitulo: "",
                ServImg: "",
                ServIcono: "",
                ServSiteId: "",
            });
        }else if (numero === 14) {
            setServicio14({
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
    const [tipoImagen, setTipoImagen] = useState('SERV');

    const SubirImagen = (numero) => {
        setCargarImagen(true);
        setNServicioImagen(numero);
    }

    const SubirImagenHeader = () => {
        setCargarImagen(true);
        setTipoImagen('SITE');
    }

    const CerrarCarga = () => {
        setCargarImagen(false);
    }

    const handleBlur = async () => {
        const datosFormulario = {
            "Servicio1": servicio1,
            "Servicio2": servicio2,
            "Servicio3": servicio3,
            "Servicio4": servicio4,
            "Servicio5": servicio5,
            "Servicio6": servicio6,
            "Servicio7": servicio7,
            "Servicio8": servicio8,
            "Servicio9": servicio9,
            "Servicio10": servicio10,
            "Servicio11": servicio11,
            "Servicio12": servicio12,
            "Servicio13": servicio13,
            "Servicio14": servicio14,
            "Servicio15": servicio15,
            "Servicio16": servicio16,
            "Servicio17": servicio17,
            "Servicio18": servicio18,
        }

        await ActualizarPerfil3(datosGenerales, datosFormulario);
    }

    const [infoFacebook, setInfoFacebook] = useState(false);

    const CerrarPrevisualizar = () => {
        setPrevisualizar(false);
    }

    const CerrarInfoFacebook = () => {
        setInfoFacebook(false);
    }

    return ( 
        <div className='backgroun-Green'>
            <div className="container-fluid DiseñaTarjetSite background-image">

                { popActualiza &&
                    <PopCorrecto />
                }

                { infoFacebook &&
                    <InfoFacebook CerrarInfoFacebook={CerrarInfoFacebook}/>
                }

                <div className='img-banner'>
                    <img src={ilustracion} />
                </div>

                <div className='text'>
                    <h1>Tarjet site</h1>
                    <p className='orange'>
                        Tu propio sitio Web para que te contacten y conozcan tus servicios o productos.
                    </p>

                    <div className='buttonMiperfil'>
                        <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
                            <img src={iconoMiPerfil} alt="Icono ir a mi perfil" />
                            Mi perfil
                        </button>
                    </div>

                    <p>
                        No olvides poner tu número de WhatsApp para que sea más sencillo que te contacten, así como tus redes sociales y los servicios que ofreces con las imágenes que tu prefieras.
                    </p>
                    <p>
                        Elige el encabezado que más te agrade y dale un estilo único a tu Tarjet Site, tu tarjeta de presentación virtual.
                    </p>
                </div>

                <div className='controls'>
                    <h2>Personaliza ahora tu Tarjet site</h2>

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
                                className={opcion === 'Ver actual' ? 'activeOption' : ''}
                                onClick={(e)=>setOpcion(e.target.innerText)}
                            >
                                <i className="bi bi-caret-down-fill"></i>
                                Ver actual
                            </button>
                        </div>

                        { opcion === 'Gratuitas' &&
                            <div className='gratuitas'>
                                <Slider {...settings}>

                                    {colecciones.map((coleccion)=>(
                                        coleccion.SiteHeaderPremium === 0 &&
                                        <div className='tarjetaGratuita' key={coleccion.SiteHeaderId}>
                                            <div 
                                                className='cuerpo' 
                                                style={{background: `URL(https://tarjet.site/imagenes/Headers_Collection/${coleccion.SiteHeaderImagen})`}}
                                            >
                                            </div>
                                        </div>
                                    ))
                                    }
                                </Slider>

                                <div className='info'>
                                    <div className='modelos w-100'>
                                        <p>
                                            {`${currentSlide + 1} de ${coleccionesGratis.length} modelos gratuitos`}
                                        </p>
                                    </div>
                                    {/* <div className='premium-select'>
                                        <div>
                                            <p>1</p>
                                        </div>
                                        <p>
                                            Tarjeta premium seleccionada
                                        </p>
                                    </div> */}
                                </div>

                                <div className='buttons-confirm'>
                                    {/* { datosGenerales.Premium &&
                                        <button 
                                            type='button' 
                                            className='previsualizarBtn' 
                                            onClick={()=>setPrevisualizar(true)}
                                        >
                                            Mi Logo/Foto
                                        </button>
                                    } */}
                                    {/* <button onClick={SubirImagenHeader}>
                                        Subir mi diseño
                                    </button> */}
                                    <button className='guardar' onClick={(e)=>GuardarImagenEncabezado('gratis', e)}>
                                        Definir encabezado
                                    </button>
                                </div>

                                { previsualizar &&
                                    <PrevisualizarHeader 
                                        onClickButton={CerrarPrevisualizar}
                                        datosGenerales={datosGenerales}
                                        currentFondo={currentFondo2}
                                    />
                                }

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

                        { opcion === 'Premium' &&
                            <div className='gratuitas'>
                                <Slider {...settings}>

                                    {colecciones.map((coleccion)=>(
                                        coleccion.SiteHeaderPremium === 1 &&
                                        <div className='tarjetaGratuita Premium' key={coleccion.SiteHeaderId}>
                                            <div 
                                                className='cuerpo' 
                                                style={{background: `URL(https://tarjet.site/imagenes/Headers_Collection/premium/${coleccion.SiteHeaderImagen})`}}
                                            >
                                            </div>
                                        </div>
                                    ))
                                    }
                                </Slider>

                                <div className='info'>
                                    <div className='modelos w-100'>
                                        <p>
                                            {`${currentSlide + 1} de ${coleccionesPremium.length} modelos gratuitos`}
                                        </p>
                                    </div>
                                    {/* <div className='premium-select'>
                                        <div>
                                            <p>1</p>
                                        </div>
                                        <p>
                                            Tarjeta premium seleccionada
                                        </p>
                                    </div> */}
                                </div>

                                <div className='buttons-confirm'>
                                    {/* <button 
                                        type='button' 
                                        className={`previsualizarBtn`} 
                                        onClick={()=>setPrevisualizar(true)}
                                        disabled={datosGenerales.Premium ? false : true}
                                    >
                                        Mi Logo/Foto
                                    </button> */}
                                    
                                    <button 
                                        className={`guardar`}
                                        onClick={(e)=>GuardarImagenEncabezado('premium', e)}
                                        disabled={datosGenerales.Premium ? false : true}
                                    >
                                        Definir encabezado
                                    </button>
                                </div>

                                { previsualizar &&
                                    <PrevisualizarHeader 
                                        onClickButton={CerrarPrevisualizar}
                                        datosGenerales={datosGenerales}
                                        currentFondo={currentFondo2}
                                    />
                                }

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

                        { opcion === 'Ver actual' &&
                            // <div className='gratuitas'>
                            //     <Slider {...settings}>

                            //         {colecciones.map((coleccion)=>(
                            //             <div className='tarjetaGratuita' key={coleccion.SiteHeaderId}>
                            //                 <div 
                            //                     className='cuerpo' 
                            //                     style={{background: `URL(https://tarjet.site/imagenes/Headers_Collection/${coleccion.SiteHeaderImagen})`}}
                            //                 >
                            //                 </div>
                            //             </div>
                            //         ))
                            //         }
                            //     </Slider>

                            //     {/* <div className='mas-imagenes'>
                            //         <div className='view3'>
                            //             <img src={tarjetaGenerica} />
                            //             <img src={tarjetaGenerica} />
                            //             <img src={tarjetaGenerica} />
                            //         </div>

                            //         <div className='viewpremium'>
                            //             <img src={tarjetaGenerica} />
                            //         </div>
                            //     </div> */}

                            //     <div className='info'>
                            //         <div className='modelos w-100'>
                            //             <p>
                            //                 {`${currentSlide + 1} de ${colecciones.length} modelos gratuitos`}
                            //             </p>
                            //         </div>
                            //         {/* <div className='premium-select'>
                            //             <div>
                            //                 <p>1</p>
                            //             </div>
                            //             <p>
                            //                 Tarjeta premium seleccionada
                            //             </p>
                            //         </div> */}
                            //     </div>

                            //     <div className='buttons-confirm'>

                            //         <button 
                            //             onClick={SubirImagenHeader}
                            //             disabled={datosGenerales.Premium ? false : true}
                            //         >
                            //             Subir mi diseño
                            //         </button>
                                    
                            //         <button 
                            //             className={`guardar`}
                            //             onClick={GuardarImagenEncabezado}
                            //             disabled={datosGenerales.Premium ? false : true}
                            //         >
                            //             Guardar imagen
                            //         </button>
                            //     </div>

                            //     { previsualizar &&
                            //         <PrevisualizarHeader 
                            //             onClickButton={CerrarPrevisualizar}
                            //             datosGenerales={datosGenerales}
                            //             currentFondo={currentFondo2}
                            //         />
                            //     }

                            //     <div className='btn-continuar'>
                            //         <button onClick={btnPaso2}>
                            //             Continuar a paso 2
                            //         </button>
                            //     </div>

                            //     <div className='btn-regresarr'>
                            //         <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
                            //             Regresar a perfil (x)
                            //         </button>
                            //     </div>
                            // </div>
                            <div className='personalizada'>

                                <p>Tu encabezado actual personalizado</p>

                                { (!datosGenerales.ImgHeader || !(datosGenerales.ImgHeader.slice(0,5) === 'SITE_')) &&
                                    <p>Aún no cuentas con un encabezado personalizado, selecciona uno editando tu tarjet site.</p>
                                }

                                {/* { datosGenerales.ImgHeader.slice(0,10) === 'SiteHeader' &&
                                    <img 
                                        src={`https://tarjet.site/imagenes/Headers_Collection/${datosGenerales.ImgHeader}`} 
                                        alt="Tu tarjeta personalizada" 
                                    />
                                } */}

                                { datosGenerales.ImgHeader.slice(0,5) === 'SITE_' &&
                                    <img 
                                        src={`https://tarjet.site/imagenes/encabezados/${datosGenerales.ImgHeader}`} 
                                        alt="Tu tarjeta personalizada"
                                        className='encabezadoPremium'
                                    />
                                }
                            </div>
                        }
                    </div>
                }

                { datos &&
                    <div className='Tusdatos'>
                        <form onSubmit={GuardarTarjeta1}>
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

                            <div className='btn-editar'>
                                <button onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>Editar estos datos</button>
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
                                        className='facebook'
                                    />
                                    <button onClick={()=>setInfoFacebook(true)} type='button'>
                                        <i className="bi bi-question-circle"></i>
                                    </button>
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
                                    <div className='cont ubi twitter'>
                                        {/* <img src={iconoTwitter}/> */}
                                        <BsTwitterX />
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
                                    <button type='submit'>
                                        Guardar ó actualizar información
                                    </button>
                                </div>

                                <div className='buttons-pasos'>
                                    <button onClick={btnRegresarPaso1} type='button'>
                                        Regresar a paso 1
                                    </button>
                                    <button onClick={btnPaso3}>
                                        Continuar a paso 3
                                    </button>
                                </div>

                                <div className='btn-regresarr'>
                                    <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                                        Regresar a perfil (x)
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                }

                { cargarImagen && 
                    <CargarImagen onBotonClick={CerrarCarga}  tipoImagen={tipoImagen} numeroServicio={nServicioImagen} />
                }

                { servicios &&
                    <div className='TusServicios'>
                        <p>
                            En tu Tarjet Site, se mostrarán los campos con la información que llenes, mientras que los campos vacíos permanecerán ocultos.
                        </p>
                        
                        <form onSubmit={GuardarTarjeta1}>
                            
                            <h3>Listado de actividades</h3>
                            <p>
                                Sugerimos uses enunciados en forma de lista que describan tus actividades ó principales servicios.
                            </p>
                            <h3>Servicios</h3>
                            <input 
                                type="text" 
                                placeholder='• Listado de servicio' 
                                value={servicio1.ServDescrip} 
                                onChange={(e)=>setServicio1({...servicio1, ServDescrip: e.target.value})}
                                onBlur={handleBlur}
                            />
                            <input 
                                type="text" 
                                placeholder='• Listado de servicio' 
                                value={servicio2.ServDescrip} 
                                onChange={(e)=>setServicio2({...servicio2, ServDescrip: e.target.value})}
                                onBlur={handleBlur}
                            />
                            <input 
                                type="text" 
                                placeholder='• Listado de servicio' 
                                value={servicio3.ServDescrip} 
                                onChange={(e)=>setServicio3({...servicio3, ServDescrip: e.target.value})}
                                onBlur={handleBlur}
                            />
                            <input 
                                type="text" 
                                placeholder='• Listado de servicio' 
                                value={servicio4.ServDescrip} 
                                onChange={(e)=>setServicio4({...servicio4, ServDescrip: e.target.value})}
                                onBlur={handleBlur}
                            />
                            { datosGenerales.Premium &&
                                <>
                                    <input 
                                        type="text" 
                                        placeholder='• Listado de servicio' 
                                        value={servicio15.ServDescrip} 
                                        onChange={(e)=>setServicio15({...servicio15, ServDescrip: e.target.value})}
                                        onBlur={handleBlur}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='• Listado de servicio' 
                                        value={servicio16.ServDescrip} 
                                        onChange={(e)=>setServicio16({...servicio16, ServDescrip: e.target.value})}
                                        onBlur={handleBlur}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='• Listado de servicio' 
                                        value={servicio17.ServDescrip} 
                                        onChange={(e)=>setServicio17({...servicio17, ServDescrip: e.target.value})}
                                        onBlur={handleBlur}
                                    />
                                    <input npm install dompurify

                                        type="text" 
                                        placeholder='• Listado de servicio' 
                                        value={servicio18.ServDescrip} 
                                        onChange={(e)=>setServicio18({...servicio18, ServDescrip: e.target.value})}
                                        onBlur={handleBlur}
                                    />
                                </>
                            }
                            
                            {/* <textarea 
                                placeholder='Escribe aquí tu listado ó parrafo de servicios / actividades'
                                value={servicio1.ServDescrip}
                                onChange={(e)=>setServicio1({...servicio1, ServDescrip: e.target.value})}
                            >
                            </textarea> */}

                            <h3>Muestra de productos ó servicios</h3>

                            <div>
                                <button className='btn-bloque' onClick={()=>setBloque1(!bloque1)} type='button'>
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
                                                placeholder='Título de imagen'
                                                value={servicio5.ServSubTitulo}
                                                onChange={(e) => setServicio5({...servicio5, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
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
                                                <button onClick={()=> SubirImagen(5)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio5.ServDescrip}
                                                onChange={(e) => setServicio5({...servicio5, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(5)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            <div>
                                <button className='btn-bloque' onClick={()=>setBloque2(!bloque2)} type='button'>
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
                                                placeholder='Título de imagen'
                                                value={servicio6.ServSubTitulo}
                                                onChange={(e) => setServicio6({...servicio6, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
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
                                                <button onClick={()=> SubirImagen(6)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio6.ServDescrip}
                                                onChange={(e) => setServicio6({...servicio6, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(6)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            <div>
                                <button className='btn-bloque' onClick={()=>setBloque3(!bloque3)} type='button'>
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
                                                placeholder='Título de imagen'
                                                value={servicio7.ServSubTitulo}
                                                onChange={(e) => setServicio7({...servicio7, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
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
                                                <button onClick={()=> SubirImagen(7)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio7.ServDescrip}
                                                onChange={(e) => setServicio7({...servicio7, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(7)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            <div>
                                <button className='btn-bloque' onClick={()=>setBloque4(!bloque4)} type='button'>
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
                                                placeholder='Título de imagen'
                                                value={servicio8.ServSubTitulo}
                                                onChange={(e) => setServicio8({...servicio8, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio8.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio8.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(8)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio8.ServDescrip}
                                                onChange={(e) => setServicio8({...servicio8, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(8)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            
                            { !datosGenerales.Premium &&
                                <>
                                    <p>
                                        Al adquirir el plan Premium ******** <br/> puedes agregar hasta 10 productos ó servicios
                                    </p>

                                    <a href="" className='btn-premium'>
                                        ¡Adquiérelo aquí!
                                    </a>
                                </>
                            }



                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque5(!bloque5)}
                                >
                                    Bloque de servicio No. 5
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque5 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio9.ServSubTitulo}
                                                onChange={(e) => setServicio9({...servicio9, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio9.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio9.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(9)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio9.ServDescrip}
                                                onChange={(e) => setServicio9({...servicio9, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(9)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque6(!bloque6)}
                                >
                                    Bloque de servicio No. 6
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque6 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio10.ServSubTitulo}
                                                onChange={(e) => setServicio10({...servicio10, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio10.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio10.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(10)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio10.ServDescrip}
                                                onChange={(e) => setServicio10({...servicio10, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(10)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque7(!bloque7)}
                                >
                                    Bloque de servicio No. 7
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque7 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio11.ServSubTitulo}
                                                onChange={(e) => setServicio11({...servicio11, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio11.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio11.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(11)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio11.ServDescrip}
                                                onChange={(e) => setServicio11({...servicio11, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(11)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque8(!bloque8)}
                                >
                                    Bloque de servicio No. 8
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque8 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio12.ServSubTitulo}
                                                onChange={(e) => setServicio12({...servicio12, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio12.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio12.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(12)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio12.ServDescrip}
                                                onChange={(e) => setServicio12({...servicio12, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(12)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque9(!bloque9)}
                                >
                                    Bloque de servicio No. 9
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque9 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio13.ServSubTitulo}
                                                onChange={(e) => setServicio13({...servicio13, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio13.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio13.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(13)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio13.ServDescrip}
                                                onChange={(e) => setServicio13({...servicio13, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(13)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div>
                                <button 
                                    className={`btn-bloque ${!datosGenerales.Premium ? 'premium-disabled' : ''}`} 
                                    type='button'
                                    onClick={()=>setBloque10(!bloque10)}
                                >
                                    Bloque de servicio No. 10
                                    <div>
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    { bloque10 &&
                                        <motion.div 
                                            className='cuerpo-bloque'
                                            initial= "closed"
                                            animate= "open"
                                            exit= "closed"
                                            variants={acordeonVariantes}
                                        >
                                            <input 
                                                type="text" 
                                                placeholder='Título de imagen'
                                                value={servicio14.ServSubTitulo}
                                                onChange={(e) => setServicio14({...servicio14, ServSubTitulo: e.target.value })}
                                                onBlur={handleBlur}
                                            />
                                            { servicio14.ServImg ?
                                                <img 
                                                    src={`https://tarjet.site/imagenes/servicios/${servicio14.ServImg}`} 
                                                    className='imagen-servicio'
                                                />
                                            :
                                                <div className='mostrar-imagen'>
                                                    <img src={iconoSubirImagen} />
                                                </div>
                                            }
                                            <div className='btn-subir'>
                                                <button onClick={()=> SubirImagen(14)} type='button'>
                                                    Subir imagen
                                                </button>
                                            </div>
                                            <textarea 
                                                placeholder='Descripción de la foto (hasta 300 caracteres)' 
                                                maxLength={300}
                                                value={servicio14.ServDescrip}
                                                onChange={(e) => setServicio14({...servicio14, ServDescrip: DOMPurify.sanitize(e.target.value, {ALLOWED_TAGS: []}) })}
                                                onBlur={handleBlur}
                                            >
                                            </textarea>
                                            <div className='borrar'>
                                                <button onClick={()=>BorrarBloque(14)} type='button'>
                                                    Borrar contenido de bloque
                                                </button>
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            {/* <div className='Btnterminos'>
                                <input type="checkbox" id="termino" />
                                <label htmlFor='termino'>
                                    Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span>
                                </label>
                            </div> */}

                            <button className='btn-guardar' type='submit'>
                                Guardar ó actualizar información
                            </button>

                            <div className='pasos'>
                                <button onClick={btnRegresarPaso2} type='button'>
                                    Regresar a paso 2
                                </button>
                            </div>

                            <div className='btn-regresarr'>
                                <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                                    Regresar a perfil (x)
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
}

export default DiseñaTarjetSite;