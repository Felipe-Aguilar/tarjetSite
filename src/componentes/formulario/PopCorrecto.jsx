import { motion } from "framer-motion";

const divAnimation = {
    initial: {scale: 0},
    animate: {scale:1},
    transition: {delay: 1.5}
}

const pAnimation = {
    initial: {scale: 0},
    animate: {scale: 1},
    transition: {delay: 2}
}

const PopCorrecto = () => {
    return ( 
        <div className="pop-correcto">
            <motion.div {...divAnimation} className="cuerpo">
                <h2>Tus datos se actualizaron correctamente</h2>
                <motion.p {...pAnimation}>
                    <i className="bi bi-check2-circle"></i>
                </motion.p>
            </motion.div>
        </div>
    );
}

export default PopCorrecto;