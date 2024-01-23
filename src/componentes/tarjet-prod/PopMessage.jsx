import { motion } from 'framer-motion';
import Ilustracion  from '../../assets/ilustracion-diseña-tarjetsite.png';
import { useEffect } from 'react';

const PopMessage = ({telefono, pageId, onClick }) => {

    const Animation = {
        initial: {scale: 0},
        animate: {scale: 1},
        transition: {delay: 1}
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
    },[]);

    return ( 

        <div className="PopMessage">
            <motion.div {...Animation} className="cuerpo">
                <div className="Image">
                    <img src={Ilustracion} alt="Ilustración" />
                    <h2>Mándame un WhatsApp ahora</h2>

                    <a
                        href={`https://api.whatsapp.com/send?phone=+52${telefono}&text=¡Hola!%20👋🏻%20te%20contacto%20desde%20tu%20Tarjet.%0A%0Ahttps://tarjet.site/%23/st/${pageId}`} 
                        target={"_blank"}
                    >
                        Enviar mensaje

                        <i className="bi bi-whatsapp"></i>
                    </a>

                    <div className='buttons'>
                        <button className='cerrar' onClick={onClick}>
                            Cerrar ventana (x)
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default PopMessage;