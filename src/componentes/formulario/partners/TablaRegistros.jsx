import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TablaRegistros = () => {

    const navigate = useNavigate();
    const { partnerId } = useParams();

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('Partner'));

        if (data === null) {
            navigate('/login-partners');
        }
        if (data.PartnerUUID !== partnerId) {
            navigate('/login-partners');
        }
    },[]);

    const usuarios = [
        {id: 1, nombre: 'Felipe', negocio: 'TekRobot', fecha: '06-12-2023', correo: 'correo@co.com', password: '1234AA'},
        {id: 2, nombre: 'Felipe', negocio: 'TekRobot', fecha: '06-12-2023', correo: 'correo@co.com', password: '1234AA'},
        {id: 3, nombre: 'Felipe', negocio: 'TekRobot', fecha: '06-12-2023', correo: 'correo@co.com', password: '1234AA'},
        {id: 4, nombre: 'Felipe', negocio: 'TekRobot', fecha: '06-12-2023', correo: 'correo@co.com', password: '1234AA'},
    ]

    return ( 
        <div className="backgroun-Green">
            <div className="container-fluid TablaRegistros background-image">
                <h1>Registro de mis usuarios</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Nombre</th>
                            <th>Negocio</th>
                            <th>Premium desde</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                        </tr>
                    </thead>
                    <tbody>
                        { usuarios.map((usuario)=>(
                            <tr key={usuario.id} style={usuario.id % 2 == 0 ? {background: '#f3f3f3'} : {background: '#fff'}}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.negocio}</td>
                                <td>{usuario.fecha}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.password}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                <button onClick={()=>navigate(`/perfil-partner/${partnerId}`)}>
                    Regresar
                </button>
            </div>
        </div>
    );
}

export default TablaRegistros;