const ConsultaSegmento = async(datosUsuarioId) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaSegmentosXUsu/?Usutarjetid=${datosUsuarioId}&nivel=2`, {
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

export { ConsultaSegmento };