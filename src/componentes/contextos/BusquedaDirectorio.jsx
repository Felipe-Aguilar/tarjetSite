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
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();
    
    return dataUsuario;
}

const BusquedaNombre = async (nombre) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=${nombre}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    if (dataUsuario.ListTarjets.length === 0) {
        const response2 = await fetch(`https://systemweb.ddns.net/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=${nombre}&Nombre=`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const dataUsuario2 = await response2.json();

        return dataUsuario2;
    }
    
    return dataUsuario;
}

const BusquedaNivel3 = async (nivel) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIDirectorio/BuscaXCategoria?Categoriaid=${nivel}`, {
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

const ObtenerSegmentos = async (descripcion) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ObtenerSegmentos?Descripcion=${descripcion}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

export { BusquedaCategoria, ConsultaActividad, ConsultaNivel3, BusquedaNombre, BusquedaNivel3, ObtenerSegmentos};