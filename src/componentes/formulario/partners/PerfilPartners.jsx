import { useNavigate } from "react-router-dom";

const PerfilPartners = () => {

    const navigate = useNavigate();

    return ( 
        <div className="backgroun-Green">
            <div className="container-fluid perfilPartners background-image">

                <div className="buttons">
                    <button 
                        onClick={()=>navigate('/alta-usuarios')}
                    >
                        Alta Usuarios
                    </button>
                    <button 
                        onClick={()=>navigate('/mis-registros')}
                        className="second"
                    >
                        Ver mis Registros
                    </button>
                    <button className="tird">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PerfilPartners;