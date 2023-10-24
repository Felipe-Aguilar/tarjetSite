import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ObtenerSegmentos } from '../contextos/BusquedaDirectorio';
import { DatosEditaPerfil, ActualizarPerfil } from '../contextos/EditaPerfil';
import { CodigoPostal } from '../contextos/CodigoPostal';
import { ColeccionTarjeta } from '../contextos/Colecciones';
import Slider from 'react-slick';
import CargarImagen from './CargarImagen';
import PopCorrecto from './PopCorrecto';

import ilustracion from '../../assets/ilustracion-formulario-tarjet-03.png';
import tarjetaGenerica from '../../assets/tarjetageneric.png';
import perfilTemporal from '../../assets/perfiltemporal.jpg';
import ilustracionPersonalizada from '../../assets/ilustracion-personalizada.png';
import Previsualizar from './Previsualizar';


const DiseñaTarjet = () => {

    const { usuId } = useParams();
    const [datosSesion, setDatosSesion] = useState([]);

    const [segmentos, setSegmentos] = useState([]);
    const [ datosGenerales, setDatosGenerales ] = useState([]);

    const [cargarImagen, setCargarImagen] = useState(false);
    const [previsualizar, setPrevisualizar] = useState(false);

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
    const [titulo, setTitulo] = useState('Lic');

    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);

    // Selecciona actividad
    const [buscaActividad, setBuscaActividad] = useState('');
    // Filtro de la actividad
    const [filtroSegmento, setFiltroSegmento] = useState([]);

    
    // Slider y colecciones
    const [colecciones, setColecciones] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentFondo, setCurrentFondo] = useState('');

    useEffect(()=>{

        const datosSesion = JSON.parse(localStorage.getItem('DatosSesion'));
        setDatosSesion(datosSesion);
        
        const usuarioID = JSON.parse(localStorage.getItem('IdDatosSesion'));

        // Obtiene segmento para TUS DATOS
        const selecActividad = async () => {
            const respuesta = await ObtenerSegmentos('');
            setSegmentos(respuesta.ListSegmentos);
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
            if (respuesta.Titulo === '') {
                setTitulo('Lic');
            } else{
                setTitulo(respuesta.Titulo);
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
        }

        // Comprobar Colecciones de tarjetas
        const Colecciones = async () => {
            const response = await ColeccionTarjeta();
            setColecciones(response.ListTarjetas);
            setCurrentFondo(response.ListTarjetas[0].TarjetaImagen);
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

            const objectImagen = colecciones.find(coleccion => coleccion.TarjetaId == current+1);
            setCurrentFondo(objectImagen.TarjetaImagen);
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

        if (buscaActividad === '') {
            setError(true);
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
            "CodP": codigoPostal,
            "Municip": municipio,
            "Colonia": colonia,
            "Titulo": titulo
        }

        await ActualizarPerfil(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);
            
            setTimeout(()=>{
                window.location.reload();
            }, 500);

        }, 3500);
    }

    // Guardar TUS DATOS
    const GuardarTarjeta2 = async (e) => {

        e.preventDefault();

        if (!colonia) {
            setError2(true);
            return;
        }
        if (codigoPostal < 5) {
            setError2(true);
            return;
        }else{
            setError2(false);
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
            "Titulo": titulo
        }

        await ActualizarPerfil(datosGenerales, datosFormulario);
        setPopActualiza(true);

        setTimeout(()=>{
            setPopActualiza(false);

            setTimeout(()=>{
                window.location.reload();
            }, 500);

        }, 3500);
    }

    const CerrarCarga = () => {
        setCargarImagen(false);
    }

    const CerrarPrevisualizar = () => {
        setPrevisualizar(false);
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

    return ( 
        <div className="container-fluid diseñaTarjet">

            { popActualiza &&
                <PopCorrecto />
            }
            
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
                            {/* <Slider {...settings}>
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
                            </div> */}

                            <Slider {...settingsSlider}>
                                { colecciones.map((coleccion)=>(
                                    <div className='tarjetaGratuitas' key={coleccion.ColeccionId}>
                                        <img src={`https://tarjet.site/imagenes/tarjetas_frente/${coleccion.TarjetaImagen}`}/>
                                    </div>
                                ))
                                }
                            </Slider>

                            <div className='info'>
                                <div className='modelos w-100'>
                                    <p>
                                        {`${currentSlide+1} de 10 modelos gratuitos`}
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
                                <div className='logotipo'>
                                    <div className='img-perfil'>
                                        { datosGenerales.ImgFoto ?
                                            <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}`} />
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
                                }

                                <div className='prefijo'>
                                    <p>Prefijo</p>
                                </div>

                                <div className='form'>
                                    <form onSubmit={GuardarTarjeta1}>
                                        <div className='select'>
                                            <div>
                                                <select value={titulo} onChange={(e)=>setTitulo(e.target.value)}>
                                                    <option value="Lic" key="1">Lic</option>
                                                    <option value="Ing" key="2">Ing</option>
                                                    <option value="Arq" key="3">Arq</option>
                                                    <option value="Doc" key="4">Doc</option>
                                                    <option value="Técni" key="5">Técni</option>
                                                </select>
                                            </div>
                                            <input 
                                                type="text" 
                                                placeholder='Empresa ó tu Nombre (40 caracteres)' 
                                                maxLength={40}
                                                value={nombre}
                                                onChange={(e)=>setNombre(e.target.value)}
                                            />
                                        </div>

                                        <div className='apellidos'>
                                            <input 
                                                type="text" 
                                                maxLength={40} 
                                                placeholder='Apellido Paterno'
                                                value={appPat}
                                                onChange={(e)=>setAppPat(e.target.value)}
                                            />
                                            <input 
                                                type="text" 
                                                maxLength={40} 
                                                placeholder='Apellido Materno'
                                                value={appMat}
                                                onChange={(e)=>setAppMat(e.target.value)}
                                            />
                                        </div>

                                        <input 
                                            type="text" 
                                            placeholder='Nombre de usuario' 
                                            maxLength={20}
                                        />
                                        <p className='text-usuario'>
                                            (con este usuario te podrán encontrar más fácil en el directorio)
                                        </p>

                                        <input 
                                            type="text" 
                                            placeholder='Buscar actividad' 
                                            className={error ? 'input-error' : ''}
                                            maxLength={80}
                                            value={buscaActividad}
                                            style={{textTransform: 'uppercase'}}
                                            onChange={actividadOnChange}
                                            list='actividad-resultados'
                                        />

                                        <datalist id='actividad-resultados'>
                                            { segmentos.map((segmento)=>(
                                                <option value={segmento.Descripcion} key={segmento.Nivel3Id}></option>
                                            ))
                                            }
                                        </datalist>

                                        <a href='' target='_blank' style={{marginBottom: '15px'}}>
                                            Si no aparece tu área, solicítala aquí, con tu apoyo nos ayudas a aprender.
                                        </a>
                                        
                                        <input 
                                            type="text" 
                                            placeholder='Texto debajo de tu nombre (30 caracteres)' maxLength={30}
                                            value={cargo}
                                            onChange={(e)=>setCargo(e.target.value)}
                                        />

                                        {/* <input type="text" placeholder='Encabezado ó servicio principal (opcional)' maxLength={30}/> */}

                                        { error &&
                                            <div className='error-message'>
                                                <p>
                                                    Por favor ingrese una actividad
                                                </p>
                                            </div>
                                        }

                                        { previsualizar &&
                                            <Previsualizar 
                                                onClickButton={CerrarPrevisualizar} 
                                                datosGenerales={datosGenerales}
                                                currentFondo={currentFondo}
                                                nombreCompleto = {`${nombre} ${appPat} ${appMat}`}
                                                cargo = { cargo }
                                            />
                                        }

                                        <div className='buttons'>
                                            <div className='primer'>
                                                <button onClick={()=>setPrevisualizar(true)} type='button'>
                                                    Previsualizar
                                                </button>
                                            </div>
                                            <div className='segundo'>
                                                <button type='submit'>
                                                    Guardar Tarjeta
                                                </button>
                                            </div>
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
                                <button onClick={()=>navigate(`/mi-perfil/${btoa(datosSesion.UsuToken)}`)} type='button'>
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

                    {/* <div className='imagen-perfil'>
                        { datosGenerales.ImgFoto ?
                            <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosGenerales.ImgFoto}`} />
                        :
                            <img src={perfilTemporal} />
                        }

                        <button>
                            Imagen ó Logotipo <span>(editar)</span>
                        </button>
                    </div> */}

                    <div className='formulario'>
                        <form onSubmit={GuardarTarjeta2}>
                            <input 
                                type="text" 
                                placeholder='Empresa o nombre y apellidos (40 caracteres)' 
                                maxLength={40}
                                readOnly
                                value={nombre + " " + appPat + " " + appMat}
                            />
                            {/* <select disabled>
                                
                                { buscaActividad === filtroSegmento?.Descripcion &&
                                    <option 
                                        value={filtroSegmento.Nivel1Desc}
                                        key={filtroSegmento.Nivel1Id}
                                        selected
                                    >
                                        {filtroSegmento.Nivel1Desc}
                                    </option>
                                }
                                <option value="categoría" key="1" selected>Categoría *</option>
                            </select> */}

                            <input 
                                type="text" 
                                readOnly
                                placeholder='Categoría*'
                                value={buscaActividad === filtroSegmento?.Descripcion ? filtroSegmento.Nivel1Desc : ''}
                                style={{color: '#8e8e8e'}}
                            />

                            <input 
                                type="text" 
                                readOnly
                                placeholder='Categoría*'
                                value={buscaActividad === filtroSegmento?.Descripcion ? filtroSegmento.Nivel2Desc : ''}
                                style={{color: '#8e8e8e'}}
                            />

                            {/* <input 
                                type="text" 
                                placeholder='Buscar actividad' 
                                maxLength={80}
                                value={buscaActividad}
                                style={{textTransform: 'uppercase'}}
                                onChange={actividadOnChange}
                                list='actividad-resultados'
                            />

                            <datalist id='actividad-resultados'>
                                { segmentos.map((segmento)=>(
                                    <option value={segmento.Descripcion} key={segmento.Nivel3Id}></option>
                                ))
                                }
                            </datalist> */}

                            <input 
                                type="text" 
                                placeholder='Ingresa tu cargo'
                                value={cargo}
                                readOnly
                            />

                            <a href='' target='_blank'>
                                Aparecerá debajo de tu nombre en tu tarjeta
                            </a>

                            <h6>Ubicación</h6>

                            <input 
                                type="text" 
                                placeholder='Calle, privada, avenida'
                                value={calle}
                                onChange={(e)=>setCalle(e.target.value)}
                            />

                            <div className='twoInput'>
                                <div className='w-50'>
                                    <input 
                                        type="text" 
                                        placeholder='Número'
                                        value={numeroExterior}
                                        onChange={(e)=>setNumeroExterior(e.target.value)}
                                    />
                                </div>
                                <div className='w-50'>
                                    <input 
                                        type="text" 
                                        maxLength={5}
                                        placeholder='C.P'
                                        value={codigoPostal}
                                        onChange={onChangeCodigoPostal}
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

                            <button className='btn-amarillo' type='button'>
                                Necesitas ser encontrado en mayor rango, <span>inscríbete a Premium, tu tarjeta sin límites.</span>
                            </button>

                            <div className='accept'>
                                <div className='switches'>
                                    <label className="switch mb-0">
                                        <input type="checkbox" checked={directorio} onChange={()=>setDirectorio(!directorio)}/>
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
                                        <input type="checkbox" checked={calificacion} onChange={()=>setCalificacion(!calificacion)}/>
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
                                        <input type="checkbox" checked={comentarios} onChange={()=>setComentarios(!comentarios)}/>
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <p>Permitir comentarios en directorio</p>
                                </div>
                            </div>

                            {/* <div className='terminos'>
                                <input type="checkbox" id='terminos'/>
                                <label htmlFor='terminos'>
                                    Acepto <span onClick={()=>navigate('/aviso-privacidad')}>términos de privacidad</span>
                                </label>
                            </div> */}

                            { error2 &&
                                <div className='error-message'>
                                    <p>
                                        Por favor introduzca un código postal válido y seleccione una colonia
                                    </p>
                                </div>
                            }

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
    );
}

export default DiseñaTarjet;