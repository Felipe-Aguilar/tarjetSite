const ConsultaSegmento = async(datosUsuarioId) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaSegmentosXUsu/?Usutarjetid=${datosUsuarioId}&nivel=2`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ConsultaSegmento };