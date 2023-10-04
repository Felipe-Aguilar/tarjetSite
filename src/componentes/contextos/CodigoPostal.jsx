const CodigoPostal = async (codigo) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/ApiCatalogos/ListaColonias?CPID=${codigo}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { CodigoPostal }