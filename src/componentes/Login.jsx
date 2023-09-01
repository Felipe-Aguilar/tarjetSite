import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';
import { enviarPostLogin } from './contextos/EnviarPostLogin';
import { DatosUsuario, DatosUsuarioTarjetSite } from './contextos/ComprobarUsuario';

import { DatosUsuarioSesion } from './contextos/DatosUsuarioSesion';

import LogoTarjet from '../assets/TarjetNegro.png';

// import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

// import ReactFacebookLogin from 'react-facebook-login';


const Login = () => {

    const navigate = useNavigate();
    const ClientId = '393133257698-k2hpihl9oq7frjeg0ak8a49vus22g8rs.apps.googleusercontent.com';
    
    // Actualización Mi perfil tarjet.mx 
    useEffect(()=>{

        const localUsuarioSesion = localStorage.getItem('UsuarioSesion');
        const localUsuarioToken = JSON.parse(localStorage.getItem('DatosSesion'));
    
        if (localUsuarioSesion === 'true' ) {
            navigate('/'+ btoa(localUsuarioToken.UsuToken));
        }

        // Botón de Google
        const start = () => {
            gapi.auth2.init({
                clientId: ClientId
            });
        }
        gapi.load("client: auth2", start);

    },[]);

    const { setDatosUsuario, setDatosUsuarioId } = useContext(DatosUsuarioSesion);

    // Estado Global de la sesión 
    const {sesionTrue} = useContext(Sesion);
    
    const [usuarioForm, setUsuarioForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');
    
    const [errorLogin, setErrorLogin] = useState();
    const [errorLogin2, setErrorLogin2] = useState();

    const comprobar = async (e) => {
        e.preventDefault();

        if (usuarioForm == '' || passwordForm == '') {
            setErrorLogin(true);
        }else{
            
            setErrorLogin(false);

            const datosLogin = await enviarPostLogin(usuarioForm, passwordForm);

            // console.log(datosLogin);

            if (!datosLogin.Acceso){
                setErrorLogin2(true);
            }else{
                setErrorLogin2(false);

                const datosUsuario = await DatosUsuario(datosLogin.usuId);
                // console.log(datosUsuario);
                setDatosUsuario(datosUsuario);
                setDatosUsuarioId(datosLogin.usuId);

                navigate('/' + btoa(datosUsuario.UsuToken));
                
                sesionTrue();
                localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));
                localStorage.setItem('IdDatosSesion', JSON.stringify(datosLogin));

                // Cachar datos en localstorage de tarjetSite
                const datosSite = await DatosUsuarioTarjetSite(datosLogin.usuId);
                localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
            }
        }
    }

    return ( 
        <div className='container-fluid vh-100 login'>
            <div className='row justify-content-center align-items-center h-100'>
                
                    <div className='col-12 col-md-4'>
                        <img src={LogoTarjet} />
                        <h1>Iniciar Sesión</h1>

                        <div className='w-auto cuerpo-login'>
                            <form onSubmit={comprobar}>
                                <label>Usuario</label>
                                <input 
                                    type="text" 
                                    value={usuarioForm} 
                                    onChange={(e)=>{setUsuarioForm(e.target.value)}}
                                />
                                <label>Contraseña</label>
                                <input type="password"
                                    value={passwordForm}
                                    onChange={(e)=>{setPasswordForm(e.target.value)}}
                                />


                                <button type='submit'>
                                    Iniciar sesión
                                </button>
                            </form>
                            
                            { errorLogin ?
                                <div className='error-cuerpo'>
                                    <p>Falta uno o más campos por llenar</p>
                                </div>
                            :
                                <></>
                            }
                            { errorLogin2 ?
                                <div className='error-cuerpo'>
                                    <p>Usuario o cantraseña incorrectos</p>
                                </div>
                            :
                                <></>
                            }
                            <p>
                                ¿Aún no tienes una cuenta? <a onClick={()=>navigate('/registro')}> Regístrate</a>
                            </p>
                        </div>

                        {/* Botones Google y Facebook */}
                        {/* <div>
                            <GoogleLogin 
                                clientId={ClientId}
                                buttonText="Iniciar sesión con Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />

                            <ReactFacebookLogin 
                                appId='659119219442397'
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                            />
                        </div> */}

                    </div>
            </div>
        </div>
    );
}

export default Login;