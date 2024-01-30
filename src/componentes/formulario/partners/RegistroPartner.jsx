import { useEffect, useState } from "react";
import { ListadoPrefijos } from "../../contextos/PrefijosListado";

const RegistroPartner = () => {

    const [listaPrefijos, setListaPrefijos] = useState([]);

    const [prefijo, setPrefijo] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');

    useEffect(()=>{

        const CargaDatos = async () =>{
            const prefijos = await ListadoPrefijos();
            setListaPrefijos(prefijos.sdtTitulos);
        }

        CargaDatos();

    },[]);

    const Registrar = (e) => {
        e.preventDefault();
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
                </div>
            </div>
        </div>
    );
}

export default RegistroPartner;