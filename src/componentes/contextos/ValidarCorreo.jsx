const CodigoCorreo = async(email) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/EnviarCodigoOTP?Nombre=&Email=${email}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

const VerificarCodigo = async(codigo, correo, password) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/ValidarCodigoOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "RegistroUsu": {
                "Nombre": "",
                "ApellidoPat": "",
                "ApellidoMat": "",
                "Codigo": codigo,
                "Correo": correo,
                "Password": password
            }
        })
    });
    const data = await response.json();
    return data;
}

const VerificarCodigoGoogle = async(codigo) => {
    console.log(codigo);
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/ValidarCodigoOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "RegistroUsu": {
                "Nombre": "",
                "ApellidoPat": "",
                "ApellidoMat": "",
                "Codigo": codigo,
                "Correo": "",
                "Password": "",
                "TipoAut": "G"
            }
        })
    });
    const data = await response.json();
    
    return data;
}

const LoginGoogle = async (password) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: JSON.stringify({
            "Cuenta": "",
            "Password": password,
            "tipoLogin": "G"
        })
    });
    const data = await response.json();

    return data;
}

const VerificarCodigoApple = async (dates, decodedToken) => {

    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/ValidarCodigoOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "RegistroUsu": {
                "Nombre": dates.user?.name.firstName ? dates.user.name.firstName : '',
                "ApellidoPat": dates.user?.name.lastName ? dates.user.name.lastName : '',
                "ApellidoMat": "",
                "Codigo": decodedToken.sub,
                "Correo": dates.user?.email ? dates.user.email : '',
                "Password": decodedToken.sub,
                "TipoAut": "A"
            }
        })
    });
    const data = await response.json();
    
    return data;
}

const LoginApple = async (decodedToken) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: JSON.stringify({
            "Cuenta": "",
            "Password": decodedToken.sub,
            "tipoLogin": "A"
        })
    });
    const data = await response.json();

    return data;
}

export { CodigoCorreo, VerificarCodigo, VerificarCodigoGoogle, LoginGoogle, VerificarCodigoApple, LoginApple }