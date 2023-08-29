const CodigoCorreo = async(email) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/EnviarCodigoOTP?Nombre=&Email=${email}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

const VerificarCodigo = async(codigo, correo) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ValidarCodigoOTP?Codigo=${codigo}&Email=${correo}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

export { CodigoCorreo, VerificarCodigo }