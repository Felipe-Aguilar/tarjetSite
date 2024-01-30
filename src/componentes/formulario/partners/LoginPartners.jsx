import ilustracion from '../../../assets/loginIlustracion.png';
import iconoOjo from '../../../assets/icono-ojo.svg';
import iconoOjoOculto from '../../../assets/icono-ojo-oculto.svg';
import { useState } from 'react';


const LoginPartners = () => {

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

    const IniciarSesion = async () => {
        
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