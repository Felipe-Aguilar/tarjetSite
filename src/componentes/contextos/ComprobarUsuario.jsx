const ComprobarUsuario = async (tokenURL) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaUsuXToken', {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "Token": tokenURL
        })
    });
    
    const data = await response.json();

    return data;
}

const DatosUsuario = async (idUsuario) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaMiTarjet?Usutarjetid=${idUsuario}`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

const DatosUsuarioTarjetSite = async (idUsuario) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaMiSite?Siteusuid=${idUsuario}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite };