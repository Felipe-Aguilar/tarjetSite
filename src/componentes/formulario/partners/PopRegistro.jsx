import { motion } from "framer-motion";


const PopRegistro = () => {

    const Animation = {
        initial: {scale: 0},
        animate: {scale: 1},
        transition: {delay: 1.5},
    }

    return ( 
        <div className="pop-correcto pop-registro">
            <motion.div {...Animation} className="cuerpo">
                <i className="bi bi-check-circle"></i>
                <span>Usuario registrado con éxito, ahora puedes entrar a su perfil para configurar su Tarjet y Tarjet Site </span>
            </motion.div>
        </div>
    );
}

export default PopRegistro;