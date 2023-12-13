const GuardarTarjet = async (IdSesion, IdTarjet) => {
    const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/GuardaTarjet', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "TarjetGIdUsuario": IdSesion,
            "TarjetGIdTarjet": IdTarjet,
        })
    });

    const data = await response.json();

    return data; 
    
}

export { GuardarTarjet };