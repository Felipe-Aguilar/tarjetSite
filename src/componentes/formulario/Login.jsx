import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ilustracion from '../../assets/loginIlustracion.png';
import iconoTelefono from '../../assets/icono-dispositivo.svg';
import iconoCorreo from '../../assets/icono-correo.svg';
import iconoGoogle from '../../assets/icono-google.svg';
import iconoFacebook from '../../assets/icono-facebook.svg';
import iconoApple from '../../assets/icono-apple.svg';
import iconoOjo from '../../assets/icono-ojo.svg';
import iconoOjoOculto from '../../assets/icono-ojo-oculto.svg';


const Login = () => {

    const navigate = useNavigate();

    const [viewContraseña, setViewContraseña] = useState(false);
    const [error, setError] = useState(false);
    const [checkButton, setCheckButton] = useState(false);


    return ( 
        <div className="container-fluid loginFormulario">

            <div className='ilustracion-banner'>
                <img src={ ilustracion } alt="" />
            </div>

            <div className='texto'>
                <h1>Listo para conectar de forma innovadora con personas y negocios</h1>

                <h2>CREA TU CUENTA TARJET ó <br /> INICIA SESIÓN</h2>

                <p>
                    Elige la opción que más te agrade, <br/>
                    <span>continuar con...</span>
                </p>
            </div>

            <div className='iniciarSesion'>
                <button>
                    <img src={iconoTelefono} />
                    Teléfono
                </button>
                <button>
                    <img src={iconoCorreo} />
                    Correo
                </button>
                <button>
                    <img src={iconoGoogle} />
                    Google
                </button>
                <button>
                    <img src={iconoFacebook} />
                    Facebook
                </button>
                <button>
                    <img src={iconoApple} />
                    Apple
                </button>
            </div>

            <div className='separador'>
                <hr/>
            </div>

            <div className='formulario'>
                <form>
                    <div className='row1'>
                        <div className='selec'>
                            <label htmlFor='number'>País</label>

                            <select id="number">
                                <option value="" key="">+52</option>
                            </select>
                        </div>

                        <div className='number'>
                            <input type="text" maxLength={10} placeholder='Número de teléfono móvil'/>
                        </div>
                    </div>

                    <div className='row2'>
                        <input 
                            type={`${!viewContraseña ? 'password' : 'text'}`} 
                            placeholder='Escribe tu contraseña'
                        />

                        <div className='eye'>
                            <button onClick={()=>setViewContraseña(!viewContraseña)}>
                                { !viewContraseña ?
                                    <img src={iconoOjo} />
                                    :
                                    <img src={iconoOjoOculto} />
                                }
                            </button>
                        </div>
                    </div>
                    
                </form>
            </div>

            { !error &&
                <div className='mensajeError'>
                    <p>Mínimo 8 caracteres, letras y números</p>
                </div>
            }

            <div className='separador sep2'>
                <hr/>
            </div>

            <div className='privacidad'>
                <div className='check'>
                    <input 
                        type="checkbox" 
                        id='accept' 
                        checked={checkButton}
                        onChange={(e)=>setCheckButton(e.target.checked)}
                    />

                    <label htmlFor='accept'>
                        Acepto las <a href="">condiciones de uso</a> <br/>
                        y la <a onClick={()=>navigate('/aviso-privacidad')}>política de privacidad</a>
                    </label>
                </div>

                <div className='buttons'>
                    <div className={`registrar ${!checkButton && 'desactivate'}`}>
                        <button>Registrar</button>
                    </div>
                    <div className={`iniciar ${!checkButton && 'desactivate'}`}>
                        <button>Iniciar sesión</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;