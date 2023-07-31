const enviarPostLogin = async (usuarioForm, passwordForm) => {

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIUsuDtos/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "Cuenta": usuarioForm,
            "Password": passwordForm,
        })
    });
    const data = await response.json();

    return data;
}

export { enviarPostLogin };