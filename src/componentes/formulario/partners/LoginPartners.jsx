import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ilustracion from '../../../assets/loginIlustracion.png';
import iconoOjo from '../../../assets/icono-ojo.svg';
import iconoOjoOculto from '../../../assets/icono-ojo-oculto.svg';


const LoginPartners = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('Partner'));

        if (data) {
            navigate(`/perfil-partner/${data.PartnerUUID}`);
        }
        
    },[]);

    const [viewPassword, setViewPassword] = useState(false);
    const [error, setError] = useState(false);
    const [incorrect, setIncorrect] = useState(false);


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const onChangePassword = (e) => {
        setPassword(e.target.value.trim());

        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!regex.test(e.target.value)) {
            setError(true);
        }else{
            setError(false);
        }
    }

    const IniciarSesion = async (e) => {
        e.preventDefault();

        const response = await fetch('https://souvenir-site.com/WebTarjet/APIPartner/LoginPartner',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                "Cuenta" : user,
                "Password" : password
            })
        });

        const data = await response.json();

        if (!data.Acceso) {
            setIncorrect(true);
        }else{
            setIncorrect(false);

            localStorage.setItem("Partner", JSON.stringify(data));
            navigate(`/perfil-partner/${data.PartnerUUID}`);
        }
    }

    return ( 
        <div className="backgroun-Green">
            <div className="container-fluid loginPartners background-image">

                <div className="Title">
                    <img src={ilustracion} alt="ilustración login" />
                    <h1>Diseñadores Tarjet</h1>
                </div>

                <hr/>

                <form onSubmit={IniciarSesion}>
                    <input 
                        type="text" 
                        placeholder='Usuario / Teléfono' 
                        value={user}
                        onChange={(e)=>setUser(e.target.value.trim())}
                    />

                    <div className='password'>
                        <input 
                            type={viewPassword ? 'text' : 'password'} 
                            placeholder='Contraseña'
                            value={password}
                            onChange={onChangePassword}
                        />
                        <button type='button' onClick={()=>setViewPassword(!viewPassword)}>
                            { viewPassword
                                ? (<img src={iconoOjo}  />)
                                : (<img src={iconoOjoOculto}  />)
                            }
                        </button>
                    </div>

                    <a href="/">¿Olvidaste tu contraseña?</a>
                    
                    { error &&
                        <div className='error'>
                                <p>La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.</p>
                        </div>
                    }

                    <hr/>

                    { incorrect &&
                        <div className="error">
                            <p>
                                Usuario o contraseña incorrectos
                            </p>
                        </div>
                    }

                    <div className='iniciar'>
                        <button type='submit'>
                            Iniciar sesión
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default LoginPartners;