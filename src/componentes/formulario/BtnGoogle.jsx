import { useGoogleLogin } from '@react-oauth/google';
import { VerificarCodigoGoogle, LoginGoogle } from '../contextos/ValidarCorreo';
import { useNavigate } from 'react-router-dom';
import { DatosUsuario } from '../contextos/ComprobarUsuario';
import { DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';

import iconoGoogle from '../../assets/icono-google.svg';

const BtnGoogle = () => {

    const navigate = useNavigate();

    const Registro = async (tokenResponse) => {

        const response = await VerificarCodigoGoogle(tokenResponse.access_token);

        if (response.Token) {

            const datosUsuario = await DatosUsuario(response.usuId);
            const datosSite = await DatosUsuarioTarjetSite(response.usuId);

            setTimeout(()=>{
                
                localStorage.setItem('DatosSesion', JSON.stringify(datosUsuario));                
                localStorage.setItem('DatosTarjetSite', JSON.stringify(datosSite.SDTSite));
                localStorage.setItem('IdDatosSesion', JSON.stringify(response));
                localStorage.setItem('UsuarioSesion', true);

                navigate(`/${btoa(response.Token)}`);

            }, 1000);

        }
        if (response.Mensaje.length === 158) {

            const respuesta = await LoginGoogle(tokenResponse.access_token);
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

    const login = useGoogleLogin({
        onSuccess: tokenResponse => Registro(tokenResponse)
    });

    return ( 
        <button onClick={() => login()}>
            <img src={iconoGoogle} />
            Google
        </button>
    );
}

export default BtnGoogle;