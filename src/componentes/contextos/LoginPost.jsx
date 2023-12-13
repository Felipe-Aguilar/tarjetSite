import React, { useState } from 'react';

const LoginPost = React.createContext();


const ProveedorLogin = ( { children } ) => {
    
    const [loginPost, setLoginPost] = useState();

    const enviarPostLogin = async(usuarioForm, passwordForm) => {

        const response = await fetch('https://souvenir-site.com/WebTarjet/APIUsuDtos/Login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Cuenta": usuarioForm,
                    "Password": passwordForm,
                })
            });
        
            const data = await response.json();

            return data;
    }

    return ( 
        <LoginPost.Provider value={{ enviarPostLogin }}>
            { children }
        </LoginPost.Provider>
    );
}

export { LoginPost, ProveedorLogin }