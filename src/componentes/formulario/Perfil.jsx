import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DatosEditaPerfil } from '../contextos/EditaPerfil';
import { AnimatePresence ,motion } from 'framer-motion';

import PerfilTemporal from '../../assets/perfiltemporal.jpg';
import ilustracion1 from '../../assets/ilustracion-perfil-1.webp';
import ilustracion2 from '../../assets/ilustracion-perfil-2.webp';
import ilustracion3 from '../../assets/ilustracion-perfil-3.webp';


const Perfil = () => {

    const { usuId } = useParams();
    const navigate = useNavigate();
    const [datosUsuario, setDatosUsuario] = useState([]);
    const [datosSesion, setDatosSesion] = useState([]);
    const [datosActualizados, setDatosActualizados] = useState([]);

    const timestamp = new Date().getTime();

    const [viewToolTip1, setViewToolTip1] = useState(false);
    const [viewToolTip2, setViewToolTip2] = useState(false);
    const [viewToolTip3, setViewToolTip3] = useState(false);

    useEffect(()=>{
        const datosTarjetSite = JSON.parse(localStorage.getItem('DatosTarjetSite'));
        setDatosUsuario(datosTarjetSite);

        const datosSesion = JSON.parse(localStorage.getItem('DatosSesion'));
        setDatosSesion(datosSesion);

        const idUsuario = JSON.parse(localStorage.getItem('IdDatosSesion'));

        const ConsultaDatos = async () => {
            const response = await DatosEditaPerfil(idUsuario.usuId);
            setDatosActualizados(response);
        }
        
        // Comprobar si es la sesión
        if (localStorage.UsuarioSesion && atob(usuId) === datosSesion.UsuToken) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            ConsultaDatos();
        }
        else{
            navigate('/login');
        }        
    },[]);

    const AnimateProps = {
        open: {height: 'auto'},
        closed: {height: 0}
    }

    return ( 
        <div className='backgroun-Green'>
            <div className="container-fluid Perfil background-image" style={{minHeight: '100vh'}}>
                <div className='EncabezadoPerfil'>
                    <div className='encabezado-perfil'>
                        <div className='imagen-perfil'>
                            { datosActualizados.ImgFoto ?
                                // <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosActualizados.ImgFoto}`} />
                                <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosActualizados.ImgFoto}?timestamp=${timestamp}`} />
                            :
                                <img src={PerfilTemporal} />
                            }
                        </div>
                        <div className='info'>
                            <h1>Bienvenido a tu perfil</h1>
                            <h2>
                                {`${datosActualizados.Nom} ${datosActualizados.AppP} ${datosActualizados.AppM}`}
                            </h2>
                        </div>
                    </div>

                    <div className='btnCambio'>
                        <div className='btnfoto'>
                            <button onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>
                                Cambiar foto
                            </button>
                        </div>

                        <div className='btneditar'>
                            <button onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>
                                Editar nombre de usuario
                            </button>
                        </div>
                    </div>

                    <div className='miembro'>
                        <p>
                            Miembro desde: <span>{datosActualizados.RegistroFecha}</span>
                        </p>
                    </div>
                </div>

                <div className='separador'>
                    <hr/>
                </div>

                {/* <div className='detallesCuenta'>
                    <h6>Detalles de tu cuenta</h6>

                    <div className='apartados'>
                        <div className='apartado'>
                            <img src={iconoOjo} />
                            <p>00</p>
                            <h6>
                                Visitas <br/> a tu tarjet site
                            </h6>
                        </div>
                        <div className='apartado'>
                            <img src={iconoCompartir} />
                            <p>00</p>
                            <h6>
                                Veces que te <br/> han compartido
                            </h6>
                        </div>
                        <div className='apartado'>
                            <img src={iconoTarjeteros} />
                            <p>00</p>
                            <h6>
                                Tarjets <br/> en tarjetero
                            </h6>
                        </div>
                    </div>

                    <div className='apartados'>
                        <div className='apartado'>
                            <img src={iconoCalificacion} />
                            <p>00</p>
                            <h6>
                                Calificación
                            </h6>
                        </div>
                        <div className='apartado'>
                            <img src={iconoComentario} />
                            <p>00</p>
                            <h6>
                                Comentarios <br/>
                                <span>leer comentarios</span>
                            </h6>
                        </div>
                        <div className='apartado'>
                            <img src={iconoComentarioOculto} />
                            <p>00</p>
                            <h6 className='ocultar'>
                                Ocultar comentarios <br/>
                                en directorio
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='separador'>
                    <hr/>
                </div> */}

                <div className='buttonsPerfil'>
                    <div className='cuerpo'>

                        <div className='cuerpo-div'>

                            {/* <button className='btn-editar' onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>
                                Edita tu tarjet
                            </button> */}

                            <div className='buttons-new'>
                                <button className='btn-editar btn-1' onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>
                                    Edita / Crea tu Tarjeta
                                </button>

                                <button className='btn-editar btn-2' onClick={()=>setViewToolTip1(!viewToolTip1)}>
                                    <i className="bi bi-question-circle-fill"></i>
                                </button>
                            </div>
                            <div className='para'>
                                <span onClick={()=>setViewToolTip1(!viewToolTip1)}>¿Para que sirve?</span>
                            </div>
                            <AnimatePresence>
                                { viewToolTip1 && (
                                    <motion.div 
                                        className='image-tool'
                                        initial = "closed" 
                                        animate = "open"
                                        exit= "closed"
                                        variants={AnimateProps}
                                    >
                                        <h6>Tu tarjeta de presentación</h6>
                                        <p>
                                            Es la primera tarjeta que verán las personas cuando busquen una actividad que se relacione contigo en el directorio Tarjet.
                                        </p>
                                        <img src={ilustracion1} alt="Edita tu información que se mostrará en el directorio empresarial" />
                                        <p>Asegúrate que se vea Super padre para que llame la atención de quien te solicite...</p>
                                    </motion.div>
                                )
                                }
                            </AnimatePresence>
                            
                        </div>

                        <div className="cuerpo-div">
                            
                            <div className="buttons-new">
                                <button className='btn-site btn-1' onClick={()=>navigate(`/disena-tu-tarjetsite/${btoa(datosSesion.UsuToken)}`)}>
                                    Edita / Crea tu TarjetSite
                                </button>

                                <button className='btn-site btn-2' onClick={()=>setViewToolTip2(!viewToolTip2)}>
                                    <i className="bi bi-question-circle-fill"></i>
                                </button>
                            </div>
                            <div className='para'>
                                <span onClick={()=>setViewToolTip2(!viewToolTip2)}>¿Para que sirve?</span>
                            </div>
                            <AnimatePresence>
                                { viewToolTip2 && (
                                    <motion.div 
                                        className='image-tool'
                                        initial = "closed" 
                                        animate = "open"
                                        exit= "closed"
                                        variants={AnimateProps}
                                    >
                                        <h6>Tarjeta digital Tarjet (micrositio web)</h6>
                                        <p>
                                            Es tu propio espacio en donde configuras todas las formas de contactarte, acceso a tu whatsapp, redes sociales, correo, ubicación, servicios que ofreces, etc.
                                        </p>
                                        <img src={ilustracion2} alt="Edita tu información que se mostrará en el directorio empresarial" />
                                        <p>Es la Tarjeta Virtual que compartirás a las personas, ponle tu propio estilo y crea un buen impacto cuando visiten tu perfil.</p>
                                    </motion.div>
                                )
                                }
                            </AnimatePresence>
                        </div>

                        {/* <button className='btn-fisica'>
                            Tu tarjeta física
                        </button> */}
                        {/* <div>
                            <button className='btn-premium'>
                                Tienes <span>1</span> producto premium <span className='span-detalles'>(ver detalles)</span>
                            </button>
                            <p>(plan válido hasta 17/12/2024)</p>
                        </div> */}

                        <div className="cuerpo-div">

                            <div className="buttons-new">
                                <button className='btn-visitar btn-1' onClick={()=>navigate(`/${btoa(datosSesion.UsuToken)}`)}>
                                    Tarjetero Virtual
                                </button>

                                <button className='btn-visitar btn-2' onClick={()=>setViewToolTip3(!viewToolTip3)}>
                                    <i className="bi bi-question-circle-fill"></i>
                                </button>
                            </div>
                            <div className='para'>
                                <span onClick={()=>setViewToolTip3(!viewToolTip3)}>¿Para que sirve?</span>
                            </div>
                            <AnimatePresence>
                                { viewToolTip3 && (
                                    <motion.div 
                                        className='image-tool'
                                        initial = "closed" 
                                        animate = "open"
                                        exit= "closed"
                                        variants={AnimateProps}
                                    >
                                        <h6>Tarjetero personal</h6>
                                        <p>
                                            Aquí puedes guardar y administrar todos los usuarios Tarjet de tu interés, para poder disponer de su información más fácil.
                                        </p>
                                        <img src={ilustracion3} alt="Edita tu información que se mostrará en el directorio empresarial" />
                                        <p>Revisa y comparte a quien tu quieras, cualquier usuario Tarjet</p>
                                    </motion.div>
                                )
                                }
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Perfil;