import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tarjeta from '../../assets/tarjetageneric.png';

import html2canvas from "html2canvas";

const Previsualizar = ({onClickButton, datosGenerales}) => {

    const propsAnimation = {
        initial: {y:20, opacity: 0},
        animate: {y:0, opacity: 1},
        transition: {delay: 1},
        // exit: {scale: 0}
    }

    const propsAnimation2 = {
        initial: {scale: 0},
        animate: {scale: 1},
        // transition: {delay: 2}
    }

    const nombreCompleto = datosGenerales.Nom + " "+ datosGenerales.AppP +" " + datosGenerales.AppM;
    const cargo = datosGenerales.Cargo;

    const constraintsRef = useRef(null);

    const [guardado, setGuardado] = useState(false);

    const GuardarImagen = () => {
        // Captura la representación de la imagen con los textos superpuestos
        html2canvas(constraintsRef.current).then((canvas) => {
            // Convierte el lienzo en una URL de datos
            const imgData = canvas.toDataURL('image/jpg');
    
            // Crea un enlace para descargar la imagen
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'imagen_con_texto.png';
            a.click();
        });

        setTimeout(()=>{
            setGuardado(true);

        },3000);
    }

    return ( 
        <div className="previsualizar">

            <AnimatePresence>
                { !guardado && (
                    <motion.div className="cuerpo" {...propsAnimation}>
                        <div className="encabezado">
                            <h5>Previsualiza tu Tarjet</h5>
                        </div>

                        <div className="body">
                            <p>Sobre tu tarjeta seleccionada, desliza tu nombre</p>

                            <motion.div 
                                className="back" 
                                ref={constraintsRef}
                                style={{background: `URL(${Tarjeta})`}}
                            >
                                <motion.label 
                                    drag 
                                    dragConstraints={constraintsRef} 
                                    dragElastic={0}
                                    dragMomentum={false}
                                >
                                    {nombreCompleto}
                                </motion.label>

                                <motion.label 
                                    className="cargo"
                                    drag 
                                    dragConstraints={constraintsRef} 
                                    dragElastic={0}
                                    dragMomentum={false}
                                >
                                    {cargo}
                                </motion.label>
                            </motion.div>
                            
                        </div>

                        <div className="guardar-imagen">
                            <button onClick={GuardarImagen}>
                                Guardar Tarjeta
                            </button>
                        </div>

                        <div className="footer">
                            <button onClick={onClickButton}>
                                Cerrar ventana (x)
                            </button>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence>

            <AnimatePresence>
                { guardado && (
                    <motion.div className="cuerpo correcto" {...propsAnimation2}>
                        <div className="encabezado">
                            <h5>Se actualizó correctamente tu Tarjeta</h5>
                            <p>
                                <i className="bi bi-check2-circle"></i>
                            </p>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence>
        </div>
    );
}

export default Previsualizar;