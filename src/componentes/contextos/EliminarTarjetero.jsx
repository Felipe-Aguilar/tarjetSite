const EliminarTarjetero = async (IdUsuario, idEliminar) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/BajaTarjet', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "TarjetGIdUsuario": IdUsuario,
            "TarjetGIdTarjet": idEliminar,
        })
    });

    const data = await response.json();
    
    return data;
}

export { EliminarTarjetero };