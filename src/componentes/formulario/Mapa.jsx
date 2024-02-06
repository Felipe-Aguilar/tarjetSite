import { useEffect, useState } from 'react';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';

const Mapa = ({ address }) => {
    
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    
    useEffect(()=>{

        const getAddress = async () => {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCPj4WhXm_VMY3W6MMQ2UwDOdTkrBAednk`);
    
            const data = await response.json();
    
            setLat(data.results[0].geometry.location.lat);
            setLong(data.results[0].geometry.location.lng);
        }

        getAddress();

    },[]);

    return ( 
        <div style={{width: '100%', height: '300px'}}>
            { address &&
                <APIProvider apiKey='AIzaSyCPj4WhXm_VMY3W6MMQ2UwDOdTkrBAednk'>
                    <Map zoom={15} center={{lat: lat, lng: long}} mapId={'ab8d519ae945deed'}>
                        <AdvancedMarker position={{lat: lat, lng: long}}></AdvancedMarker>
                    </Map>
                    
                </APIProvider>
            }
        </div>
    );
}

export default Mapa;