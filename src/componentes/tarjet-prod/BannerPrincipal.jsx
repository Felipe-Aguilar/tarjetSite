import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import banner from '../../assets/bannerPrincipal.png';

const BannerPrincipal = () => {

    const navigate = useNavigate();

    return ( 
        <div className='container-fluid'>
            <BannerContenedor className='row justify-content-center align-items-center'>
                <div className='col-11'>
                    <Imagen src={banner}/>
                </div>
            </BannerContenedor>
        </div>
    );
}

const BannerContenedor = styled.div`
    margin-top: 4.5rem;
    height: 85vh;
`;

const Imagen = styled.img`
    display: block;
    margin: auto;
    width: 50%;

    @media screen and (max-width: 575px){
        width: 100%;
    }
`;

export default BannerPrincipal;