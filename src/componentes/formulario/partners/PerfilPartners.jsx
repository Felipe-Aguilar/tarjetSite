import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PerfilPartners = () => {

    const navigate = useNavigate();
    const { partnerId } = useParams();

    useEffect(()=>{

        const dataStorage = JSON.parse(localStorage.getItem('Partner'));
        
        if (dataStorage === null) {
            navigate('/login-partners');
        }
        if (partnerId !== dataStorage.PartnerUUID) {
            navigate('/login-partners');
        }

    },[]);

    const CerrarSesion = () => {
        localStorage.removeItem('Partner');
        navigate('/login-partners');
    }


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
                        onClick={()=>navigate(`/mis-registros/${partnerId}`)}
                        className="second"
                    >
                        Ver mis Registros
                    </button>
                    <button className="tird" onClick={CerrarSesion}>
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PerfilPartners;