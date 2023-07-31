import { motion } from "framer-motion";
import { FacebookShareButton, WhatsappShareButton,TelegramShareButton} from "react-share";

import IconFacebook from '../../assets/icono-face-on-site.svg';
import IconTelegram from '../../assets/icono-telegram-om-site.svg';
import IconWhats from '../../assets/icono-whatsapp-on-site.svg';

const Compartir = (props) => {

    var url = `https://tarjet.site/#/st/${btoa(props.usuario.UsuToken)}`;

    if (props.resuCompartir) {
        url = `https://tarjet.site/#/st/${btoa(props.resuCompartir)}`;
    }

    if (props.mxmPerfil) {
        url = `https://tarjet.site/#/st/${props.mxmPerfil}`;
    }

    return (
        <div className="modal-share">
            <div className="dd">
                <motion.div 
                    className="cuerpo-share"
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                >
                    <h5>
                        Comparte tú perfil Tarjet en las siguientes plataformas
                    </h5>

                    <div className="btns">
                        <FacebookShareButton url={url}>
                            <img src={IconFacebook} className="img-fluid" />
                        </FacebookShareButton>
                        <WhatsappShareButton className="whats" url={url}>
                            <img src={IconWhats} className="img-fluid" />
                        </WhatsappShareButton>
                        <TelegramShareButton url={url}>
                            <img src={IconTelegram} className="img-fluid" />
                        </TelegramShareButton>
                    </div>
                </motion.div>
                <div className="cerrar-btn">
                    <button className="btn-close" onClick={props.cerrarCompartir}>
                        Cerrar <br/>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Compartir;