import { useEffect, useState } from "react";
import { UltimosGenerados } from "../contextos/TopUsuarios";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import tarjetaGenerica from '../../assets/tarjetageneric.png';

const NuevosUsuarios = () => {

    const [topUsuarios, setTopUsuarios] = useState([]);

    const navigate = useNavigate();

    const timestamp = new Date().getTime();

    useEffect(()=>{

        const consultarUltimosUsuarios = async() => {
            const response = await UltimosGenerados();
            setTopUsuarios(response.ListTarjets);
        }

        consultarUltimosUsuarios();

    },[]);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <i className="bi bi-chevron-left" ></i>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <i className="bi bi-chevron-right" ></i>
            </div>
        ),
        responsive: [
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            }
        ]
    }

    return ( 
        <div className="container-fluid NuevosUsuarios">
            <h2>Nuevos usuarios Tarjet</h2>

            <div className="tarjetas">
                <Slider {...settings}>
                    { topUsuarios.map((usuario)=>{
                        if (usuario.PublicPriva === 0 ) {
                            if (usuario.RegistroTarjet) {
                                return(
                                    <div 
                                        key={usuario.IdUsuario}
                                        className="slide-tarjeta"
                                        onClick={()=>navigate(`/st/${btoa(usuario.Token)}`)}
                                    >
                                        { usuario.FondoF ?
                                            <img src={`https://tarjet.site/imagenes/tarjetas_frente_usuarios/${usuario.FondoF}?timestamp=${timestamp}`} />
                                        :
                                            <img src={tarjetaGenerica} />
                                        }
                                    </div>
                                );
                            }
                        }                        
                    })
                    }
                </Slider>
            </div>
            <p>Da click sobre la imagen para ver su tarjeta digital</p>
        </div>
    );
}

export default NuevosUsuarios;