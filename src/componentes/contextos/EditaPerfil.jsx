const DatosEditaPerfil = async (idUsuario) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/Usuario/${idUsuario}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil = async(datosGenerales, datosFormulario) => {

    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosFormulario.Alias,
                "Nom": datosFormulario.Nom,
                "AppP": datosFormulario.AppP,
                "AppM": datosFormulario.AppM,
                "Cargo": datosFormulario.Cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosFormulario.Titulo,
                "Lev1Id": datosFormulario.Lev1Id,
                "Lev1Desc": datosFormulario.Lev1Desc,
                "Lev2Id": datosFormulario.Lev2Id,
                "Lev2Desc": datosFormulario.Lev2Desc,
                "Lev3Id": datosFormulario.Lev3Id,
                "Lev3Desc": datosFormulario.Lev3Desc,
                "Activid": datosFormulario.Lev3Desc,
                "ImgTarFrente": datosGenerales.ImgTarFrente,
                "ImgTarReverso": datosGenerales.ImgTarReverso,
                "PublicPriva": datosFormulario.PublicPriva,
                "Telefono1": datosGenerales.Telefono1,
                "Tel1WP": datosGenerales.Tel1WP,
                "Telefono2": datosGenerales.Telefono2,
                "Tel2WP": datosGenerales.Tel2WP,
                "Telefono3": datosGenerales.Telefono3,
                "Tel3WP": datosGenerales.Tel3WP,
                "Telefono4": datosGenerales.Telefono4,
                "Tel4WP": datosGenerales.Tel4WP,
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosFormulario.PermitirCalif,
                "PermitirComments": datosFormulario.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosFormulario.Calle,
                "NumExt": datosFormulario.NumExt,
                "CodP": datosFormulario.CodP,
                "Colonia": datosFormulario.Colonia,
                "Estado": datosFormulario.Estado,
                "Municip": datosFormulario.Municip,
                "MapsGeoloc": datosGenerales.MapsGeoloc,
                "Activo": datosGenerales.Activo,
                "RangoLocal": datosFormulario.RangoLocal,
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
                "RegistroTarjet": datosGenerales.RegistroTarjet,
                "NomNegocio": datosFormulario.NomNegocio,
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarHeaderPerfil = async (datosGenerales, datosFormulario) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
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
                "Activid": datosGenerales.Lev3Desc,
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
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "NumExt": datosGenerales.NumExt,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Estado": datosGenerales.Estado,
                "Municip": datosGenerales.Municip,
                "MapsGeoloc": datosGenerales.MapsGeoloc,
                "Activo": datosGenerales.Activo,
                "RangoLocal": datosGenerales.RangoLocal,
                "ImgHeader": datosFormulario.ImgHeader,
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
                "RegistroTarjet": datosGenerales.RegistroTarjet,
                "NomNegocio": datosGenerales.NomNegocio
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarTarjetaPerfil = async (datosGenerales, datosFormulario) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
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
                "Activid": datosGenerales.Lev3Desc,
                "ImgTarFrente": datosFormulario.ImgTarFrente,
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
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "NumExt": datosGenerales.NumExt,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Estado": datosGenerales.Estado,
                "Municip": datosGenerales.Municip,
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
                "RegistroTarjet": true,
                "NomNegocio": datosGenerales.NomNegocio
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil2 = async(datosGenerales, datosFormulario) => {
    console.log(datosGenerales);

    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
                "Nom": datosGenerales.Nom,
                "AppP": datosGenerales.AppP,
                "AppM": datosGenerales.AppM,
                "Cargo": datosGenerales.Cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosFormulario.Titulo,
                "Lev1Id": datosGenerales.Lev1Id,
                "Lev1Desc": datosGenerales.Lev1Desc,
                "Lev2Id": datosGenerales.Lev2Id,
                "Lev2Desc": datosGenerales.Lev2Desc,
                "Lev3Id": datosGenerales.Lev3Id,
                "Lev3Desc": datosGenerales.Lev3Id,
                "Activid": datosGenerales.Lev3Desc,
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
                "VerUbicacion": datosFormulario.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "NumExt": datosGenerales.NumExt,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Estado": datosGenerales.Estado,
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
                "RegistroTarjet": datosGenerales.RegistroTarjet,
                "NomNegocio": datosGenerales.NomNegocio,
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
                        "ServSiteId": 1
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
                    },
                    {
                        "ServNum": 8,
                        "ServDescrip": datosFormulario.Servicio8.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio8.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio8.ServImg,
                        "ServIcono": datosFormulario.Servicio8.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 9,
                        "ServDescrip": datosFormulario.Servicio9.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio9.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio9.ServImg,
                        "ServIcono": datosFormulario.Servicio9.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 10,
                        "ServDescrip": datosFormulario.Servicio10.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio10.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio10.ServImg,
                        "ServIcono": datosFormulario.Servicio10.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 11,
                        "ServDescrip": datosFormulario.Servicio11.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio11.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio11.ServImg,
                        "ServIcono": datosFormulario.Servicio11.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 12,
                        "ServDescrip": datosFormulario.Servicio12.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio12.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio12.ServImg,
                        "ServIcono": datosFormulario.Servicio12.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 13,
                        "ServDescrip": datosFormulario.Servicio13.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio13.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio13.ServImg,
                        "ServIcono": datosFormulario.Servicio13.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 14,
                        "ServDescrip": datosFormulario.Servicio14.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio14.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio14.ServImg,
                        "ServIcono": datosFormulario.Servicio14.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 15,
                        "ServDescrip": datosFormulario.Servicio15.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio15.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio15.ServImg,
                        "ServIcono": datosFormulario.Servicio15.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 16,
                        "ServDescrip": datosFormulario.Servicio16.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio16.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio16.ServImg,
                        "ServIcono": datosFormulario.Servicio16.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 17,
                        "ServDescrip": datosFormulario.Servicio17.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio17.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio17.ServImg,
                        "ServIcono": datosFormulario.Servicio17.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 18,
                        "ServDescrip": datosFormulario.Servicio18.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio18.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio18.ServImg,
                        "ServIcono": datosFormulario.Servicio18.ServIcono,
                        "ServSiteId": 1
                    },
                ]
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil3 = async(datosGenerales, datosFormulario) => {

    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
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
                "Activid": datosGenerales.Lev3Desc,
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
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "NumExt": datosGenerales.NumExt,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Estado": datosGenerales.Estado,
                "Municip": datosGenerales.Municip,
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
                "RegistroTarjet": datosGenerales.RegistroTarjet,
                "NomNegocio": datosGenerales.NomNegocio,
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
                        "ServSiteId": 1
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
                    },
                    {
                        "ServNum": 8,
                        "ServDescrip": datosFormulario.Servicio8.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio8.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio8.ServImg,
                        "ServIcono": datosFormulario.Servicio8.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 9,
                        "ServDescrip": datosFormulario.Servicio9.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio9.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio9.ServImg,
                        "ServIcono": datosFormulario.Servicio9.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 10,
                        "ServDescrip": datosFormulario.Servicio10.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio10.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio10.ServImg,
                        "ServIcono": datosFormulario.Servicio10.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 11,
                        "ServDescrip": datosFormulario.Servicio11.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio11.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio11.ServImg,
                        "ServIcono": datosFormulario.Servicio11.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 12,
                        "ServDescrip": datosFormulario.Servicio12.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio12.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio12.ServImg,
                        "ServIcono": datosFormulario.Servicio12.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 13,
                        "ServDescrip": datosFormulario.Servicio13.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio13.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio13.ServImg,
                        "ServIcono": datosFormulario.Servicio13.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 14,
                        "ServDescrip": datosFormulario.Servicio14.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio14.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio14.ServImg,
                        "ServIcono": datosFormulario.Servicio14.ServIcono,
                        "ServSiteId": 2
                    },
                    {
                        "ServNum": 15,
                        "ServDescrip": datosFormulario.Servicio15.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio15.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio15.ServImg,
                        "ServIcono": datosFormulario.Servicio15.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 16,
                        "ServDescrip": datosFormulario.Servicio16.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio16.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio16.ServImg,
                        "ServIcono": datosFormulario.Servicio16.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 17,
                        "ServDescrip": datosFormulario.Servicio17.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio17.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio17.ServImg,
                        "ServIcono": datosFormulario.Servicio17.ServIcono,
                        "ServSiteId": 1
                    },
                    {
                        "ServNum": 18,
                        "ServDescrip": datosFormulario.Servicio18.ServDescrip,
                        "ServSubTitulo": datosFormulario.Servicio18.ServSubTitulo,
                        "ServImg": datosFormulario.Servicio18.ServImg,
                        "ServIcono": datosFormulario.Servicio18.ServIcono,
                        "ServSiteId": 1
                    },
                ]
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizaRegistroTarjet= async (datosGenerales, cargo) => {
    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
                "Nom": datosGenerales.Nom,
                "AppP": datosGenerales.AppP,
                "AppM": datosGenerales.AppM,
                "Cargo": cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosGenerales.Titulo,
                "Lev1Id": datosGenerales.Lev1Id,
                "Lev1Desc": datosGenerales.Lev1Desc,
                "Lev2Id": datosGenerales.Lev2Id,
                "Lev2Desc": datosGenerales.Lev2Desc,
                "Lev3Id": datosGenerales.Lev3Id,
                "Lev3Desc": datosGenerales.Lev3Id,
                "Activid": datosGenerales.Lev3Desc,
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
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosGenerales.PermitirCalif,
                "PermitirComments": datosGenerales.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosGenerales.Calle,
                "NumExt": datosGenerales.NumExt,
                "CodP": datosGenerales.CodP,
                "Colonia": datosGenerales.Colonia,
                "Estado": datosGenerales.Estado,
                "Municip": datosGenerales.Municip,
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
                "RegistroTarjet": true,
                "NomNegocio": datosGenerales.NomNegocio
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ActualizarPerfil4 = async(datosGenerales, datosFormulario) => {

    const response = await fetch(`https://souvenir-site.com/WebTarjet/APIUsuDtos/ActualizaUsu`, {
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
                "Alias": datosGenerales.Alias,
                "Nom": datosFormulario.Nom,
                "AppP": datosFormulario.AppP,
                "AppM": datosFormulario.AppM,
                "Cargo": datosGenerales.Cargo,
                "Tipo": datosGenerales.Tipo,
                "Titulo": datosFormulario.Titulo,
                "Lev1Id": datosGenerales.Lev1Id,
                "Lev1Desc": datosGenerales.Lev1Desc,
                "Lev2Id": datosGenerales.Lev2Id,
                "Lev2Desc": datosGenerales.Lev2Desc,
                "Lev3Id": datosGenerales.Lev3Id,
                "Lev3Desc": datosGenerales.Lev3Desc,
                "Activid": datosGenerales.Lev3Desc,
                "ImgTarFrente": datosGenerales.ImgTarFrente,
                "ImgTarReverso": datosGenerales.ImgTarReverso,
                "PublicPriva": datosFormulario.PublicPriva,
                "Telefono1": datosGenerales.Telefono1,
                "Tel1WP": datosGenerales.Tel1WP,
                "Telefono2": datosGenerales.Telefono2,
                "Tel2WP": datosGenerales.Tel2WP,
                "Telefono3": datosGenerales.Telefono3,
                "Tel3WP": datosGenerales.Tel3WP,
                "Telefono4": datosGenerales.Telefono4,
                "Tel4WP": datosGenerales.Tel4WP,
                "VerUbicacion": datosGenerales.VerUbicacion,
                "PermitirCalif": datosFormulario.PermitirCalif,
                "PermitirComments": datosFormulario.PermitirComments,
                "TexoUbica": "Visitanos en:",
                "Calle": datosFormulario.Calle,
                "NumExt": datosFormulario.NumExt,
                "CodP": datosFormulario.CodP,
                "Colonia": datosFormulario.Colonia,
                "Estado": datosFormulario.Estado,
                "Municip": datosFormulario.Municip,
                "MapsGeoloc": datosGenerales.MapsGeoloc,
                "Activo": datosGenerales.Activo,
                "RangoLocal": datosFormulario.RangoLocal,
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
                "RegistroTarjet": datosGenerales.RegistroTarjet,
                "NomNegocio": datosFormulario.NomNegocio,
            }
        })
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { DatosEditaPerfil, ActualizarPerfil, ActualizarPerfil2, ActualizarPerfil3, ActualizarHeaderPerfil, ActualizarTarjetaPerfil, ActualizaRegistroTarjet, ActualizarPerfil4 }