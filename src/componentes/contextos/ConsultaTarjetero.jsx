
const ConsultaTarjetero = async( datosUsuarioId ) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}`, {
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

const ConsultaTarjeteroFiltro = async(datosUsuarioId, segmentoId) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}&Segmentoid=${segmentoId}&nivel=2`, {
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

const ConsultaTarjeteroNombre = async (datosUsuarioId, nombre) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}&Nombre=${nombre}`, {
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

export  { ConsultaTarjetero, ConsultaTarjeteroFiltro, ConsultaTarjeteroNombre };