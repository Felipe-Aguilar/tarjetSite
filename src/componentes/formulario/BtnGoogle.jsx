import { useGoogleLogin } from '@react-oauth/google';
import { VerificarCodigoGoogle, LoginGoogle } from '../contextos/ValidarCorreo';
import { useNavigate } from 'react-router-dom';

import iconoGoogle from '../../assets/icono-google.svg';

const BtnGoogle = () => {

    const navigate = useNavigate();

    const Registro = async(tokenResponse) => {
        console.log(tokenResponse);
        const response = await VerificarCodigoGoogle(tokenResponse.access_token);

        console.log(response);

        if (response.tokenResponse) {

            setTimeout(()=>{
                navigate(`/${btoa(response.Token)}`);
            }, 2000);

        }

        // const res = await LoginGoogle(tokenResponse.access_token);
        // console.log(res);
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