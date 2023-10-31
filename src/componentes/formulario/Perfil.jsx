import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DatosEditaPerfil } from '../contextos/EditaPerfil';

import PerfilTemporal from '../../assets/perfiltemporal.jpg';
import iconoOjo from '../../assets/icono-ojo.svg';
import iconoCompartir from '../../assets/icono-compartir.svg';
import iconoTarjeteros from '../../assets/icono-tarjeteros.svg';
import iconoCalificacion from '../../assets/icono-estrella.svg';
import iconoComentario from '../../assets/icono-mensaje.svg';
import iconoComentarioOculto from '../../assets/icono-mensaje-oculto.svg';

const Perfil = () => {

    const { usuId } = useParams();
    const navigate = useNavigate();
    const [datosUsuario, setDatosUsuario] = useState([]);
    const [datosSesion, setDatosSesion] = useState([]);
    const [datosActualizados, setDatosActualizados] = useState([]);

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

    return ( 
        <div className='backgroun-Green'>
            <div className="container-fluid Perfil background-image">
                <div className='EncabezadoPerfil'>
                    <div className='encabezado-perfil'>
                        <div className='imagen-perfil'>
                            { datosActualizados.ImgFoto ?
                                <img src={`https://tarjet.site/imagenes/perfil-imagenes/${datosActualizados.ImgFoto}`} />
                            :
                                <img src={PerfilTemporal} />
                            }
                        </div>
                        <div className='info'>
                            <h1>Bienvenido a tu perfil</h1>
                            <h2>
                                {`${datosActualizados.Nom} ${datosActualizados.AppP} ${datosActualizados.AppM}`} <br/>
                                <span>{datosUsuario.Cuenta}</span>
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
                            Miembro desde: <span>00 / 00 / 0000</span>
                        </p>
                    </div>
                </div>

                <div className='separador'>
                    <hr/>
                </div>

                <div className='detallesCuenta'>
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
                </div>

                <div className='buttonsPerfil'>
                    <div className='cuerpo'>
                        <button className='btn-editar' onClick={()=>navigate(`/disena-tu-tarjet/${btoa(datosSesion.UsuToken)}`)}>
                            Edita tu tarjet
                        </button>
                        <button className='btn-site' onClick={()=>navigate(`/disena-tu-tarjetsite/${btoa(datosSesion.UsuToken)}`)}>
                            Editar tu tarjet site (tarjeta digital)
                        </button>
                        {/* <button className='btn-fisica'>
                            Tu tarjeta física
                        </button> */}
                        <div>
                            <button className='btn-premium'>
                                Tienes <span>1</span> producto premium <span className='span-detalles'>(ver detalles)</span>
                            </button>
                            <p>(plan válido hasta 17/12/2024)</p>
                        </div>
                        <button className='btn-visitar' onClick={()=>navigate(`/${btoa(datosSesion.UsuToken)}`)}>
                            Visitar tarjetero
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Perfil;