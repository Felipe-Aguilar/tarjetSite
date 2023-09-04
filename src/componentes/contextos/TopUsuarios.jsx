const UltimosGenerados = async () => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIDirectorio/ObtenerTopTarjets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

export { UltimosGenerados }