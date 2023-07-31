import Slider from "react-slick";
import tarjetaGenerica from '../../assets/tarjetageneric.png';

const NuevosUsuarios = () => {

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
                <i className="bi bi-chevron-left" style={{color: 'red!important'}}></i>
            </div>
        ),
        nextArrow: (
            <div className='custom-arrow custom-prev-arrow'>
                <i className="bi bi-chevron-right"></i>
            </div>
        )
    }

    return ( 
        <div className="container-fluid NuevosUsuarios">
            <h2>Nuevos usuarios Tarjet</h2>

            <div className="tarjetas">
                <Slider {...settings}>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    <div className="slide-tarjeta">
                        <img src={tarjetaGenerica} />
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
}

export default NuevosUsuarios;