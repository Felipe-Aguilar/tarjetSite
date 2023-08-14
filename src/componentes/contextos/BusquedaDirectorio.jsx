const BusquedaCategoria = async () => {
    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=&Nivel2=', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

const ConsultaActividad = async (idCategoriaSeleccionada) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=${idCategoriaSeleccionada}&Nivel2=`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

const ConsultaNivel3 = async (idCategoriaSeleccionada, idActividad) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=${idCategoriaSeleccionada}&Nivel2=${idActividad}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

export { BusquedaCategoria, ConsultaActividad, ConsultaNivel3};