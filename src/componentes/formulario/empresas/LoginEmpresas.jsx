import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sesion } from '../../contextos/Sesion';
import { DatosUsuario, DatosUsuarioTarjetSite } from '../../contextos/ComprobarUsuario';

import { enviarPostLogin } from '../../contextos/EnviarPostLogin';

import ilustracion from '../../../assets/ilustracion-empresarial.webp';
import iconoOjo from '../../../assets/icono-ojo.svg';
import iconoOjoOculto from '../../../assets/icono-ojo-oculto.svg';

const LoginEmpresas = () => {

    const navigate = useNavigate();

    useEffect(()=>{

        const localUsuarioSesion = localStorage.getItem('UsuarioSesion');
        const localUsuarioToken = JSON.parse(localStorage.getItem('DatosSesion'));
    
        if (localUsuarioSesion === 'true' ) {
            navigate('/'+ btoa(localUsuarioToken.UsuToken));
        }

    },[]);


    // Estado Global de la sesión 
    const {sesionTrue} = useContext(Sesion);

    const [viewContraseña, setViewContraseña] = useState(false);
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [errorSend, setErrorSend] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);

    const [mode, setMode] = useState('correo');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    // Verificar número (10 caracteres y sólo números)
    // const changeNumero = (e) => {
    //     const numero = e.target.value.replace(/\D/g, '');
    //     setTelefono(numero);

    //     if (numero.length < 10) {
    //         setError('Por favor agregue un número de teléfono válido');
    //     }else{
    //         setError('');
    //     }
    // }

    // Verificar Email
    const changeEmail = (e) =>{
        setEmail(e.target.value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
            setError('Introduce una dirección de correo válida');
        }else{
            setError('');
        }
    }

    // Verificar password
    const changePassword = (e) => {
        setPassword(e.target.value);

        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(e.target.value)) {
            setError2('La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.');
        }else{
            setError2('');
        }
    }

    // IniciarSesión
    const IniciarSesion = async () =>{     
        if (error || error2 || email === '' || password === '') {
            setErrorSend('Falta uno o más campos por llenar');
        }else{
            setErrorSend('');

            const datosLogin = await enviarPostLogin(email, password);

            if (!datosLogin.Acceso) {
                setErrorLogin(true);
            }
            else{
                setErrorLogin(false);

                const datosUsuario = await DatosUsuario(datosLogin.usuId);

                
                
                localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));
                localStorage.setItem('IdDatosSesion', JSON.stringify(datosLogin));
                
                // Cachar datos en localstorage de tarjetSite
                const datosSite = await DatosUsuarioTarjetSite(datosLogin.usuId);
                localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
                
                localStorage.setItem('UsuarioSesion', true);
                
                
                await sesionTrue();
                window.location.reload(true);
                navigate('/' + btoa(datosUsuario.UsuToken));
            }
        }
    }

    return ( 
        <div className='backgroun-Green'>
            
            <div className="container-fluid loginFormulario login-empresas background-image">

                <div className='ilustracion-banner'>
                    <img src={ ilustracion } alt="" />
                </div>

                <div className='texto'>
                    <h1>Empresarial</h1>

                    <h2>Inicia sesión</h2>
                </div>

                <div className='separador'>
                    <hr/>
                </div>

                <div className='formulario'>
                    
                    {/* { mode === 'telefono' &&
                        <form>
                            <div className='row1'>
                                <div className='selec'>
                                    <label htmlFor='number'>País</label>

                                    <select id="number">
                                        <option value="" key="">+52</option>
                                    </select>
                                </div>

                                <div className='number'>
                                    <input 
                                        type="text" 
                                        inputMode="numeric" maxLength={10} 
                                        placeholder='Número de teléfono móvil'
                                        value={telefono}
                                        onChange={changeNumero}
                                    />
                                </div>
                            </div>

                            <div className='row2'>
                                <input 
                                    type={`${!viewContraseña ? 'password' : 'text'}`} 
                                    placeholder='Escribe tu contraseña'
                                    value={password}
                                    onChange={changePassword}
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
                    } */}
                
                    { mode === 'correo' &&
                        <form>
                            <div className='row1 row12'>
                                <div className='number'>
                                    <input 
                                        type="email" 
                                        placeholder='Correo electrónico'
                                        value={email}
                                        onChange={changeEmail}
                                    />
                                </div>
                            </div>

                            <div className='row2'>
                                <input 
                                    type={`${!viewContraseña ? 'password' : 'text'}`} 
                                    placeholder='Escribe tu contraseña'
                                    value={password}
                                    onChange={changePassword}
                                />

                                <div className='eye'>
                                    <button onClick={()=>setViewContraseña(!viewContraseña)} type='button'>
                                        { !viewContraseña ?
                                            <img src={iconoOjo} />
                                            :
                                            <img src={iconoOjoOculto} />
                                        }
                                    </button>
                                </div>
                            </div>
                        
                        </form>
                    }
                    
                </div>

                <div className='olvidaste-contraseña'>
                    <button type='button'>
                        ¿Olvidaste tu contraseña?
                    </button>
                </div>

                { (error || error2) &&
                    <div className='mensajeError'>
                        <p>{error}</p>
                        <p>{error2}</p>
                    </div>
                }

                <div className='separador sep2'>
                    <hr/>
                </div>

                <div className='privacidad'>
                    {/* <div className='check'>
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
                    </div> */}

                    { errorSend &&
                        <div className='mensajeError'>
                            <p>{errorSend}</p>
                        </div>
                    }

                    {errorLogin &&
                        <div className='mensajeError'>
                            <p>Correo o contraseña incorrectos</p>
                        </div>
                    }

                    <div className='buttons'>
                        <div className={`iniciar`}>
                            <button onClick={IniciarSesion}>Iniciar sesión</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginEmpresas;