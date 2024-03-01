import { useNavigate } from 'react-router-dom';
import LogoGris from '../assets/logotarjet-gris.svg';


const Footer = () => {
    
    const navigate = useNavigate();

    return ( 
        <footer>
            <div className='logo'>
                <img src={LogoGris} alt="TarjetMx Logo" />
            </div>

            <div className='redes'>
                <a href="https://www.facebook.com/profile.php?id=100095193982785&mibextid=ZbWKwL" target='_blank'>
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/tarjetmx/" target='_blank'>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>

            <div className='nav'>
                {/* <a href="">Política de Envío</a>
                <a href="">Términos y Condiciones</a>
                <a href="">Política de Devoluciones</a> */}
                <a onClick={()=>navigate('/aviso-privacidad')}>Aviso de Privacidad</a>
                {/* <a href="">Facturación</a> */}
                <a href="https://wa.me/5586763895">Contacto</a>
                <a href="#">Tarjet para Partners</a>
            </div>
        </footer>
    );
}

export default Footer;