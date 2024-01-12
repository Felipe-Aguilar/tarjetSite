import { motion } from "framer-motion";

import Imagen from '../../assets/CompartirPerfil.jpeg'

const Animation = {
    initial: {scale: 0},
    animate: {scale: 1},
    transition: {delay: 1}
}

const InfoFacebook = ({CerrarInfoFacebook}) => {
    return ( 
        <div className="pop-correcto">
            <motion.div {...Animation} className="cuerpo">
                <h2>Para compartir tu perfil de facebook</h2>
                <img src={Imagen} alt="Como obtener perfil de facebook" className="img-share"/>
                <p className="infoText">Dirígete a la configuración de tu perfil y copia el enlace a tu perfil</p>

                <button onClick={CerrarInfoFacebook} className="closeButton">
                    Cerrar ventana (x)
                </button>
            </motion.div>
        </div>
    );
}

export default InfoFacebook;