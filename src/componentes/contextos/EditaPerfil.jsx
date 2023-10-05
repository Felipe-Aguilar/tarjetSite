const DatosEditaPerfil = async (idUsuario) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/Usuario/${idUsuario}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil = async(datosGenerales, datosFormulario) => {

    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ActualizaUsu`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "usuId": datosGenerales.UUID,
            "ListUsuario": {
                "UUID": datosGenerales.UUID,
                "TokenId": datosGenerales.TokenId,
                "EmpleadoId": datosGenerales.EmpleadoId,
                "Nom": datosFormulario.Nom,
                "AppP": datosFormulario.AppP,
                "AppM": datosFormulario.AppM,
                "Cargo": datosFormulario.Cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosGenerales.Titulo,
                "Lev1Id": datosFormulario.Lev1Id,
                "Lev1Desc": datosFormulario.Lev1Desc,
                "Lev2Id": datosFormulario.Lev2Id,
                "Lev2Desc": datosFormulario.Lev2Desc,
                "Lev3Id": datosFormulario.Lev3Id,
                "Lev3Desc": datosFormulario.Lev3Id,
                "Activid": datosGenerales.Activid,
                "ImgTarFrente": datosGenerales.ImgTarFrente,
                "ImgTarReverso": datosGenerales.ImgTarReverso,
                "PublicPriva": datosGenerales.PublicPriva,
                "Telefono1": datosGenerales.Telefono1,
                "Tel1WP": datosGenerales.Tel1WP,
                "Telefono2": datosGenerales.Telefono2,
                "Tel2WP": datosGenerales.Tel2WP,
                "Telefono3": datosGenerales.Telefono3,
                "Tel3WP": datosGenerales.Tel3WP,
                "Telefono4": datosGenerales.Telefono4,
                "Tel4WP": datosGenerales.Tel4WP,
                "VerUbicacion": datosFormulario.VerUbicacion,
                "PermitirCalif": datosFormulario.PermitirCalif,
                "PermitirComments": datosFormulario.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosFormulario.Calle,
                "CodP": datosFormulario.CodP,
                "Colonia": datosFormulario.Colonia,
                "Municip": datosFormulario.Municip,
                "MapsGeoloc": datosGenerales.MapsGeoloc,
                "Activo": datosGenerales.Activo,
                "RangoLocal": datosGenerales.RangoLocal,
                "ImgHeader": datosGenerales.ImgHeader,
                "Mail": datosGenerales.Mail,
                "Web": datosGenerales.Web,
                "IconoComents": datosGenerales.IconoComents,
                "Facebook": datosGenerales.Facebook,
                "Instagram": datosGenerales.Instagram,
                "Youtube": datosGenerales.Youtube,
                "Tiktok": datosGenerales.Tiktok,
                "Pinterest": datosGenerales.Pinterest,
                "Twitter": datosGenerales.Twitter,
                "Telegram": datosGenerales.Telegram,
                "TituloServ": datosGenerales.TituloServ,
                "SubTituloServ": datosGenerales.SubTituloServ,
                "ColorBton1": datosGenerales.ColorBton1,
                "ColorBton2": datosGenerales.ColorBton2,
                "ImgFoto": datosGenerales.ImgFoto,
                "ImgLogo": datosGenerales.ImgLogo,
                // "Serv": [
                //     {
                //         "ServNum": datosGenerales.Serv[0].ServNum,
                //         "ServDescrip": datosGenerales.Serv[0].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[0].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[0].ServImg,
                //         "ServIcono": datosGenerales.Serv[0].ServIcono,
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[1].ServNum,
                //         "ServDescrip": datosGenerales.Serv[1].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[1].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[1].ServImg,
                //         "ServIcono": datosGenerales.Serv[1].ServIcono,
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[2].ServNum,
                //         "ServDescrip": datosGenerales.Serv[2].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[2].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[2].ServImg,
                //         "ServIcono": datosGenerales.Serv[2].ServIcono,
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[3].ServNum,
                //         "ServDescrip": datosGenerales.Serv[3].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[3].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[3].ServImg,
                //         "ServIcono": datosGenerales.Serv[3].ServIcono,
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[4].ServNum,
                //         "ServDescrip": datosGenerales.Serv[4].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[4].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[4].ServImg,
                //         "ServIcono": datosGenerales.Serv[4].ServIcono,
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[5].ServNum,
                //         "ServDescrip": datosGenerales.Serv[5].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[5].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[5].ServImg,
                //         "ServIcono": datosGenerales.Serv[5].ServIcono,
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": datosGenerales.Serv[6].ServNum,
                //         "ServDescrip": datosGenerales.Serv[6].ServDescrip,
                //         "ServSubTitulo": datosGenerales.Serv[6].ServSubTitulo,
                //         "ServImg": datosGenerales.Serv[6].ServImg,
                //         "ServIcono": datosGenerales.Serv[6].ServIcono,
                //         "ServSiteId": 2
                //     }
                // ]
                // "Serv": [
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 1
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 2
                //     },
                //     {
                //         "ServNum": "",
                //         "ServDescrip": "",
                //         "ServSubTitulo": "",
                //         "ServImg": "",
                //         "ServIcono": "",
                //         "ServSiteId": 2
                //     }
                // ]
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil2 = async(datosGenerales, datosFormulario) => {

    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ActualizaUsu`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "usuId": datosGenerales.UUID,
            "ListUsuario": {
                "UUID": datosGenerales.UUID,
                "TokenId": datosGenerales.TokenId,
                "EmpleadoId": datosGenerales.EmpleadoId,
                "Nom": datosGenerales.Nom,
                "AppP": datosGenerales.AppP,
                "AppM": datosGenerales.AppM,
                "Cargo": datosGenerales.Cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosGenerales.Titulo,
                "Lev1Id": datosGenerales.Lev1Id,
                "Lev1Desc": datosGenerales.Lev1Desc,
                "Lev2Id": datosGenerales.Lev2Id,
                "Lev2Desc": datosGenerales.Lev2Desc,
                "Lev3Id": datosGenerales.Lev3Id,
                "Lev3Desc": datosGenerales.Lev3Id,
                "Activid": datosGenerales.Activid,
                "ImgTarFrente": datosGenerales.ImgTarFrente,
                "ImgTarReverso": datosGenerales.ImgTarReverso,
                "PublicPriva": datosGenerales.PublicPriva,
                "Telefono1": datosFormulario.Telefono1,
                "Tel1WP": datosGenerales.Tel1WP,
                "Telefono2": datosFormulario.Telefono2,
                "Tel2WP": datosGenerales.Tel2WP,
                "Telefono3": datosGenerales.Telefono3,
                "Tel3WP": datosGenerales.Tel3WP,
                "Telefono4": datosGenerales.Telefono4,
                "Tel4WP": datosGenerales.Tel4WP,
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Municip": datosGenerales.Municip,
                "MapsGeoloc": datosGenerales.MapsGeoloc,
                "Activo": datosGenerales.Activo,
                "RangoLocal": datosGenerales.RangoLocal,
                "ImgHeader": datosGenerales.ImgHeader,
                "Mail": datosFormulario.Mail,
                "Web": datosFormulario.Web,
                "IconoComents": datosGenerales.IconoComents,
                "Facebook": datosFormulario.Facebook,
                "Instagram": datosFormulario.Instagram,
                "Youtube": datosFormulario.Youtube,
                "Tiktok": datosFormulario.Tiktok,
                "Pinterest": datosGenerales.Pinterest,
                "Twitter": datosFormulario.Twitter,
                "Telegram": datosFormulario.Telegram,
                "TituloServ": datosGenerales.TituloServ,
                "SubTituloServ": datosGenerales.SubTituloServ,
                "ColorBton1": datosGenerales.ColorBton1,
                "ColorBton2": datosGenerales.ColorBton2,
                "ImgFoto": datosGenerales.ImgFoto,
                "ImgLogo": datosGenerales.ImgLogo,
                "Serv": [
                    {
                        "ServNum": 1,
                        "ServDescrip": datosFormulario.Servicio1.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio1.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio1.ServImg,
                        "ServIcono": datosFormulario.Servicio1.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 2,
                        "ServDescrip": datosFormulario.Servicio2.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio2.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio2.ServImg,
                        "ServIcono": datosFormulario.Servicio2.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 3,
                        "ServDescrip": datosFormulario.Servicio3.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio3.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio3.ServImg,
                        "ServIcono": datosFormulario.Servicio3.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 4,
                        "ServDescrip": datosFormulario.Servicio4.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio4.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio4.ServImg,
                        "ServIcono": datosFormulario.Servicio4.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 5,
                        "ServDescrip": datosFormulario.Servicio5.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio5.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio5.ServImg,
                        "ServIcono": datosFormulario.Servicio5.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 6,
                        "ServDescrip": datosFormulario.Servicio6.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio6.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio6.ServImg,
                        "ServIcono": datosFormulario.Servicio6.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 7,
                        "ServDescrip": datosFormulario.Servicio7.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio7.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio7.ServImg,
                        "ServIcono": datosFormulario.Servicio7.ServIcono,
                        "ServSiteId": 2
                    }
                ]
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { DatosEditaPerfil, ActualizarPerfil, ActualizarPerfil2 }