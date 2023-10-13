const ColeccionTarjeta = async () => {
    const response = await fetch('https://systemweb.ddns.net/WebTarjet/ApiCatalogos/ListaTarjetas',{
        method: 'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const data = response.json();

    return data;
}

const ColeccionEncabezados = async () => {
    const response = await fetch('https://systemweb.ddns.net/WebTarjet/ApiCatalogos/ListaSiteHeader',{
        method: 'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const data = response.json();

    return data;
}

export { ColeccionTarjeta, ColeccionEncabezados }