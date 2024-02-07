import { motion, AnimatePresence } from "framer-motion";

const AgregarEmpleado = ({ colaborador }) => {

    const Animation = {
        initial: {height: 0},
        animate: {height: 'auto'}
    }

    return ( 
        <AnimatePresence>
            { colaborador && (
                <motion.div {...Animation} className="colaboradores">
                    {/* <h3 className='mt-5'>Colaboradores</h3> */}

                    {/* <button className='btn-bloque' type='button'>
                        Agregar colaboradores (5)

                        <div>
                            <i className="bi bi-plus-lg"></i>
                        </div>
                    </button> */}

                    <div className='colaborador'>
                        <span>Agrega token y contraseña de la Empresa</span>
                        <input type="text" placeholder='Token'/>
                        <input type="text" placeholder='Contraseña'/>

                        <button type='button'>
                            Agregar
                        </button>
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence>
    );
}

export default AgregarEmpleado;