const BusquedaCategoria = async () => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=&Nivel2=', {
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
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=${idCategoriaSeleccionada}&Nivel2=`, {
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
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ConsultaCategorias?Nivel1=${idCategoriaSeleccionada}&Nivel2=${idActividad}`, {
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
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=${nombre}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    if (dataUsuario.ListTarjets.length === 0) {
        const response2 = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=${nombre}&Nombre=`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const dataUsuario2 = await response2.json();

        if (dataUsuario2.ListTarjets.length === 0) {
            const response3 = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=&Alias=${nombre}`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const dataUsuario3 = await response3.json();

            return dataUsuario3;
        }

        return dataUsuario2;
    }
    
    return dataUsuario;
}

const BusquedaAlias = async (alias) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=&Alias=${alias}`, {
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

const BusquedaNivel3 = async (nivel) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXCategoria?Categoriaid=${nivel}`, {
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
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ObtenerSegmentos?Descripcion=${descripcion}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

const BusquedaNombreRango = async (nombre, latitud, longitud ) => {

    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=${nombre}&Latitud=${latitud}&Longitud=${longitud}&Radio=200`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    if (dataUsuario.ListTarjets.length === 0) {
        const response2 = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=${nombre}&Nombre=&Latitud=${latitud}&Longitud=${longitud}&Radio=5000`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const dataUsuario2 = await response2.json();

        if (dataUsuario2.ListTarjets.length === 0) {
            const response3 = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXDesc?Actividad=&Nombre=&Alias=${nombre}&Latitud=${latitud}&Longitud=${longitud}&Radio=5000`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const dataUsuario3 = await response3.json();

            return dataUsuario3;
        }

        return dataUsuario2;
    }
    
    return dataUsuario;
}

const BusquedaNivel3Rango = async (nivel, latitud, longitud) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/BuscaXCategoria?Categoriaid=${nivel}&Latitud=${latitud}&Longitud=${longitud}&Radio=5000`, {
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

export { BusquedaCategoria, ConsultaActividad, ConsultaNivel3, BusquedaNombre, BusquedaAlias, BusquedaNivel3, ObtenerSegmentos, BusquedaNombreRango, BusquedaNivel3Rango};