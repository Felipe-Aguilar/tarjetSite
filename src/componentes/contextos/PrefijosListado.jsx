const ListadoPrefijos = async () => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APICatalogos/ListaTitulos`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ListadoPrefijos }