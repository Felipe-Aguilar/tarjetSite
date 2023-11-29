// Segundo servicio
const SubirImagenSegundo = async (token, tipo, imagen, numeroServicio) => {

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/ServiceUpload', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "UsuToken": token,
            "ImageFileImage": imagen,
            "TipoImagen": tipo,
            "ServId": numeroServicio === undefined ? '0' : `${numeroServicio}`
        })
    });
    const dataSubir = await response.json();

    return dataSubir; 
}


// Primer Servicio
const SubirImagenPrimer = async (blob2, token, tipo, numeroServicio) => {

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/gxobject', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: blob2,
    });

    const data = await response.json();

    const responseSecond = await SubirImagenSegundo(token, tipo, data.object_id, numeroServicio);
    
    return responseSecond;
}


export { SubirImagenPrimer }