const ColeccionTarjeta = async () => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/ApiCatalogos/ListaTarjetas',{
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
    const response = await fetch('https://souvenir-site.com/WebTarjet/ApiCatalogos/ListaSiteHeader',{
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const data = response.json();

    return data;
}

export { ColeccionTarjeta, ColeccionEncabezados }