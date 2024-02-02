import { useEffect, useState } from 'react';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';

const Mapa = ({ address }) => {
    
    const [center, setCenter] = useState({});
    
    useEffect(()=>{

        const getAddress = async () => {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCPj4WhXm_VMY3W6MMQ2UwDOdTkrBAednk`);
    
            const data = await response.json();
    
            setCenter({lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng})
        }

        getAddress();

    },[]);

    return ( 
        <div style={{width: '100%', height: '300px'}}>
            {console.log(address)}
            { address &&
                <p>si</p>
            }
            { address &&
                <APIProvider apiKey='AIzaSyCPj4WhXm_VMY3W6MMQ2UwDOdTkrBAednk'>
                    {/* <Map center={center} zoom={15}>
                        
                    </Map> */}
                    
                </APIProvider>
            }

            {/* // <APIProvider apiKey='AIzaSyCPj4WhXm_VMY3W6MMQ2UwDOdTkrBAednk'>
            //     <Map zoom={15} center={center} mapId={'ab8d519ae945deed'}>
            //         <AdvancedMarker position={center}></AdvancedMarker>
            //     </Map>
            // </APIProvider> */}
        </div>
    );
}

export default Mapa;