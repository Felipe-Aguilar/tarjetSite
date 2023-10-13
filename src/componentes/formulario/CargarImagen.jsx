import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SubirImagenPrimer } from "../contextos/SubirImagen";

import FileResizer from "react-image-file-resizer";
import { useDropzone } from "react-dropzone";

import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";


const CargarImagen = ({onBotonClick, tipoImagen, numeroServicio}) => {

    const [datosSesion, setDatosSesion] = useState({});
    const [correcto, setCorrecto] = useState(false);

    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem('IdDatosSesion'));
        setDatosSesion(data);

    },[]);


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
            'image/png': [],
            'image/webp': []
        }
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

            { tipoImagen === 'PERF' ? 
                
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

                :

                <Cropper
                    src={URL.createObjectURL(file)}
                    className="img-preview"
    
                    // Cropper.js options
                    guides={false}
                    crop={onCrop}
                    ref={cropperRef}
                    viewMode={2}
                    dragMode={'none'}
                    minCropBoxWidth={1000}
                    minCropBoxHeight={1000}
                />
            }

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

    const EnviarImagen = async () => {

        const cropper = await cropperRef.current?.cropper;
        // const image = await cropper.getCroppedCanvas().toDataURL("image/jpg");
        
        const image = await cropper.getCroppedCanvas();

        if (image) {
            image.toBlob((blob)=>{

                FileResizer.imageFileResizer(
                    blob,
                    500,
                    500,
                    "WEBP",
                    50,
                    0,
                    (blob2) => {
                        console.log(blob2);
                        SubirImagenPrimer(blob2 ,datosSesion.Token, tipoImagen, numeroServicio);

                        setTimeout(()=>{
                            setCorrecto(true);

                            setTimeout(()=>{
                                onBotonClick();
                            }, 4000);

                        }, 1000);
                    },
                    "blob"
                );
            })
        }
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'image/jpeg') {
        setSelectedFile(file);
        } else {
        alert('Por favor, seleccione un archivo en formato webp.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
        // Aquí puedes hacer lo que necesites con el archivo seleccionado, como enviarlo al servidor.
        console.log('Archivo seleccionado:', selectedFile);

        const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/gxobject', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
            body: selectedFile,
        });

        const data = await response.json();

        console.log(data);

        const response2 = await fetch('https://systemweb.ddns.net/WebTarjet/APIImagen/ServiceUpload', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type': 'multipart/form-data'
                // 'Content-Type': 'image/webp'
            },
            body: JSON.stringify({
                "UsuToken": "9171Tq139",
                "ImageFileImage": data.object_id,
                "TipoImagen": "PERF"
            })
        });

        } else {
        alert('Por favor, seleccione un archivo en formato webp antes de enviar.');
        }
    };

    return ( 
        <div className="pop-cargarimagen">
            <motion.div {...animation} className="cuerpo" >

            <div>
                <h1>Subir imagen en formato webp</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" accept=".webp, .jpeg" onChange={handleFileChange} />
                    <button type="submit">Subir</button>
                </form>
            </div>

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

                { correcto &&
                    <motion.div className="correcto" {...animation}>
                        <h5>La imagen se subió correctamente</h5>
                        <p>
                            <i className="bi bi-check2-circle"></i>
                        </p>
                    </motion.div>
                }

                <div className="guardar">
                    <button onClick={EnviarImagen} className={ files.length === 0 ? 'disabled' : ''} type="button">
                        Guardar imagen
                    </button>
                </div>

                <div className="footer">
                    <button onClick={onBotonClick} type="button">
                        Cerrar ventana (x)
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default CargarImagen;