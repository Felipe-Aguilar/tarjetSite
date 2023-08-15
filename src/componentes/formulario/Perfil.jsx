import PerfilTemporal from '../../assets/perfiltemporal.jpg';
import iconoOjo from '../../assets/icono-ojo.svg';
import iconoCompartir from '../../assets/icono-compartir.svg';
import iconoTarjeteros from '../../assets/icono-tarjeteros.svg';
import iconoCalificacion from '../../assets/icono-estrella.svg';
import iconoComentario from '../../assets/icono-mensaje.svg';
import iconoComentarioOculto from '../../assets/icono-mensaje-oculto.svg';

const Perfil = () => {
    return ( 
        <div className="container-fluid Perfil">

            <div className='EncabezadoPerfil'>
                <div className='encabezado-perfil'>
                    <div className='imagen-perfil'>
                        <img src={PerfilTemporal} />
                    </div>
                    <div className='info'>
                        <h1>Bienvenido a tu perfil</h1>
                        <h2>
                            Alicia Hernández Gutierrez <br/>
                            <span>@usuariotarjet</span>
                        </h2>
                    </div>
                </div>

                <div className='btnCambio'>
                    <div className='btnfoto'>
                        <button>
                            Cambiar foto
                        </button>
                    </div>

                    <div className='btneditar'>
                        <button>
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
                    <button className='btn-editar'>
                        Edita tu tarjet
                    </button>
                    <button className='btn-site'>
                        Editar tu tarjet site (tarjeta digital)
                    </button>
                    <button className='btn-fisica'>
                        Tu tarjeta física
                    </button>
                    <div>
                        <button className='btn-premium'>
                            Tienes <span>1</span> producto premium <span className='span-detalles'>(ver detalles)</span>
                        </button>
                        <p>(plan válido hasta 17/12/2024)</p>
                    </div>
                    <button className='btn-visitar'>
                        Visitar tarjetero
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Perfil;