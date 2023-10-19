// Segundo servicio
const SubirImagenSegundo = async (token, tipo, imagen, numeroServicio) => {

    console.log(numeroServicio);

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

    // const formData = new FormData();

    // if (tipo === 'PERF' || tipo === 'TFRE') {
    //     formData.append('file', blob2, `${tipo}_${token}.jpeg`);
    // }
    // if (tipo === 'SERV') {
    //     formData.append('file', blob2, `${tipo}_${token}_${numeroServicio}.jpeg`);
    // }

    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/gxobject', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: blob2,
    });

    const data = await response.json();

    // const ImageFileImage = data.files[0].path;
    // const responseSecond = await SubirImagenSegundo(token, tipo, ImageFileImage);

    const responseSecond = await SubirImagenSegundo(token, tipo, data.object_id, numeroServicio);

    return responseSecond;
}


export { SubirImagenPrimer }