// Segundo servicio
const SubirImagenSegundo = async (token, tipo, imagen) => {

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/ServiceUpload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "UsuToken": token,
            "ImageFileImage": imagen,
            "TipoImagen": tipo
        })
    });
    const dataSubir = await response.json();

    return dataSubir; 
}


// Primer Servicio
const SubirImagenPrimer = async (blob2, token, tipo) => {

    const formData = new FormData();
    formData.append('file', blob2, `${token}_${tipo}.jpeg`);

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/gxobject', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    const ImageFileImage = data.files[0].path;

    const responseSecond = await SubirImagenSegundo(token, tipo, ImageFileImage);

    return responseSecond;
}


export { SubirImagenPrimer }