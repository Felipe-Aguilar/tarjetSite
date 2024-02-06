import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BusquedaAlias, ObtenerSegmentos } from '../contextos/BusquedaDirectorio';
import { DatosEditaPerfil, ActualizarPerfil, ActualizarTarjetaPerfil, ActualizarPerfil4 } from '../contextos/EditaPerfil';
import { CodigoPostal } from '../contextos/CodigoPostal';
import { ColeccionTarjeta } from '../contextos/Colecciones';
import Slider from 'react-slick';
import CargarImagen from './CargarImagen';
import PopCorrecto from './PopCorrecto';
import _ from 'lodash';

import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';
import perfilTemporal from '../../assets/perfiltemporal.jpg';
import ilustracionPersonalizada from '../../assets/ilustracion-personalizada.png';
import Previsualizar from './Previsualizar';
import iconoMiPerfil from '../../assets/icono-perfil-02.svg';
import { ListadoPrefijos } from '../contextos/PrefijosListado';
import Mapa from './Mapa';


const DiseñaTarjet = () => {

    const { usuId } = useParams();
    const [datosSesion, setDatosSesion] = useState([]);

    const [segmentos, setSegmentos] = useState([]);
    const [ datosGenerales, setDatosGenerales ] = useState([]);

    const [cargarImagen, setCargarImagen] = useState(false);
    const [previsualizar, setPrevisualizar] = useState(false);
    const [tipoPrevisualizar, setTipoPrevisualizar] = useState('');

    // Datos Formulario
    const [nombre, setNombre] = useState('');
    const [appPat, setAppPat] = useState('');
    const [appMat, setAppMat] = useState('');
    const [cargo, setCargo] = useState('');
    const [calle, setCalle] = useState('');
    const [numeroExterior, setNumeroExterior] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [colonia, setColonia] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [directorio, setDirectorio] = useState(false);
    const [calificacion, setCalificacion] = useState(false);
    const [comentarios, setComentarios] = useState(false);
    const [actividad, setActividad] = useState('');
    const [consultaCP, setConsultaCP] = useState([]);
    const [tituloDes, setTituloDes] = useState('Lic');
    const [titulo, setTitulo] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [nombreNegocio, setNombreNegocio] = useState('');

    const [error, setError] = useState(false);
    const [errorActividad, setErrorActividad] = useState(false);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorAlias, setErrorAlias] = useState(false);
    const [error2, setError2] = useState(false);

    // Selecciona actividad
    const [buscaActividad, setBuscaActividad] = useState('');
    // Filtro de la actividad
    const [filtroSegmento, setFiltroSegmento] = useState([]);

    
    // Slider y colecciones
    const [colecciones, setColecciones] = useState([]);
    const [coleccionesGratis, setColeccionesGratis] = useState([]);
    const [coleccionesPremium, setColeccionesPremium] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentFondo, setCurrentFondo] = useState('TarjetaF_1.webp');
    const [currentFondo2, setCurrentFondo2] = useState('TFPrem1.webp');

    const [optionColecciones, setOptionColecciones] = useState('Gratuitas');

    // Listado de prefijos
    const [listadoPrefijos, setListadoPrefijos] = useState([]);

    const timestamp = new Date().getTime();

    useEffect(()=>{

        const datosSesion = JSON.parse(localStorage.getItem('DatosSesion'));
        setDatosSesion(datosSesion);
        
        const usuarioID = JSON.parse(localStorage.getItem('IdDatosSesion'));

        // Obtiene segmento para TUS DATOS
        const selecActividad = async () => {
            const respuesta = await ObtenerSegmentos('');
            
            // setSegmentos(respuesta.ListSegmentos);
            setSegmentos(_.sortBy(respuesta.ListSegmentos, 'Descripcion'));
        }

        // Obtiene datos generales
        const DatosGenerales = async () => {
            const respuesta = await DatosEditaPerfil(usuarioID.usuId);
            setDatosGenerales(respuesta);

            // Datos
            setNombre(respuesta.Nom);
            setAppPat(respuesta.AppP);
            setAppMat(respuesta.AppM);
            setCargo(respuesta.Cargo);
            setCalle(respuesta.Calle);
            setNumeroExterior(respuesta.NumExt);
            setCodigoPostal(respuesta.CodP);
            setEstado(respuesta.Estado);
            setMunicipio(respuesta.Municip);
            setColonia(respuesta.Colonia);
            setActividad(respuesta.Lev3Desc);
            setNombreUsuario(respuesta.Alias);
            setNombreNegocio(respuesta.NomNegocio);
            if (respuesta.Titulo === '') {
                setTituloDes('Lic');
            } else{
                setTituloDes(respuesta.Titulo);
            }

            if (respuesta.CodP) {
                const responseCP = await CodigoPostal(respuesta.CodP);
                setConsultaCP(responseCP.ListColonias);
            }

            // Filtro de Busca actividad
            setBuscaActividad(respuesta.Lev3Desc);
            if (respuesta.Lev3Desc !== '') {
                const responseSegmento = await ObtenerSegmentos(respuesta.Lev3Desc);
                setFiltroSegmento(responseSegmento.ListSegmentos[0]);
            }


            // CheckButtons
            if (respuesta.PublicPriva === 0) {
                setDirectorio(true);
            }
            if (respuesta.PermitirCalif === 0) {
                setCalificacion(true);
            }
            if (respuesta.PermitirComments === 0) {
                setComentarios(true);
            }
            if (respuesta.VerUbicacion === 1) {
                setMostrar(true);
            }

            const response2 = await ListadoPrefijos();
            setListadoPrefijos(response2.sdtTitulos);

            // Ver actual si ya tiene
            if (respuesta.RegistroTarjet) {
                setOptionColecciones('Ver actual');
            }
        }

        // Comprobar Colecciones de tarjetas
        const Colecciones = async () => {
            const response = await ColeccionTarjeta();
            setColecciones(response.ListTarjetas);
            setCurrentFondo(response.ListTarjetas[0].TarjetaImagen);
            
            setColeccionesGratis(response.ListTarjetas.filter(coleccion => coleccion.TarjetaPremium === 0));
            setColeccionesPremium(response.ListTarjetas.filter(coleccion => coleccion.TarjetaPremium === 1));
        }

        // Comprobar si es la sesión
        if (localStorage.UsuarioSesion && atob(usuId) === datosSesion.UsuToken) {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            selecActividad();
            DatosGenerales();
            Colecciones();
        }
        else{
            navigate('/login');
        } 

    },[]);

    const navigate = useNavigate();

    const [diseño, setDiseño] = useState(false);
    const [datos, setDatos] = useState(true);

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

    const settingsSlider = {
        arrows: true,
        infinite: true,
        speed: 500,
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

            const objectImagen = colecciones.find(coleccion => coleccion.TarjetaImagen === `TarjetaF_${current+1}.webp`);
            setCurrentFondo(objectImagen);

            const objectImagen2 = colecciones.find(coleccion => coleccion.TarjetaImagen === `TFPrem${current+1}.webp`);
            if (objectImagen2) {
                setCurrentFondo2(objectImagen2);
            }
        },
    }

    const btnDiseño = () => {
        setDiseño(true);
        setDatos(false);
    }

    const btnDatos = () => {
        setDatos(true);
        setDiseño(false);
    }

    const actividadOnChange = async (e) => {
        setBuscaActividad(e.target.value);

        if (buscaActividad !== '' || e.target.value !== '') {
            
            const response = await ObtenerSegmentos(e.target.value);
            setFiltroSegmento(response.ListSegmentos[0]);
        }
    }

    // Sacar pop de datos actualizados
    const [popActualiza, setPopActualiza] = useState(false);

    // Guardar TU DISEÑO
    const GuardarTarjeta1 = async (e) => {
        
        e.preventDefault();

        // if (sameAlias) {
        //     setError(true);
            
        //     if (sameAlias.Token !== atob(usuId)) {
        //         setErrorAlias(true);
        //         return;

        //     } else{
        //         setErrorAlias(false);
        //     }
        // }

        // if (buscaActividad === '' || nombreUsuario === '') {
        //     setError(true);

        //     if (buscaActividad === '') {
        //         setErrorActividad(true);
        //     }else{
        //         setErrorActividad(false);
        //     }

        //     if (nombreUsuario === '') {
        //         setErrorNombre(true);
        //     }else{
        //         setErrorNombre(false);
        //     }

        //     return;
        // }else{
        //     setError(false);
        // }

        const datosFormulario = {
            "Nom": nombre,
            "AppP": appPat,
            "AppM": appMat,
            "Cargo": cargo,
            "Lev1Id": buscaActividad ? filtroSegmento.Nivel1Id : '',
            "Lev1Desc": buscaActividad ? filtroSegmento.Nivel1Desc : '',
            "Lev2Id": buscaActividad ? filtroSegmento.Nivel2Id : '',
            "Lev2Desc": buscaActividad ? filtroSegmento.Nivel2Desc : '',
            "Lev3Id": buscaActividad ? filtroSegmento.Nivel3Id : '',
            "Lev3Desc": buscaActividad,
            "PublicPriva": directorio ? 0 : 1,
            "PermitirCalif": calificacion ? 0 : 1,
            "PermitirComments": comentarios ? 0 : 1,
            "Calle": calle,
            "CodP": codigoPostal,
            "Municip": municipio,
            "Colonia": colonia,
            "Titulo": tituloDes,
            "Alias": nombreUsuario,
            "NomNegocio": nombreNegocio
        }

        await ActualizarPerfil(datosGenerales, datosFormulario);
        // ESTO SE COMENTÓ POR EL onBlur
        // setPopActualiza(true);

        // setTimeout(()=>{
        //     setPopActualiza(false);
            
        //     setTimeout(()=>{
        //         window.location.reload();
        //     }, 500);

        // }, 3500);
    }

    // Guardar TUS DATOS
    const GuardarTarjeta2 = async (e) => {

        e.preventDefault();

        if (sameAlias) {
            setError(true);
            
            if (sameAlias.Token !== atob(usuId)) {
                setErrorAlias(true);
                return;

            } else{
                setErrorAlias(false);
            }
        }

        if (buscaActividad === '' || nombreUsuario === '') {
            setError(true);

            if (buscaActividad === '') {
                setErrorActividad(true);
            }else{
                setErrorActividad(false);
            }

            if (nombreUsuario === '') {
                setErrorNombre(true);
            }else{
                setErrorNombre(false);
            }

            return;
        }else{
            setError(false);
        }

        const datosFormulario = {
            "Nom": nombre,
            "AppP": appPat,
            "AppM": appMat,
            "Cargo": cargo,
            "Lev1Id": buscaActividad ? filtroSegmento.Nivel1Id : '',
            "Lev1Desc": buscaActividad ? filtroSegmento.Nivel1Desc : '',
            "Lev2Id": buscaActividad ? filtroSegmento.Nivel2Id : '',
            "Lev2Desc": buscaActividad ? filtroSegmento.Nivel2Desc : '',
            "Lev3Id": buscaActividad ? filtroSegmento.Nivel3Id : '',
            "Lev3Desc": buscaActividad,
            "PublicPriva": directorio ? 0 : 1,
            "PermitirCalif": calificacion ? 0 : 1,
            "PermitirComments": comentarios ? 0 : 1,
            "Calle": calle,
            "NumExt": numeroExterior,
            "Estado": estado,
            "CodP": codigoPostal,
            "Municip": municipio,
            "Colonia": colonia,
            "Titulo": tituloDes,
            "Alias": nombreUsuario,
            "NomNegocio": nombreNegocio,
            "VerUbicacion": mostar ? 1 : 0,
        }

        await ActualizarPerfil(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            setTimeout(()=>{

                setDatos(false);
                setDiseño(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });

            }, 500);

        }, 3500);
    }

    const CerrarCarga = () => {
        setCargarImagen(false);
    }

    const CerrarPrevisualizar = (type) => {
        setPrevisualizar(false);
        
        if (type) {
            setOptionColecciones('Ver actual');
        }
    }

    // Asignar Estado, ciudad, delegación, etc.
    const onChangeCodigoPostal = async (e) => {

        const codigo = e.target.value.replace(/\D/g, '');
        setCodigoPostal(codigo);

        if (codigo.length === 5) {
            const responseCP = await CodigoPostal(codigo);
            setConsultaCP(responseCP.ListColonias);

            setEstado(responseCP.ListColonias[0]?.CPEstado);
            setMunicipio(responseCP.ListColonias[0]?.CPMunicipio);

        }else{
            setConsultaCP([]);
            setEstado('');
            setMunicipio('');
        }
    }

    // Comprobar NOMBRE DE USUARIO
    const [sameAlias, setSameAlias] = useState('');

    const onChangeNombreUsuario = async (e) => {
        
        const pattern = /^[a-zA-Z0-9\s]*$/;
        
        if (pattern.test(e.target.value.trim())) {
            setNombreUsuario(e.target.value.trim());     
            
            const response = await BusquedaAlias(e.target.value.trim());

            const mismoAlias = response.ListTarjets.find(respuesta => respuesta.Alias === e.target.value.trim());

            if ( mismoAlias !== undefined ) {
                setSameAlias(mismoAlias);
            }else{
                setSameAlias('');
            }
        }
    }

    const GuardarImagenTarjeta = async (tipo, e) => {
        e.preventDefault();

        const datosFormulario = {
            "ImgTarFrente": currentFondo2.TarjetaImagen
        }

        await ActualizarTarjetaPerfil(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            setTimeout(()=>{
                window.location.reload();
            },1000);
            
        }, 3500);
    }

    // Previsualizar, gratis o premium
    const onClickPrevisualizar = (tipo) => {
        setTipoPrevisualizar(tipo);
        setPrevisualizar(true);
    }

    // OnHandleSubmit
    const onHandleSubmit = async () => {
        const datosFormulario = {
            "Nom": nombre,
            "AppP": appPat,
            "AppM": appMat,
            // "Cargo": cargo,
            // "Lev1Id": buscaActividad ? filtroSegmento.Nivel1Id : '',
            // "Lev1Desc": buscaActividad ? filtroSegmento.Nivel1Desc : '',
            // "Lev2Id": buscaActividad ? filtroSegmento.Nivel2Id : '',
            // "Lev2Desc": buscaActividad ? filtroSegmento.Nivel2Desc : '',
            // "Lev3Id": buscaActividad ? filtroSegmento.Nivel3Id : '',
            // "Lev3Desc": buscaActividad,
            "PublicPriva": directorio ? 0 : 1,
            "PermitirCalif": calificacion ? 0 : 1,
            "PermitirComments": comentarios ? 0 : 1,
            "Calle": calle,
            "NumExt": numeroExterior,
            "Estado": estado,
            "CodP": codigoPostal,
            "Municip": municipio,
            "Colonia": colonia,
            "Titulo": tituloDes,
            // "Alias": nombreUsuario,
            "NomNegocio": nombreNegocio
        }

        await ActualizarPerfil4(datosGenerales, datosFormulario);
    }

    useEffect(()=>{
        if (tituloDes === 'Empr') {
            setAppPat('');
            setAppMat('');
        }
    },[tituloDes]);

