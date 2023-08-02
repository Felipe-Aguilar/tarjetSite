import Slider from "react-slick";
import logoMuestra from '../../assets/logomuestra.png';

const Interesar = () => {

    const settings = {
        dots: false,
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
            <div className='custom-arrow custom-prev-arrow' >
                <i className="bi bi-chevron-right" ></i>
            </div>
        ),
        responsive: [
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
                }
            }
        ]
    }

    return ( 
        <div className="container-fluid Interesar">
            <h2>Te podría interesar</h2>

            <div className="Sliders">
                <div className="contenedor">
                    <h5>Comida y alimentos</h5>
                    
                    <Slider {...settings}>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="contenedor">
                    <h5>Comida y alimentos</h5>
                    
                    <Slider {...settings}>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="contenedor">
                    <h5>Comida y alimentos</h5>
                    
                    <Slider {...settings}>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                        <div className="resu">
                            <div className="cuerpo-resu">
                                <img src={logoMuestra} />
                                <h4>
                                    El torero
                                    <span>Carnicería</span>
                                </h4>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Interesar;