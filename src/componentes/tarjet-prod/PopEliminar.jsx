import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { EliminarTarjetero } from "../contextos/EliminarTarjetero";

const Animation = {
    initial: {scale: 0},
    animate: {scale: 1},
    transition: {delay: 1}
}

const PopEliminar = ({CerrarEliminar, idEliminar}) => {

    const [IdUsuario, setIdUsuario] = useState('');
    const [eliminado, setEliminado] = useState(false);
    
    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem('IdDatosSesion'));
        setIdUsuario(id.usuId);
    },[]);

    const Eliminar = async () => {

        await EliminarTarjetero( IdUsuario, idEliminar);

        setTimeout(()=>{
            setEliminado(true);
        }, [1000]);
        
        setTimeout(()=>{

            window.location.reload();

        },[3500]);
    }

    return ( 
        <div className="popEliminar">
            <AnimatePresence>
                { !eliminado 
                    && (
                        <motion.div {...Animation} className="cuerpo">
                            <i className="bi bi-exclamation-circle"></i>
                            <h2>¿Deseas quitar a este usuario de tu tarjetero?</h2>

                            <div className="buttons">
                                <button className="borrar" onClick={Eliminar}>
                                    Quitar
                                </button>

                                <button className="cerrar" onClick={()=>CerrarEliminar(false)}>
                                    Cerrar ventana (x)
                                </button>
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>

            <AnimatePresence>
                { eliminado 
                    && (
                        <motion.div {...Animation} className="cuerpo">
                            <h2>Se quitó el usuario de su tarjetero correctamente</h2>
                            <i className="bi bi-check-circle"></i>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}

export default PopEliminar;