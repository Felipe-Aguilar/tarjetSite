import BusquedaActividad from "./BusquedaActividad";
import Interesar from "./Interesar";
import NuevosUsuarios from "./NuevosUsuarios";
import VideoBanner from "./VideoBanner";

import BusquedaGeneral from "./BusquedaGeneral";
import BusquedaMapa from "./BusquedaMapa";

const HomeDirectorio = () => {
    return ( 
        <>
            <VideoBanner />
            <NuevosUsuarios />
            <BusquedaActividad />
            {/* <BusquedaGeneral />
            <BusquedaMapa /> */}
            <Interesar />
        </>
    );
}
export default HomeDirectorio;