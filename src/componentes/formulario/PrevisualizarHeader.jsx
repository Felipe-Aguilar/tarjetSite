import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { SubirImagenPrimer } from "../contextos/SubirImagen";
import html2canvas from "html2canvas";

const PrevisualizarHeader = ({onClickButton,datosGenerales, currentFondo}) => {

    const Tarjeta = `https://tarjet.site/imagenes/Headers_Collection/${currentFondo}`;
    
    const [logtipo, setLogotipo] = useState('');
    
    const propsAnimation = {
        initial: {y:20, opacity: 0},
        animate: {y:0, opacity: 1},
        transition: {delay: 1},
    }

    const propsAnimation2 = {
        initial: {scale: 0},
        animate: {scale: 1},
    }
    
    const constraintsRef = useRef(null);
    const [guardado, setGuardado] = useState(false);
    
    const GuardarImagen = () => {
        // Captura la representación de la imagen con los textos superpuestos
        html2canvas(constraintsRef.current).then((canvas) => {

            // Convierte el lienzo en una URL de datos
            const imgData = canvas.toDataURL('image/jpg');

            canvas.toBlob((blob)=>{

                SubirImagenPrimer(blob, datosGenerales.TokenId, "SITE");

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

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        maxFiles: 1,
        maxSize: 5000000,
        accept: {
            'image/png': [],
            'image/webp': []
        },
        onDrop: (acceptedFiles) => {
            // Aquí puedes realizar otras operaciones con acceptedFiles si es necesario
            const file = acceptedFiles[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setLogotipo(imageUrl);
            }
        },
    });

    const files = acceptedFiles.map(file => (
        <>
            <li key={file.path}>
                {file.path} - {file.size} bytes

            </li>
            {/* <img 
                src={URL.createObjectURL(file)}
                className="img-preview"
            /> */}
        </>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
            {errors.map(e => (
                <li key={e.code}>Error: el tipo de archivo debe ser image/jpeg, image/png ó hay más de 1 archivo seleccionado</li>
            ))}
            </ul>
        </li>
    ));

    return ( 
        <div className="previsualizar">

            <AnimatePresence>
                { !guardado && (
                    <motion.div className="cuerpo" {...propsAnimation}>
                        <div className="encabezado">
                            <h5>Previsualiza tu Tarjet</h5>
                        </div>

                        <div className="body">
                            <motion.div 
                                className="back backHeader" 
                                ref={constraintsRef}
                                style={{background: `URL(${Tarjeta})`}}
                            >
                                <img src={logtipo} className="logotipo-image"/>
                            </motion.div>
                            
                        </div>

                        <div className="subirImagen">
                            <h6>Sube tu Logotipo</h6>
                            <div {...getRootProps()} className="dropzone dropzoneHeader">
                                <input {...getInputProps()} />
                                <p>
                                    {/* Arrastra y suelta tu imagen aquí, o haz clic para seleccionar imagen. <br/>
                                    (solo se permite subir un archivo con extension .png y un tamaño máximo de 5MB) */}
                                    Agregar Logo/Foto
                                </p>
                            </div>

                            <div className="resultados">
                                <ul key={1}>{files}</ul>

                                <ul className="error">{fileRejectionItems}</ul>
                            </div>
                        </div>

                        <div className="guardar-imagen">
                            <button onClick={GuardarImagen} type="button">
                                Guardar
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
                            <h5>Se actualizó correctamente tu Encabezado</h5>
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

export default PrevisualizarHeader;