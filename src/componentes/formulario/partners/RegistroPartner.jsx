import { useEffect, useState } from "react";
import { ListadoPrefijos } from "../../contextos/PrefijosListado";
import { useNavigate } from "react-router-dom";

import PopRegistro from './PopRegistro';

const RegistroPartner = () => {

    const navigate = useNavigate();
    const [dataPartner, setDataPartner] = useState();
    const [pop, setPop] = useState(false);

    const [listaPrefijos, setListaPrefijos] = useState([]);

    const [prefijo, setPrefijo] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem('Partner'));

        if (!data) {
            navigate('/login-partners');
        }else{
            setDataPartner(data);
        }

        const CargaDatos = async () =>{
            const prefijos = await ListadoPrefijos();
            setListaPrefijos(prefijos.sdtTitulos);
        }

        CargaDatos();

    },[]);

    const [error, setError] = useState(false);

    const Registrar = async (e) => {
        e.preventDefault();

        if ((nombre && apellidoP && correo && password)) {
            setError(false);
            
            const response = await fetch('https://souvenir-site.com/WebTarjet/APIPartner/CrearCuenta', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    "RegistroUsu": {
                        "Nombre": nombre,
                        "ApellidoPat": apellidoP,
                        "ApellidoMat": apellidoM,
                        "Codigo": "",
                        "Correo": correo,
                        "Password": password,
                        "PartnerUUID": dataPartner.PartnerUUID,
                        "TipoAut": ""
                    }
                })
            });
            
            const data = await response.json();
            
            if (data.usuId) {
                setPop(true);
                
                setTimeout(()=>{
                    navigate(`/perfil-partner/${dataPartner.PartnerUUID}`);
                }, 5000);
            }
    
        }
        else{
            setError(true);
        }
        
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
                            <input 
                                type="text" 
                                placeholder="Nombre (10 caracteres)" 
                                maxLength={10}
                                value={nombre}
                                onChange={(e)=>setNombre(e.target.value)}
                            />
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

                        <input 
                            type="text" 
                            placeholder="Correo"
                            value={correo}
                            onChange={(e)=>setCorreo(e.target.value)}
                            maxLength={15}
                        />
                        <input 
                            type="text" 
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            maxLength={15}
                        />

                        { error &&
                            <div className="error">
                                <p>
                                    Uno de los campos se encuentra vacío, por favor intente nuevamente
                                </p>
                            </div>
                        }

                        <button type="submit" >
                            Registrar
                        </button>
                    </form>

                    <button className="regresar" onClick={()=>navigate(`/perfil-partner/${dataPartner.PartnerUUID}`)}>
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