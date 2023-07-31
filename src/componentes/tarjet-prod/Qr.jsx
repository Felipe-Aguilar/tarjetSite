import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

const Qr = (props) => {

    var url = `https://tarjet.site/#/st/${btoa(props.usuario.UsuToken)}`;

    return ( 
        <div className='modal'>

            <div>
                <motion.div 
                    className="cuerpo-modal"
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                >
                    <h5>
                        Comparte tu perfil tarjet mediante un Qr
                    </h5>

                    <QRCodeSVG 
                        value={url}
                        style={{display: 'block', margin: 'auto'}}
                        size={170}
                    />
                    <p>
                        Escanea con tu smartphone
                    </p>
                </motion.div>
                <div className="cerrar-btn">
                    <button className="btn-close" onClick={props.cerrarQr}>
                        Cerrar <br/>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Qr;