import { useEffect, useState } from "react";
import { ListadoPrefijos } from "../../contextos/PrefijosListado";
import { useNavigate } from "react-router-dom";

import PopRegistro from './PopRegistro';

const RegistroPartner = () => {

    const navigate = useNavigate();
    const [data, setData] = useState();
    const [pop, setPop] = useState(false);

    const [listaPrefijos, setListaPrefijos] = useState([]);

    const [prefijo, setPrefijo] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');

    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem('Partner'));

        if (!data) {
            navigate('/login-partners');
        }else{
            setData(data);
        }

        const CargaDatos = async () =>{
            const prefijos = await ListadoPrefijos();
            setListaPrefijos(prefijos.sdtTitulos);
        }

        CargaDatos();

    },[]);

    const Registrar = (e) => {
        e.preventDefault();

        setPop(true);
        setTimeout(()=>{
            navigate('/perfil-partners');
        }, 5000);
    }

    return ( 
        <div className="backgroun-Green">
            <div className="container-fluid RegistroPartner background-image">

                <div className="Title">
                    <h1>Bienvenido usuario.Nombre</h1>
                    <span>Dar de alta Usuario Tarjet</span>
                </div>

                <div className="Registro">
                    <div className="prefijo">
                        <span>Prefijo</span>
                    </div>

                    <form onSubmit={Registrar}>
                        <div className="select">
                            <select onChange={(e)=>setPrefijo(e.target.value)}>
                                { listaPrefijos.map((prefijo)=>(
                                    <option value={prefijo.TituloPersonaId} key={prefijo.TituloPersonaId}>
                                        {prefijo.TituloPersonaDesc}
                                    </option>
                                ))
                                }
                            </select>
                            <input type="text" placeholder="Nombre (10 caracteres)" maxLength={10}/>
                        </div>

                        <div className="apellidos">
                            <input 
                                type="text" 
                                value={apellidoP} 
                                onChange={(e)=>setApellidoP(e.target.value)}
                                placeholder="Apellido Paterno (10 caracteres)"
                                maxLength={10}
                            />
                            <input 
                                type="text" 
                                value={apellidoM} 
                                onChange={(e)=>setApellidoM(e.target.value)}
                                placeholder="Apellido Materno (10 caracteres)"
                                maxLength={10}
                            />
                        </div>

                        <input type="text" placeholder="Correo"/>
                        <input type="text" placeholder="Contraseña"/>

                        <button type="submit">
                            Registrar
                        </button>
                    </form>

                    <button className="regresar" onClick={()=>navigate(`/perfil-partner/${data.PartnerUUID}`)}>
                        Regresar
                    </button>
                </div>
            </div>

            { pop &&
                <PopRegistro />
            }
        </div>
    );
}

export default RegistroPartner;