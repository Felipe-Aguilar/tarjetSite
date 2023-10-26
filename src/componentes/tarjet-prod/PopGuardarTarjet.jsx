import { motion } from "framer-motion";

const PopGuardarTarjet = () => {

    const propsAnimation = {
        initial: {scale: 0},
        animate: {scale: 1},
        transition: {delay: 0.7}
    }

    return ( 
        <div className="PopTarjeteroGuardado">
            <motion.div {...propsAnimation} className="cuerpo">
                <h2>Usuario Guardado en tu Tarjetero</h2>
                <p>
                    <i className="bi bi-arrow-down-circle"></i>
                </p>
                <p>
                    Consulta tu tarjetero para ver tus tarjets guardadas
                </p>
            </motion.div>
        </div>
    );
}

export default PopGuardarTarjet;