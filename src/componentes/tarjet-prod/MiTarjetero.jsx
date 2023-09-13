import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DatosUsuarioSesion } from '../contextos/DatosUsuarioSesion';
import { ConsultaTarjetero, ConsultaTarjeteroFiltro, ConsultaTarjeteroNombre } from '../contextos/ConsultaTarjetero';
import { ConsultaSegmento } from '../contextos/ConsultaSegmento';
import { ConsultaClicUsuario } from '../contextos/ConsultaClicUsuario';

import { ComprobarUsuario , DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';

import { GuardarTarjet } from '../contextos/GuardarTarjet';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { toast, Toaster } from 'react-hot-toast';

import Qr from './Qr';
import Compartir from './Compartir';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

import PortadaTarjet from '../../assets/im-portada-tarjetero-tarjet.jpg';
import BtnQr from '../../assets/boton-tuqr-tarjetero.svg';
import BtnCompartir from '../../assets/boton-compartir-tarjetero.svg';
import BtnCopiar from '../../assets/boton-enlace-tarjetero.svg';
import BtnDirectorio from '../../assets/boton-directorio-tarjetero.svg';
import rostro from '../../assets/rostro-04.jpg';
import perfilGenerico from '../../assets/perfiltemporal.jpg';

import { QRCodeSVG } from 'qrcode.react';

const MiTarjetero = () => {

    const { pageId } = useParams();
    const [comprobarUsuario, setComprobarUsuario] = useState([]);
    const [ usuario, setUsuario ] = useState([]);
    const [datos, setDatos] = useState([]);

    const usuarioSesion = JSON.parse(localStorage.getItem('DatosSesion'));
    const idUsuarioSesion = JSON.parse(localStorage.getItem('IdDatosSesion'));

    const [datosMiTarjetero, setDatosMiTarjetero ] = useState([]);
    const [datosSegmentos, setDatosSegmentos ] = useState([]);

    useEffect(()=>{

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const ConsultaDatos = async () => {
            const comprobarUsuario = await ComprobarUsuario(atob(pageId));
            setComprobarUsuario(comprobarUsuario);
            
            const resultados = await DatosUsuario(comprobarUsuario.usuId);
            setUsuario(resultados);

            const datosUsuarios = await DatosUsuarioTarjetSite(comprobarUsuario.usuId);
            setDatos(datosUsuarios.SDTSite);

        }

        const ConsultaMiTarjetero = async () =>{
            const datosTarjeteroGuardado = await ConsultaTarjetero(idUsuarioSesion.usuId);
            const datosSeg = await ConsultaSegmento(idUsuarioSesion.usuId);
    
            setDatosMiTarjetero(datosTarjeteroGuardado.SDTTarjetsG);
            setDatosSegmentos(datosSeg.SDTSegmentos);
        }

        ConsultaDatos();
        ConsultaMiTarjetero();
    },[]);

    // TODO BIEN AQUÍ

    const navigate = useNavigate();
    
    const [opcionSelected, setOpcionSelected] = useState('');


    const [busquedaSegmento, setBusquedaSegmento] = useState(false);
    const [reBusSegmento, setReBusSegmento ] = useState([]);
    const [nomSeg, setNomSeg] = useState();

    

    const [busquedaUsuario, setBusquedaUsuario] = useState(false);
    const [usuarioBuscado, setUsuarioBuscado] = useState([]);

    const ConsultaUsuarioClic = async (IdTarjet) =>{
        // console.log(IdTarjet);
        const respuesta = await ConsultaClicUsuario(IdTarjet);
        setBusquedaUsuario(true);
        setUsuarioBuscado(respuesta);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const GuardarTarjetero = () => {
        GuardarTarjet(idUsuarioSesion.usuId, comprobarUsuario.usuId);

        toast.success('Tarjeta guardada con éxito',{
            duration: 4500,
            position: 'top-center',
        });

        setInterval(()=>{
            window.location.reload();
        },3000);
    }

    const [qr, setQr] = useState(false);
    
    const setQrEstado = () => {
        setQr(!qr);
    }
    
    // Compartir
    const [compartir, setCompartir] = useState(false);
    const [resuCompartir, setResuCompartir] = useState('');

    const btnResuComp = (resultadoUsuToken) => {
        setCompartir(true);
        setResuCompartir(resultadoUsuToken);
    }

    // Btn de cerrar Compartir modal
    const setCompartirEstado = () => {
        setCompartir(!compartir);
    }


    // Copiar link portapapeles
    const copiarPortapapeles = () => {

        toast('Copiado en el portapapeles',{
            duration: 4500,
            position: 'bottom-center',
        });

        const el = document.createElement('textarea');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    // Copiar link portapapeles Resultados
    const copiarResultado = (token) => {
        const el = document.createElement('textarea');
        el.value = `https://tarjet.site/#/st/${btoa(token)}`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    // Busqueda nombre
    const [capturaNombre, setCapturaNombre] = useState('');
    const [busquedaNombre, setBusquedaNombre ] = useState(false);
    const [reBusNombre, setReBusNombre] = useState([]);

    const ConsultaNombre = async (e) => {
        setOrden('');
        setBusquedaNombre(true);
        setCapturaNombre(e.target.value);
        
        const resultadoNombre = await ConsultaTarjeteroNombre(idUsuarioSesion.usuId, capturaNombre);

        setReBusNombre(resultadoNombre.SDTTarjetsG);
    }

    // Resultados por A-Z
    const [orden, setOrden] = useState('');
    const [resultadoOpen, setResultadoOpen] = useState(null);
    const resultadoVariante = {
        open: {height: 'auto'},
        closed: {height: 0}
    }
    const reAlfabeto = () =>{
        setOrden('alfabeto');
        setCapturaNombre('');
        setBusquedaNombre(false);
    }

    // Resultados Giro comercial
    const reGiro = () =>{
        setOrden('giro');
        setCapturaNombre('');
        setBusquedaNombre(false);
    }

    const [indexSegmento, setIndexSegmento] = useState(null);

    const ConsultaFiltroSegmento = async(SegmentoId) =>{
        setIndexSegmento(SegmentoId === indexSegmento ? null : SegmentoId);
        const resultadosSegmento = await ConsultaTarjeteroFiltro(idUsuarioSesion.usuId , SegmentoId);

        setReBusSegmento(resultadosSegmento.SDTTarjetsG);
        
        setNomSeg(resultadosSegmento.SDTTarjetsG[0].SegmentoDesc);
    }

    // Animación de resultado
    const resultadoClick = (index) =>{
        setResultadoOpen(index === resultadoOpen ? null : index);
    }

    // console.log(datosMiTarjetero);

    // Comprobando si existe o no
    if(comprobarUsuario.usuId === 0) return null;

    return (

        <div className='container-fluid p-0'>

            <div className='miTarjetero' >
                { !busquedaUsuario ?
                <>
                    {/* Rediseño foto encabezado perfil normal */}
                    <div className='row justify-content-center encabezadoFoto'>
                        <div className='col-12 col-lg-4 '>
                            <img src={PortadaTarjet}/>
                            <h5>
                                Hola {datos.Cuenta}<br/>
                                <span>Bienvenido a tu</span>
                            </h5>
                            <h4>
                                Tarjetero Tarjet
                            </h4>
                        </div>
                    </div>

                    {/* Tarjeta */}
                        {/* <div 
                            className='row justify-content-center tarjeta' 
                            style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+ usuario.UsuFondoF})`}}
                            onClick={()=>navigate('/st/'+btoa(usuario.UsuToken))}
                        >
                            <div className='col-11 col-md-4 p-0'>
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </div>
                        </div> */}
                    <div className='row justify-content-center tarjeta2'>
                        <div className='col-11 col-lg-4'>
                            <img 
                                src={`https://tarjet.site/imagenes/${usuario.UsuFondoF}`}
                                onClick={()=>navigate('/st/'+btoa(usuario.UsuToken))}
                            />
                            <p>
                                Da click sobre la imagen para ver tu tarjeta digital
                            </p>
                        </div>
                    </div>
                </>
                :
                <>
                    <div 
                        className='row justify-content-center tarjeta' 
                        style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+usuarioBuscado.UsuFondoF})`}}
                        onClick={()=>navigate('/st/'+btoa(usuarioBuscado.UsuToken))}
                    >
                        <div className='col-11 col-md-4 p-0'>
                            <img src={CirculoLink} className="circulo"/>
                            <motion.img 
                                src={Mano3D} 
                                className="mano"
                                animate={{rotate: [0,20,0]}}
                                transition={{repeat: Infinity, repeatDelay:2}}
                            />
                        </div>
                    </div>
                    
                    {/* Rediseño foto encabezado búsqueda */}
                    <div className='row justify-content-center encabezadoFoto'>
                        <div className='col-12 col-lg-4'>
                            <img src={PortadaTarjet}/>
                        </div>
                    </div>
                </>
                }

                {/* Controles rediseño */}
                <div className='row justify-content-center controles'>
                    <div className='col-11 col-lg-4 contenedor'>
                        <button onClick={()=>setQr(true)}>
                            <img src={BtnQr}/>
                            Tu Qr
                        </button>
                        { qr &&
                            <Qr cerrarQr={setQrEstado} usuario={usuario}/>
                        }

                        <button>
                            <img src={BtnCompartir} onClick={()=>setCompartir(true)}/>
                            Compartir tu tarjeta
                        </button>

                        { compartir &&
                            <Compartir cerrarCompartir={setCompartirEstado} usuario={usuario} resuCompartir={resuCompartir}/>
                        }

                        <button onClick={copiarPortapapeles}>
                            <img src={BtnCopiar}/>
                            Copiar enlace
                        </button>

                        <button>
                            <img src={BtnDirectorio}/>
                            Visitar directorio
                        </button>
                    </div>
                </div>

                {/* Controles antiguos */}
                {/* <div className='row mt-4 justify-content-center opciones2'>
                    <div className='col-11 col-md-4 p-0'>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-around align-items-center cuerpo'>
                                <div>
                                    <img 
                                        src={icono2} 
                                        onClick={GuardarTarjetero}
                                    />
                                    <Toaster />
                                </div>
                                <div>
                                    <img 
                                        src={icono1} 
                                        onClick={()=>{
                                            navigate('/'+btoa(usuarioSesion.UsuToken)); 
                                            window.location.reload();
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='d-flex justify-content-around align-items-center cuerpo'>
                                <div>
                                    <img 
                                        src={icono3}
                                        onClick={()=>setQr(true)}
                                    />
                                    { qr &&
                                        <Qr showQr={qr} cerrarQr={setQrEstado} usuarioQr={usuario.UsuToken} busquedaUsuario={busquedaUsuario} buscadoQr={usuarioBuscado.UsuToken}/>
                                    }
                                </div>
                                <div>
                                    <img src={icono4} onClick={copiarPortapapeles}/>
                                </div>
                                <div>
                                    <img src={icono5} onClick={()=>setCompartir(true)}/>
                                    
                                    { compartir &&
                                        <Compartir showCompartir={compartir} cerrarCompartir={setCompartirEstado} busquedaUsuario={busquedaUsuario} usuarioBuscado={usuarioBuscado}/>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Últimas consultas */}
                <div className='row justify-content-center consultas'>
                    <div className='col-11 col-lg-4'>
                        <div className='cuerpo'>
                            <h5>Últimas consultas</h5>
                            <div>
                                <img src={rostro} />
                                <img src={rostro} />
                                <img src={rostro} />
                                <img src={rostro} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tu tarjetero */}
                <div className='row justify-content-center TuTarjetero'>
                    <div className='col-11 col-lg-4'>
                        <h5>Tu tarjetero</h5>
                        <p>Actualmente tienes <span>{datosMiTarjetero.length}</span> Tarjets</p>

                        <div className='cuerpo'>
                            <h5>Ordenar por</h5>
                            <div>
                                <button 
                                    className={orden == 'alfabeto' ? 'active' : ''} 
                                    onClick={reAlfabeto}
                                >
                                    Alfabeto A-Z
                                </button>

                                <button 
                                    className={orden == 'giro' ? 'active' : ''} 
                                    onClick={reGiro}
                                >
                                    Giro comercial
                                </button>
                            </div>
                        </div>

                        <div className='cuerpo buscar'>
                            <h5>Búsqueda</h5>
                            <div>
                                <label>
                                    <i className="bi bi-search"></i>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder='Escribe el nombre ó giro comercial'
                                    value={capturaNombre}
                                    onChange={ConsultaNombre}
                                />
                            </div>
                            {/* <div>
                                <button className='active mt-2'>
                                    Buscar
                                </button>
                            </div> */}
                        </div>

                        <div className='resultados'>
                            { orden == 'alfabeto' &&
                                datosMiTarjetero.map((resultado, index)=>(
                                    <div className='resultado' key={resultado.IdUsuario}>
                                        <div className='body' onClick={()=>resultadoClick(index)}>
                                            <div className='title'>
                                                <div className='img'>
                                                    <img 
                                                        src={
                                                            resultado.ImgFoto ?
                                                            `https://tarjet.site/imagenes/perfil-imagenes/${resultado.ImgFoto}`
                                                            :
                                                            perfilGenerico
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <h5>
                                                        {resultado.NombreCompleto}<br/>
                                                        <span>{resultado.UsuEncabezado}</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        { resultadoOpen === index &&
                                            <motion.div 
                                                className='body2'
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={resultadoVariante}
                                            >
                                                <img 
                                                    src={`https://tarjet.site/imagenes/${resultado.UsuFondoF}`}
                                                    onClick={()=>navigate('/st/'+btoa(resultado.UsuToken))}
                                                />
                                                <div className='info'>
                                                    <p>
                                                        Da click sobre la imagen para ver tarjeta digital
                                                    </p>
                                                    <QRCodeSVG 
                                                        value={`https://tarjet.site/#/st/${btoa(resultado.UsuToken)}`}
                                                        size={'50%'}
                                                        style={{display: 'block', margin: 'auto', padding: '20px 0'}}
                                                    />
                                                    <p className='escanea'>
                                                        Escanea con tu smartphone
                                                    </p>
                                                    <div className='buttons'>
                                                        <button 
                                                            onClick={()=> btnResuComp(resultado.UsuToken)}
                                                        >
                                                            <img src={BtnCompartir} />
                                                            Compartir tarjeta
                                                        </button>

                                                        <button onClick={()=> copiarResultado(resultado.UsuToken)}>
                                                            <img src={BtnCopiar}/>
                                                            Copiar enlace
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        }
                                    </div>
                                ))
                            }
                            { orden == 'giro' &&

                                datosSegmentos.map((segmento)=>(
                                    <>
                                        <div className='giro' key={segmento.SegmentoId}>
                                            <div 
                                                className='giro-body'
                                                onClick={() => ConsultaFiltroSegmento(segmento.SegmentoId)}
                                            >
                                                {segmento.SegmentoDesc}
                                            </div>
                                        </div>

                                        {   indexSegmento === segmento.SegmentoId &&
                                            reBusSegmento.map((resultado,index)=>(
                                                <div className='resultado' key={resultado.IdUsuario}>
                                                    <div className='body' onClick={()=>resultadoClick(index)}>
                                                        <div className='title'>
                                                            <div className='img'>
                                                                <img src={
                                                                    resultado.ImgFoto ?
                                                                    `https://tarjet.site/imagenes/perfil-imagenes/${resultado.ImgFoto}`
                                                                    :
                                                                    perfilGenerico
                                                                }/>
                                                            </div>
                                                            <div>
                                                                <h5>
                                                                    {resultado.NombreCompleto}<br/>
                                                                    <span>{resultado.UsuEncabezado}</span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    { resultadoOpen === index &&
                                                        <motion.div 
                                                            className='body2'
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            variants={resultadoVariante}
                                                        >
                                                            <img 
                                                                src={`https://tarjet.site/imagenes/${resultado.UsuFondoF}`}
                                                                onClick={()=>navigate('/st/'+btoa(resultado.UsuToken))}
                                                            />
                                                            <div className='info'>
                                                                <p>
                                                                    Da click sobre la imagen para ver tarjeta digital
                                                                </p>
                                                                <QRCodeSVG 
                                                                    value={`https://tarjet.site/#/st/${btoa(resultado.UsuToken)}`}
                                                                    size={'50%'}
                                                                    style={{display: 'block', margin: 'auto', padding: '20px 0'}}
                                                                />
                                                                <p className='escanea'>
                                                                    Escanea con tu smartphone
                                                                </p>
                                                                <div className='buttons'>
                                                                    <button
                                                                        onClick={()=> btnResuComp(resultado.UsuToken)}
                                                                    >
                                                                        <img src={BtnCompartir} />
                                                                        Compartir tarjeta
                                                                    </button>

                                                                    <button
                                                                        onClick={()=> copiarResultado(resultado.UsuToken)}
                                                                    >
                                                                        <img src={BtnCopiar} />
                                                                        Copiar enlace
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    }
                                                </div>
                                            ))                   
                                        }
                                    </>
                                ))

                            }
                            { busquedaNombre &&
                                reBusNombre.map((resultado, index)=>(
                                    <div className='resultado' key={resultado.IdUsuario}>
                                        <div className='body' onClick={()=>resultadoClick(index)}>
                                            <div className='title'>
                                                <div className='img'>
                                                    <img src={
                                                        resultado.ImgFoto ?
                                                        `https://tarjet.site/imagenes/perfil-imagenes/${resultado.ImgFoto}`
                                                        :
                                                        perfilGenerico
                                                    } />
                                                </div>
                                                <div>
                                                    <h5>
                                                        {resultado.NombreCompleto}<br/>
                                                        <span>{resultado.UsuEncabezado}</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        { resultadoOpen === index &&
                                            <motion.div 
                                                className='body2'
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={resultadoVariante}
                                            >
                                                <img 
                                                    src={`https://tarjet.site/imagenes/${resultado.UsuFondoF}`}
                                                    onClick={()=>navigate('/st/'+btoa(resultado.UsuToken))}
                                                />
                                                <div className='info'>
                                                    <p>
                                                        Da click sobre la imagen para ver tarjeta digital
                                                    </p>
                                                    <QRCodeSVG 
                                                        value={`https://tarjet.site/#/st/${btoa(resultado.UsuToken)}`}
                                                        size={'50%'}
                                                        style={{display: 'block', margin: 'auto', padding: '20px 0'}}
                                                    />
                                                    <p className='escanea'>
                                                        Escanea con tu smartphone
                                                    </p>
                                                    <div className='buttons'>
                                                        <button
                                                            onClick={()=> btnResuComp(resultado.UsuToken)}
                                                        >
                                                            <img src={BtnCompartir} />
                                                            Compartir tarjeta
                                                        </button>

                                                        <button
                                                            onClick={() => copiarResultado(resultado.UsuToken)}
                                                        >
                                                            <img src={BtnCopiar}/>
                                                            Copiar enlace
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        }
                                    </div>
                                ))
                            }
                        </div>

                        <div className='paginacion'>
                            <p>
                                Hoja <span>1</span> de 10
                            </p>
                            <p>
                                Siguiente
                                <i className="bi bi-chevron-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiTarjetero;