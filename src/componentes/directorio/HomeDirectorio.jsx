import BusquedaActividad from "./BusquedaActividad";
import BusquedaGeneral from "./BusquedaGeneral";
import BusquedaMapa from "./BusquedaMapa";
import NuevosUsuarios from "./NuevosUsuarios";
import VideoBanner from "./VideoBanner";

const HomeDirectorio = () => {
    return ( 
        <>
            <VideoBanner />
            <NuevosUsuarios />
            <BusquedaActividad />
            <BusquedaGeneral />
            <BusquedaMapa />
        </>
    );
}
export default HomeDirectorio;