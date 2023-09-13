const DatosEditaPerfil = async (idUsuario) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaUsu?Usuid=${idUsuario}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { DatosEditaPerfil }