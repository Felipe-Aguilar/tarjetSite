const UltimosGenerados = async () => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIDirectorio/ObtenerTopTarjets`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

export { UltimosGenerados }