// Mostrar ubicacion en el mapa
    const[mostar, setMostrar] = useState(false);

    const onChangeUbicacion = () => {

        if (calle && numeroExterior && codigoPostal) {
            setMostrar(!mostar);
        }else{
            setMostrar(false);
        }
    }

    return ( 
        <div className='backgroun-Green'>
            <div className="container-fluid diseñaTarjet background-image">

                { popActualiza &&
                    <PopCorrecto />
                }
                
                <div className="img-banner">
                    <img src={ilustracion} />
                </div>

                <div className='texto'>
                    <h1>Gracias por pertenecer a esta gran comunidad</h1>
                    {/* <h5>
                        Nos alegra mucho que estés a punto de <b>crear tu Tarjet.</b>
                    </h5> */}
                    <h5 className='orange'>
                        <b>La información de esta sección te ayudará a establecer relaciones comerciales con otros usuarios tarjet en nuestro directorio empresarial</b>
                    </h5>
                </div>

                <div className='buttonMiperfil'>
                    <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
                        <img src={iconoMiPerfil} alt="Icono ir a mi perfil" />
                        Mi perfil
                    </button>
                </div>

                <div className='DiseñaTuTarjet'>
                    <div className='texto'>
                        <h2>Diseña tu tarjet</h2>
                    </div>
                </div>

                <div className='barra'>
                    <div className='cuerpo'>
                        
                        <button 
                            className={`btn-1 ${datos ? 'active' : ''}`} 
                            onClick={btnDatos}
                        >
                            <div>
                                <span>1</span>
                            </div>
                            Tus datos
                        </button>


                        <button 
                            className={`${diseño ? 'active' : ''}`}
                            onClick={btnDiseño}
                        >
                            <div>
                                <span>2</span>
                            </div>
                            Diseña tu tarjeta
                        </button>

                    </div>
                </div>

                <div className='separador'>
                    <hr/>
                </div>

                { diseño &&
                    <div className='colecciones'>

                        <div className='instrucciones'>
                            <h6>Esta imagen se mostrará en el directorio</h6>

                            <span>Instrucciones</span>

                            <div className='pasos'>
                                <div className='paso'>
                                    <i className="bi bi-1-circle-fill"></i>
                                    <p><span>Escoge tu estilo de tarjeta,</span> puedes elegir una gratuita, adquirir premium ó solicitar un diseño personal.</p>
                                </div>

                                <div className='paso'>
                                    <i className="bi bi-2-circle-fill"></i>
                                    <p><span>Escribe el nombre y servicio con el que te presentarás.</span></p>
                                </div>

                                <div className='paso'>
                                    <i className="bi bi-3-circle-fill"></i>
                                    <p><span>Previsualiza tu tarjeta.</span> <br />
                                        Aquí puedes acomodar tu nombre y servicio en la zona que desees de la tarjeta.
                                    </p>
                                </div>

                                <div className='paso'>
                                    <i className="bi bi-4-circle-fill"></i>
                                    <p><span>Guarda la tarjeta.</span></p>
                                </div>
                            </div>
                            <h6 className='h6-ready'>Listo, ya puedes darle estilo a tu portada</h6>
                        </div>

                        <h2>Colecciones</h2>
                        
                        <div className='opciones'>
                            <button 
                                className={`primer ${optionColecciones === 'Gratuitas' ? 'activeOption' : ''}`}
                                onClick={(e)=>setOptionColecciones(e.target.innerText)}
                                disabled={datosGenerales.Tipo === 'EMPR' ? true : false}
                            >
                                <i className="bi bi-caret-down-fill"></i>
                                Gratuitas
                            </button>
                            <button
                                className={optionColecciones === 'Premium' ? 'activeOption' : ''}
                                onClick={(e)=>setOptionColecciones(e.target.innerText)}
                                disabled={datosGenerales.Tipo === 'EMPR' ? true : false}
                            >
                                <i className="bi bi-caret-down-fill"></i>
                                Premium
                            </button>
                            <button
                                className={optionColecciones === 'Ver actual' ? 'activeOption' : ''}
                                onClick={(e)=>setOptionColecciones(e.target.innerText)}
                            >
                                <i className="bi bi-caret-down-fill"></i>
                                Ver actual
                            </button>
                        </div>

                        { optionColecciones === 'Gratuitas' &&
                            <div className='gratuitas'>

                                <Slider {...settingsSlider}>
                                    { colecciones.map((coleccion)=>(
                                        coleccion.TarjetaPremium === 0 &&
                                        <div className='tarjetaGratuitas' key={coleccion.ColeccionId}>
                                            <img src={`https://tarjet.site/imagenes/tarjetas_frente/${coleccion.TarjetaImagen}`}/>
                                        </div>
                                    ))
                                    }
                                </Slider>

                                <div className='info'>
                                    <div className='modelos w-100'>
                                        <p>
                                            {`${currentSlide+1} de ${coleccionesGratis.length} modelos gratuitos`}
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

                                <div className='formulario'>
                                    {/* <div className='logotipo'>
                                        <div className='img-perfil'>
                                            { datosGenerales.ImgFoto ?
                                                // <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}`} />
                                                <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}?timestamp=${timestamp}`} />
                                            :
                                                <img src={perfilTemporal} />
                                            }
                                        </div>
                                        <button className='cargar-imagen' onClick={()=>setCargarImagen(true)}>
                                            Logotipo <span>cargar ó cambiar imagen</span>
                                        </button>
                                    </div>

                                    { cargarImagen &&
                                        <CargarImagen onBotonClick={CerrarCarga} tipoImagen={"PERF"}/>
                                    } */}

                                    <div className='form'>
                                        <form onSubmit={GuardarTarjeta1}>
                                            
                                            <input 
                                                type="text" 
                                                placeholder='Texto debajo de tu nombre (30 caracteres)' maxLength={30}
                                                value={cargo}
                                                onChange={(e)=>setCargo(e.target.value)}
                                                onBlur={GuardarTarjeta1}
                                            />

                                            {/* { error && 
                                                <div className='error-message'>
                                                    { buscaActividad === '' &&
                                                        <p>
                                                            Por favor ingrese una actividad
                                                        </p>
                                                    }
                                                    { nombreUsuario === '' &&
                                                        <p>
                                                            Por favor ingrese nombre de usuario
                                                        </p>
                                                    }
                                                    {  errorAlias &&
                                                        <p>
                                                            Nombre de usuario ya está en uso, por favor intente con otro.
                                                        </p>
                                                    }
                                                </div>
                                            } */}

                                            

                                            <div className='buttons'>
                                                <div className='primer'>
                                                    <button 
                                                        onClick={()=>onClickPrevisualizar('gratis')} 
                                                        type='button'
                                                        disabled={cargo ? false : true}
                                                    >
                                                        Previsualizar
                                                    </button>
                                                </div>
                                                {/* <div className='segundo'>
                                                    <button type='submit'>
                                                        Guardar Tarjeta
                                                    </button>
                                                </div> */}
                                            </div>

                                            <div className='regresar'>
                                                <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)}>
                                                    Regresar a perfil (x)
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }

                        { previsualizar &&
                            <Previsualizar 
                                onClickButton={CerrarPrevisualizar} 
                                datosGenerales={datosGenerales}
                                tipoPrevisualizar={tipoPrevisualizar}
                                currentFondo={currentFondo}
                                currentFondo2={currentFondo2}
                                nombreCompleto = {`${nombre} ${appPat} ${appMat}`}
                                cargo = { cargo }
                            />
                        }

                        { optionColecciones === 'Premium' &&
                            // <div className='premium'>
                            //     <div className='encabezado'>
                            //         <p>
                            //             En el plan Premium ****** <br/>
                            //             puedes elegir cualquier tarjeta
                            //         </p>
                            //         <button>
                            //             ¡Adquiérelo aquí!
                            //         </button>
                            //     </div>

                            //     <div className='tarjetasPremium'>
                            //         <img src={tarjetaGenerica} />
                            //     </div>

                            //     <div className='sliderpremium'>
                            //         <Slider {...settings}>
                            //             <div className='paquete'>
                            //                 <p>
                            //                     Nombremodelotarjet <br/>
                            //                     <span>Código TD-091</span>
                            //                 </p>
                            //                 <hr/>
                            //                 <div className='compra'>
                            //                     <div className='precio'>
                            //                         <p>$000.00 mxm</p>
                            //                     </div>
                            //                     <div className='btncompra'>
                            //                         <button>
                            //                             Comprar
                            //                         </button>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //             <div className='paquete'>
                            //                 <p>
                            //                     Nombremodelotarjet <br/>
                            //                     <span>Código TD-091</span>
                            //                 </p>
                            //                 <hr/>
                            //                 <div className='compra'>
                            //                     <div className='precio'>
                            //                         <p>Premium</p>
                            //                     </div>
                            //                     <div className='btncompra'>
                            //                         <button>
                            //                             Seleccionar
                            //                         </button>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </Slider>
                            //     </div>

                            //     <div className='desc'>
                            //         <p>
                            //             ó puedes comprar individualmente la <br/> tarjeta que te guste, ¡Conócelas!
                            //         </p>
                            //     </div>

                            //     <div className='buttons-rows'>
                            //         <div className='rowbuttons'>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         1
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         10
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //         </div>
                            //         <div className='rowbuttons'>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         1
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         10
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //         </div>
                            //         <div className='rowbuttons'>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         1
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         10
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //         </div>
                            //         <div className='rowbuttons'>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         1
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //             <button>
                            //                 <div>
                            //                     <p>
                            //                         10
                            //                     </p>
                            //                 </div>
                            //                 Ejecutivas
                            //             </button>
                            //         </div>
                            //     </div>

                            //     <div className='regresar'>
                            //         <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                            //             Regresar a perfil (x)
                            //         </button>
                            //     </div>
                            // </div>
                            <div className='gratuitas'>

                                <Slider {...settingsSlider}>
                                    { colecciones.map((coleccion)=>(
                                        coleccion.TarjetaPremium === 1 &&
                                        <div className='tarjetaGratuitas' key={coleccion.ColeccionId}>
                                            <img src={`https://tarjet.site/imagenes/tarjetas_frente/premium/${coleccion.TarjetaImagen}`}/>
                                        </div>
                                    ))
                                    }
                                </Slider>

                                <div className='info'>
                                    <div className='modelos w-100'>
                                        <p>
                                            {`${currentSlide+1} de ${coleccionesPremium.length} modelos gratuitos`}
                                        </p>
                                    </div>
                                </div>

                                <div className='buttons-confirm'>

                                    <input 
                                        type="text" 
                                        placeholder='Texto debajo de tu nombre (30 caracteres)' maxLength={30}
                                        value={cargo}
                                        onChange={(e)=>setCargo(e.target.value)}
                                        onBlur={GuardarTarjeta1}
                                    />

                                    <button 
                                        type='button' 
                                        className={`previsualizarBtn`} 
                                        onClick={()=>onClickPrevisualizar('premium')}
                                        disabled={datosGenerales.Premium ? false : true}
                                    >
                                        Previsualizar
                                    </button>
                                    
                                    {/* <button 
                                        className={`guardar`}
                                        onClick={(e)=>GuardarImagenTarjeta('premium', e)}
                                        disabled={datosGenerales.Premium ? false : true}
                                    >
                                        Guardar imagen
                                    </button> */}
                                </div>

                                <div className='regresar'>
                                    <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                                        Regresar a perfil (x)
                                    </button>
                                </div>
                            </div>
                        }

                        { optionColecciones === 'Ver actual' &&
                            <div className='personalizada'>

                                <p>Tu tarjeta personalizada actual</p>

                                { (!datosGenerales.ImgTarFrente || !(datosGenerales.ImgTarFrente.slice(0,5) === 'TFRE_')) &&
                                    <p>Aún no cuentas con una tarjeta personalizada, selecciona una editando tus datos.</p>
                                }
                                
                                { datosGenerales.ImgTarFrente.slice(0,5) === 'TFRE_' &&
                                    <img 
                                        src={`https://tarjet.site/imagenes/tarjetas_frente_usuarios/${datosGenerales.ImgTarFrente}`} 
                                        alt="Tu tarjeta personalizada" 
                                    />
                                }

                                <div className='regresar'>
                                    <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                                        Regresar a perfil (x)
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                }

                { datos &&
                    <div className='tusDatos'>
                        <h6>Esta información se mostrará en el directorio</h6>

                        <div className='formulario'>

                            <div className='logotipo'>
                                <div className='img-perfil'>
                                    { datosGenerales.ImgFoto ?
                                        <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}?timestamp=${timestamp}`} />
                                    :
                                        <img src={perfilTemporal} />
                                    }
                                </div>
                                <button className='cargar-imagen' onClick={()=>setCargarImagen(true)}>
                                    Imagen ó Logotipo <br/> <span>cargar ó cambiar imagen</span>
                                </button>
                            </div>

                            { cargarImagen &&
                                <CargarImagen onBotonClick={CerrarCarga} tipoImagen={"PERF"}/>
                            }

                            <div className='prefijo'>
                                <p>Prefijo</p>
                            </div>

                            <form onSubmit={GuardarTarjeta2}>

                                <div className='select'>
                                    <div>
                                        <select 
                                            value={tituloDes} 
                                            onChange={(e)=>setTituloDes(e.target.value)} 
                                            onBlur={onHandleSubmit}
                                            disabled={datosGenerales.Tipo === 'EMPR' ? true : false}
                                        >
                                            { listadoPrefijos.map((prefijo)=>(
                                                <option value={prefijo.TituloPersonaId} key={prefijo.TituloPersonaId}>{prefijo.TituloPersonaDesc}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder={`Empresa ó tu Nombre (${tituloDes === 'Empr' ? '30' : '10'} caracteres)`}
                                        maxLength={ tituloDes === 'Empr' ? 30 : 10}
                                        value={nombre}
                                        onChange={(e)=>setNombre(e.target.value)}
                                        onBlur={onHandleSubmit}
                                    />
                                </div>

                                <div className='apellidos'>
                                    <input 
                                        type="text" 
                                        maxLength={10} 
                                        placeholder='Apellido Paterno (10 caracteres)'
                                        value={ tituloDes === 'Empr' ? '' : appPat}
                                        onChange={(e)=>setAppPat(e.target.value)}
                                        disabled={tituloDes === 'Empr' ? true : false}
                                        onBlur={onHandleSubmit}
                                    />
                                    <input 
                                        type="text" 
                                        maxLength={40} 
                                        placeholder='Apellido Materno (10 caracteres)'
                                        value={ tituloDes === 'Empr' ? '' : appMat}
                                        onChange={(e)=>setAppMat(e.target.value)}
                                        disabled={tituloDes === 'Empr' ? true : false}
                                        onBlur={onHandleSubmit}
                                    />
                                </div>
                                
                                <div className='d-flex align-items-center' style={{gap: '10px'}}>
                                    <input 
                                        type="text" 
                                        placeholder='Nombre de usuario' 
                                        maxLength={15}
                                        value={nombreUsuario}
                                        onChange={onChangeNombreUsuario}
                                        className={`input-username ${errorAlias ? 'input-error' : ''}`}
                                    />
                                    
                                    <p className='text-usuario'>
                                        (con este usuario te podrán encontrar más fácil en el directorio)
                                    </p>
                                </div>

                                <input 
                                    type="text" 
                                    placeholder='Nombre del negocio (30 caracteres)'
                                    maxLength={30}
                                    value={nombreNegocio}
                                    onChange={(e)=>setNombreNegocio(e.target.value)}
                                    onBlur={onHandleSubmit}
                                />

                                <input 
                                    type="text" 
                                    placeholder='Buscar actividad' 
                                    className={`dataList ${errorActividad ? 'input-error' : ''}`}
                                    maxLength={80}
                                    value={buscaActividad}
                                    style={{textTransform: 'uppercase'}}
                                    onChange={actividadOnChange}
                                    list='actividad-resultados'
                                />

                                <datalist id='actividad-resultados' className='dataList'>
                                    { segmentos.map((segmento)=>(
                                        <option value={segmento.Descripcion} key={segmento.Nivel3Id}></option>
                                    ))
                                    }
                                </datalist>

                                <select value={buscaActividad} onChange={actividadOnChange} className='select-datalist'>
                                    { segmentos.map((segmento)=>(
                                        <option value={segmento.Descripcion} key={segmento.Nivel3Id}>
                                            {segmento.Descripcion}
                                        </option>
                                    ))
                                    }
                                </select>

                                <a href='' target='_blank' style={{marginBottom: '15px'}}>
                                    Si no aparece tu área, solicítala aquí, con tu apoyo nos ayudas a aprender.
                                </a>

                                

                                <input 
                                    type="text" 
                                    // readOnly
                                    disabled
                                    placeholder='Categoría*'
                                    value={buscaActividad === filtroSegmento?.Descripcion ? filtroSegmento.Nivel1Desc : ''}
                                    // style={{color: '#8e8e8e'}}
                                />

                                <input 
                                    type="text" 
                                    // readOnly
                                    disabled
                                    placeholder='Categoría*'
                                    value={buscaActividad === filtroSegmento?.Descripcion ? filtroSegmento.Nivel2Desc : ''}
                                    // style={{color: '#8e8e8e'}}
                                />

                                <h6>Ubicación</h6>

                                <input 
                                    type="text" 
                                    placeholder='Calle, privada, avenida'
                                    value={calle}
                                    onChange={(e)=>setCalle(e.target.value)}
                                    onBlur={onHandleSubmit}
                                />

                                <div className='twoInput'>
                                    <div className='w-50'>
                                        <input 
                                            type="text" 
                                            placeholder='Número'
                                            value={numeroExterior}
                                            onChange={(e)=>setNumeroExterior(e.target.value)}
                                            onBlur={onHandleSubmit}
                                        />
                                    </div>
                                    <div className='w-50'>
                                        <input 
                                            type="text" 
                                            maxLength={5}
                                            placeholder='C.P'
                                            value={codigoPostal}
                                            onChange={onChangeCodigoPostal}
                                            onBlur={onHandleSubmit}
                                        />
                                    </div>
                                </div>

                                <input 
                                    type="text" 
                                    readOnly
                                    placeholder='Estado'
                                    value={estado}
                                />

                                <input 
                                    type="text" 
                                    readOnly
                                    placeholder='Municipio'
                                    value={municipio}
                                />

                                {/* <select name="" id="">
                                    <option value="categiria" key="1">Delegación *</option>
                                </select> */}

                                <select 
                                    value={colonia} 
                                    onChange={(e)=>setColonia(e.target.value)}
                                    className={error2 ? 'input-error' : ''}
                                    onBlur={onHandleSubmit}
                                >
                                    <option value="categoria" key="1">Colonia *</option>


                                    { consultaCP.map((coloniaa, index)=>(
                                        <option 
                                            key={index} 
                                            value={coloniaa.CPColonia}
                                            selected
                                        >
                                            {coloniaa.CPColonia}
                                        </option>
                                    ))
                                    }
                                </select>

                                {/* <input 
                                    type="text" 
                                    placeholder='Colonia'
                                    value={colonia}
                                    onChange={(e)=>setColonia(e.target.value)}
                                /> */}

                                <div className='check'>
                                    <input 
                                        type="checkbox" 
                                        id='mostrarEmpresa' 
                                        onChange={onChangeUbicacion} 
                                        checked={mostar}
                                    />
                                    <label htmlFor="mostrarEmpresa">Mostrar mi empresa en el mapa</label>
                                </div>

                                { mostar &&
                                    <Mapa address={`${calle} ${numeroExterior}, ${codigoPostal}, ${municipio}`}/> 
                                }

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

                                <button className='btn-amarillo' type='button'>
                                    Necesitas ser encontrado en mayor rango, <span>inscríbete a Premium, tu tarjeta sin límites.</span>
                                </button>

                                <div className='accept'>
                                    <div className='switches'>
                                        <label className="switch mb-0">
                                            <input type="checkbox" checked={directorio} onChange={()=>setDirectorio(!directorio)} onBlur={onHandleSubmit}/>
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <p>Mostrar mi tarjet en el directorio</p>
                                    </div>
                                </div>

                                <div className='accept'>
                                    <div className='switches'>
                                        <label className="switch mb-0">
                                            <input type="checkbox" checked={calificacion} onChange={()=>setCalificacion(!calificacion)} onBlur={onHandleSubmit}/>
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <p>Permitir calificación por usuarios</p>
                                    </div>
                                </div>

                                <div className='accept'>
                                    <div className='switches'>
                                        <label className="switch mb-0">
                                            <input type="checkbox" checked={comentarios} onChange={()=>setComentarios(!comentarios)} onBlur={onHandleSubmit}/>
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <p>Permitir comentarios en directorio</p>
                                    </div>
                                </div>

                                { error && 
                                    <div className='error-message'>
                                        { buscaActividad === '' &&
                                            <p>
                                                Por favor ingrese una actividad
                                            </p>
                                        }
                                        { nombreUsuario === '' &&
                                            <p>
                                                Por favor ingrese nombre de usuario
                                            </p>
                                        }
                                        {  errorAlias &&
                                            <p>
                                                Nombre de usuario ya está en uso, por favor intente con otro.
                                            </p>
                                        }
                                    </div>
                                }

                                {/* { error2 &&
                                    <div className='error-message'>
                                        <p>
                                            Por favor introduzca un código postal válido y seleccione una colonia
                                        </p>
                                    </div>
                                } */}

                                <div className='btn-guardar'>
                                    <button type='submit'>
                                        Guardar mis datos de tarjeta
                                    </button>
                                </div>

                                <div className='regresar'>
                                    <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
                                        Regresar a perfil (x)
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default DiseñaTarjet;