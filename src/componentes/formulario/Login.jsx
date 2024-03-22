import { useState, useRef, useContext, useEffect, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';

import { CodigoCorreo, LoginApple, VerificarCodigo, VerificarCodigoApple } from '../contextos/ValidarCorreo';
import { enviarPostLogin } from '../contextos/EnviarPostLogin';
import { DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';
import { Sesion } from '../contextos/Sesion';

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

import AppleLogin from 'react-apple-login';
import { jwtDecode } from 'jwt-decode';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';


const Login = () => {

    ReactGA.initialize('G-MMCF7P3JG8');

    useEffect(()=>{

        // Google analytics
            // Establece el título de la página
        ReactGA.set({ page: window.location.pathname });
            // Envia una página vista al cargar el componente
        ReactGA.pageview(window.location.pathname);

        const localUsuarioSesion = localStorage.getItem('UsuarioSesion');
        const localUsuarioToken = JSON.parse(localStorage.getItem('DatosSesion'));
    
        if (localUsuarioSesion === 'true' ) {
            navigate('/'+ btoa(localUsuarioToken.UsuToken));
        }
    },[]);

    const navigate = useNavigate();

    // Estado Global de la sesión 
    const {sesionTrue} = useContext(Sesion);

    const [viewContraseña, setViewContraseña] = useState(false);
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [errorSend, setErrorSend] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
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
    const [acceso, setAcceso] = useState([]);

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

        const busqueda = await VerificarCodigo(codigo, email, password);

        setAcceso(busqueda);

        if (busqueda.Token) {
            setMensajeCodigo('');
            localStorage.setItem('UsuarioSesion', true);

            const datosUsuario = await DatosUsuario(busqueda.usuId);
            const datosSite = await DatosUsuarioTarjetSite(busqueda.usuId);

            localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));
            localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
            localStorage.setItem('IdDatosSesion', JSON.stringify(busqueda));

            setTimeout(()=>{

                sesionTrue();
                navigate(`/mi-perfil/${btoa(busqueda.Token)}`);

            }, 3000);
        }
    }

    // Enviar nuevamente
    const EnviarNuevamente = () =>{
        setMensajeCodigo('');
        Registrar();
    }

    // Apple login success
    const HandleAppleLogin = async (response) => {

        const idToken = await response.authorization.id_token;

        const decodedToken = jwtDecode(idToken);
        // console.log("Decodificado", decodedToken);

        const result = await VerificarCodigoApple(response, decodedToken);

        // console.log('resultado', result);

        if (result.Token) {

            const datosUsuario = await DatosUsuario(result.usuId);
            const datosSite = await DatosUsuarioTarjetSite(result.usuId);

            setTimeout(()=>{
                
                localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));                
                localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
                localStorage.setItem('IdDatosSesion', JSON.stringify(result));
                localStorage.setItem('UsuarioSesion', true);

                navigate(`/${btoa(result.Token)}`);

            }, 1000);

        }

        if (result.Mensaje.length === 158) {
            const respuesta = await LoginApple(decodedToken);

            const datosUsuario = await DatosUsuario(respuesta.usuId);
            const datosSite = await DatosUsuarioTarjetSite(respuesta.usuId);

            setTimeout(()=>{
                
                localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));                
                localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
                localStorage.setItem('UsuarioSesion', true);
                localStorage.setItem('IdDatosSesion', JSON.stringify(respuesta));

                if (respuesta.Token) {
                    navigate(`/${btoa(respuesta.Token)}`);
                }

            }, 1000);
        }
        
    }

    return ( 
        <div className='backgroun-Green'>

            

            <div className="container-fluid loginFormulario background-image">

                <div className='ilustracion-banner'>
                    <img src={ ilustracion } alt="" />
                </div>

                <div className='texto'>
                    <h1>Listo para conectar con personas y negocios. </h1>

                    <h2>CREA TU CUENTA TARJET ó <br /> INICIA SESIÓN</h2>

                    <p>
                        Elige la opción de tu agrado <br/>
                        <span>continuar con...</span>
                    </p>
                </div>

                <div className='iniciarSesion'>
                    <GoogleOAuthProvider clientId="795705014478-07c6ktiul0e14v0phdibro00h17lmgh5.apps.googleusercontent.com">
                        {/* <button onClick={()=>setMode('telefono')}>
                            <img src={iconoTelefono} />
                            Teléfono
                        </button> */}
                        <button onClick={()=>setMode('correo')} type='button'>
                            <img src={iconoCorreo} />
                            Correo
                        </button>

                        <BtnGoogle />

                        {/* <button>
                            <img src={iconoFacebook} />
                            Facebook
                        </button> */}

                        {/* <button type='button'>
                            <img src={iconoApple} />
                            Apple
                        </button> */}

                        <AppleLogin 
                            clientId="site.tarjet.client"
                            redirectURI="https://tarjet.site"
                            state='origin:web'
                            scope = "name email"
                            responseType={"code"} 
                            responseMode={"query"}  
                            callback={HandleAppleLogin}
                            onError={(error) => console.error(error)}
                            usePopup={true}
                            render={(props) => (
                                <button type='button' onClick={props.onClick} disabled={props.disabled}>
                                    <img src={iconoApple} />
                                    Apple
                                </button>
                            )}
                        />

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

                    {errorLogin &&
                        <div className='mensajeError'>
                            <p>Correo o contraseña incorrectos</p>
                        </div>
                    }

                    <div className='buttons'>
                        <div className={`registrar ${!checkButton && 'desactivate'}`}>
                            <button onClick={Registrar} type='button'>
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
                                    { acceso.Token === "" &&
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
                            { acceso.Token &&
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
        </div>
    );
}

export default Login;