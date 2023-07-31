import videoBannerDesk from '../../assets/directorioBanner.mp4';
import videoBannerMobile from '../../assets/directorioBannerMobile.mp4';
import logoTarjet from '../../assets/logo-tarjet.svg';

const VideoBanner = () => {
    return ( 
        <div className="container-fluid p-0">

            <div className="bannerDesk d-none d-lg-flex">
                <div>
                    <video autoPlay muted>
                        <source src={videoBannerDesk}/>
                    </video>
                </div>
                <div>
                    <h1>Directorio</h1>
                    <img src={logoTarjet} />
                </div>
            </div>

            <div className='bannerMobile d-block d-lg-none'>
                <video autoPlay muted loop>
                    <source src={videoBannerMobile}/>
                </video>
            </div>
        </div>
    );
}

export default VideoBanner;