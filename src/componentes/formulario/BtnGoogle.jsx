import { useGoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

import iconoGoogle from '../../assets/icono-google.svg';

const BtnGoogle = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return ( 
        <button onClick={() => login()}>
            <img src={iconoGoogle} />
            Google
        </button>
    );
}

export default BtnGoogle;