import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';

import { CodigoCorreo, VerificarCodigo } from '../contextos/ValidarCorreo';

import ilustracion from '../../assets/loginIlustracion.png';
import ilustracionExitoso from '../../assets/ilustracion-registro-exitoso.png';
import iconoTelefono from '../../assets/icono-dispositivo.svg';
import iconoCorreo from '../../assets/icono-correo.svg';
import iconoGoogle from '../../assets/icono-google.svg';
import iconoFacebook from '../../assets/icono-facebook.svg';
import iconoApple from '../../assets/icono-apple.svg';
import iconoOjo from '../../assets/icono-ojo.svg';
import iconoOjoOculto from '../../assets/icono-ojo-oculto.svg';

import BtnGoogle from './btnGoogle';

const Login = () => {

    const navigate = useNavigate();

    const [viewContraseña, setViewContraseña] = useState(false);
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [errorSend, setErrorSend] = useState('');
    const [checkButton, setCheckButton] = useState(false);

    const [mode, setMode] = useState('correo');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [popValidar, setPopValidar] = useState(false);
    const [mensajeCodigo, setMensajeCodigo] = useState('');

    
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
    const IniciarSesion = () =>{     
        if (error || email === '' || password === '') {
            setErrorSend('Falta uno o más campos por llenar');
        }else{
            setErrorSend('');
        }
    }

    // Registrar
    const Registrar = async () => {
        if (error || error2 || email === '' || password === '') {
            setErrorSend('Falta uno o más campos por llenar');
        }
        else{
            setErrorSend('');
            setPopValidar(true);
            
            const busqueda = await CodigoCorreo(email);
            setMensajeCodigo(busqueda.Mensaje);
        }
    }

    // Animaciones Pop
    const animation = {
        initial: {scale: 0},
        animate: {scale: 1},
        exit: {scale: 0}
    }

    
    // InputsNúmeros
    const inputRefs = Array(6).fill(null).map(()=>useRef(null));
    const [codigos, setCodigos] = useState(Array(6).fill(''));
    const [codigo, setCodigo] = useState('');
    const [mensajeAcceso, setMensajeAcceso] = useState('');

    const numeroChange = (index, value) => {

        const codigo = value.replace(/\D/g, '');
        const regex = /^\d+$/;

        const newCodigo = [...codigos];
        newCodigo[index] = codigo;
        setCodigos(newCodigo);
        setCodigo(newCodigo.join(''));

        // Verifica que sea números
        if (regex.test(codigo)) {
    
            // Mueve el enfoque al siguiente
            if (value !== '' && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        }

    }

    // Verificar código de email
    const btnVerificarCodigo = async() => {

        const busqueda = await VerificarCodigo(codigo, email);
        setMensajeAcceso(busqueda.Mensaje);

        if (busqueda.Mensaje.length === 121) {
            setMensajeCodigo('');
        }
    }

    // Enviar nuevamente
    const EnviarNuevamente = () =>{
        setMensajeCodigo('');
        Registrar();
    }

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
                <GoogleOAuthProvider clientId="795705014478-07c6ktiul0e14v0phdibro00h17lmgh5.apps.googleusercontent.com">
                    {/* <button onClick={()=>setMode('telefono')}>
                        <img src={iconoTelefono} />
                        Teléfono
                    </button> */}
                    <button onClick={()=>setMode('correo')}>
                        <img src={iconoCorreo} />
                        Correo
                    </button>

                    <BtnGoogle />

                    {/* <button>
                        <img src={iconoFacebook} />
                        Facebook
                    </button> */}
                    <button>
                        <img src={iconoApple} />
                        Apple
                    </button>
                </GoogleOAuthProvider>
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
                }
                
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

                { errorSend &&
                    <div className='mensajeError'>
                        <p>{errorSend}</p>
                    </div>
                }

                <div className='buttons'>
                    <div className={`registrar ${!checkButton && 'desactivate'}`}>
                        <button onClick={Registrar}>
                            Registrar
                        </button>
                    </div>
                    <div className={`iniciar ${!checkButton && 'desactivate'}`}>
                        <button onClick={IniciarSesion}>Iniciar sesión</button>
                    </div>
                </div>
            </div>

            { popValidar &&
                <div className='popValidar'>
                    <AnimatePresence>
                        { mensajeCodigo &&
                            <motion.div 
                                className='cuerpo-pop'
                                {...animation}
                            >
                                <div className='encabezado'>
                                    <h5>Verifica tu correo</h5>
                                </div>
                                <div className='cuerpo'>
                                    { codigos.map((codigo, index)=> (
                                        <input 
                                            key={index}
                                            ref={inputRefs[index]}
                                            type="text" 
                                            maxLength={1}
                                            value={codigo}
                                            onChange={(e)=>numeroChange(index, e.target.value)}
                                        />
                                    ))
                                    }
                                </div>
                                <div className='mensaje'>
                                    <p>
                                        {mensajeCodigo}
                                    </p>
                                </div>
                                <div className='reintentar'>
                                    <p>
                                        ¿No te llegó el código? <span onClick={EnviarNuevamente}>Enviar nuevamente</span>
                                    </p>
                                </div>
                                { mensajeAcceso.length === 200 &&
                                    <div className='error'>
                                        <p>
                                            Código no válido, segúrese de ingresar el código exacto que le fue proporcionado. Si está teniendo dificultades, no dude en solicitar un nuevo código
                                        </p>
                                    </div>
                                }
                                <div className='footer'>
                                    <button className={codigo.length < 6 ? 'desactivate' : ''} onClick={btnVerificarCodigo}>
                                        Verificar código
                                    </button>
                                </div>
                                <div className='cerrar'>
                                    <button onClick={()=>setPopValidar(false)}>
                                        Cerrar ventana (x)
                                    </button>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <AnimatePresence>
                        { mensajeAcceso.length === 121 &&
                            <motion.div 
                                className='cuerpo-pop'
                                {...animation}
                            >
                                <div className='encabezado-img'>
                                    <img src={ilustracionExitoso}/>
                                </div>
                                <div className='encabezado mb-0'>
                                    <h5>Registro exitoso</h5>
                                </div>

                                <div className='footer'>
                                    <button>
                                        Accede a tu menú
                                    </button>
                                </div>

                                <div className='mensaje'>
                                    <p>
                                        para configurar tu Tarjet y tu Tarjet Site
                                    </p>
                                </div>

                                {/* <div className='cerrar'>
                                    <button onClick={()=>setPopValidar(false)}>
                                        Cerrar ventana (x)
                                    </button>
                                </div> */}
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            }

        </div>
    );
}

export default Login;