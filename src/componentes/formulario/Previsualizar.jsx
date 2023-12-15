import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Tarjeta from '../../assets/tarjetageneric.png';

import { SubirImagenPrimer } from "../contextos/SubirImagen";
import html2canvas from "html2canvas";


const Previsualizar = ({onClickButton, datosGenerales, tipoPrevisualizar, currentFondo, currentFondo2, nombreCompleto, cargo}) => {
    
    
    var Tarjeta;
    var propiedades = [];

    if (tipoPrevisualizar === 'gratis') {

        propiedades = currentFondo;

        if (currentFondo.TarjetaImagen === undefined) {
            Tarjeta = `https://tarjet.site/imagenes/tarjetas_frente/${currentFondo}`;
        } else {
            Tarjeta = `https://tarjet.site/imagenes/tarjetas_frente/${currentFondo.TarjetaImagen}`;
        }
    }else{

        propiedades = currentFondo2;

        if (currentFondo2.TarjetaImagen === undefined) {
            Tarjeta = `https://tarjet.site/imagenes/tarjetas_frente/premium/${currentFondo2}`;
        } else {
            Tarjeta = `https://tarjet.site/imagenes/tarjetas_frente/premium/${currentFondo2.TarjetaImagen}`;
        }
    }
    

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

    const constraintsRef = useRef(null);

    const [guardado, setGuardado] = useState(false);

    const GuardarImagen = () => {
        // Captura la representación de la imagen con los textos superpuestos
        html2canvas(constraintsRef.current,{scale: 5}).then((canvas) => {

            // Convierte el lienzo en una URL de datos
            const imgData = canvas.toDataURL('image/jpg');
    
            // Crea un enlace para descargar la imagen
            // const a = document.createElement('a');
            // a.href = imgData;
            // a.download = 'imagen_con_texto.png';
            // a.click();

            canvas.toBlob((blob)=>{

                SubirImagenPrimer(blob, datosGenerales.TokenId, "TFRE");

            })
        });

        setTimeout(()=>{
            setGuardado(true);
            
            setTimeout(()=>{
                onClickButton();
                // window.location.reload(true);
            }, 4000)
        },1000);
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
                                    style={propiedades.TarjetaColorFont && {color: `${propiedades.TarjetaColorFont}`} }
                                >
                                    {nombreCompleto}
                                </motion.label>

                                <motion.label 
                                    className="cargo"
                                    drag 
                                    dragConstraints={constraintsRef} 
                                    dragElastic={0}
                                    dragMomentum={false}
                                    style={propiedades.TarjetaColorFont && {color: `${propiedades.TarjetaColorFont}`} }
                                >
                                    {cargo}
                                </motion.label>
                            </motion.div>
                            
                        </div>

                        <div className="guardar-imagen">
                            <button onClick={GuardarImagen} type="button">
                                Guardar Tarjeta
                            </button>
                        </div>

                        <div className="footer">
                            <button onClick={onClickButton} type="button">
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