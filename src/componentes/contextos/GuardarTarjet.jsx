const GuardarTarjet = (IdSesion, IdTarjet) => {
    fetch('https://systemweb.ddns.net/WebTarjet/APIUsuDtos/GuardaTarjet', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "TarjetGIdUsuario": IdSesion,
            "TarjetGIdTarjet": IdTarjet,
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export { GuardarTarjet };