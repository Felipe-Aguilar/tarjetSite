import PerfilTemporal from '../../assets/perfiltemporal.jpg';

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
            </div>

        </div>
    );
}

export default Perfil;