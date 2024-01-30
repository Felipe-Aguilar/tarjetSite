import { useEffect } from "react";

import BusquedaActividad from "./BusquedaActividad";
import Interesar from "./Interesar";
import NuevosUsuarios from "./NuevosUsuarios";
import VideoBanner from "./VideoBanner";

import BusquedaGeneral from "./BusquedaGeneral";
import BusquedaMapa from "./BusquedaMapa";
import BusquedaDirectorio from "./BusquedaDirectorio";

const HomeDirectorio = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition(function(position){
                console.log(position);
            });   
        }
    },[]);

    return ( 
        <>
            <BusquedaDirectorio />
            {/* <VideoBanner />
            <NuevosUsuarios />
            <BusquedaActividad /> */}
                {/* <BusquedaGeneral />
                <BusquedaMapa /> */}
            {/* <Interesar /> */}
        </>
    );
}
export default HomeDirectorio;