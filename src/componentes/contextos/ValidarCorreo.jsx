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

const VerificarCodigo = async(codigo, correo, password) => {
    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ValidarCodigoOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "RegistroUsu": {
                "Nombre": "Nombre",
                "ApellidoPat": "ApellidoPat",
                "ApellidoMat": "ApellidoMat",
                "Codigo": codigo,
                "Correo": correo,
                "Password": password
            }
        })
    });
    const data = await response.json();
    return data;
}

export { CodigoCorreo, VerificarCodigo }