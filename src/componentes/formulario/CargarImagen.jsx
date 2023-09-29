import { useRef } from "react";
import { motion } from "framer-motion";

import { useDropzone } from "react-dropzone";

import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";


const CargarImagen = ({onBotonClick}) => {

    const animation = {
        initial: {scale: 0},
        animate: {scale: 1},
        transition: {delay: 1}
    }

    // Recortar imagen
    const cropperRef = useRef(null);
    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
    };

    // Drop Image

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        maxFiles: 1,
        maxSize: 5000000,
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });

    // const files = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    const files = acceptedFiles.map(file => (
        <>
            <li key={file.path}>
                {file.path} - {file.size} bytes

            </li>
            {/* <img 
                src={URL.createObjectURL(file)}
                className="img-preview"
            /> */}

            <Cropper
                src={URL.createObjectURL(file)}
                className="img-preview"

                // Cropper.js options
                initialAspectRatio={1/1}
                aspectRatio={1}
                guides={true}
                crop={onCrop}
                ref={cropperRef}
                viewMode={2}
                dragMode={'none'}
                minCropBoxWidth={500}
            />
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
        <div className="pop-cargarimagen">
            <motion.div {...animation} className="cuerpo" >
                <div className="header">
                    <h2>Cambia tu logotipo o imagen</h2>
                </div>

                <div className="body">
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        <p>
                            Arrastra y suelta tu imagen aquí, o haz clic para seleccionar imagen. <br/>
                            (solo se permite subir un archivo con extension .jpg ó .png y un tamaño máximo de 5MB)
                        </p>
                    </div>

                    <div className="resultados">
                        <h6>Imagen</h6>
                        <ul>{files}</ul>

                        <ul className="error">{fileRejectionItems}</ul>
                    </div>
                </div>

                {/* <img src={URL.createObjectURL(file)} alt="" /> */}

                <div className="footer">
                    <button onClick={onBotonClick}>
                        Cerrar ventana (x)
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default CargarImagen;