import React from 'react'
import {
    APIProvider,
    Map,
    MapCameraChangedEvent,
    Marker,
  } from '@vis.gl/react-google-maps';
import PoiMarkers from '../PoiMarkers';
import { locations } from '../locations';

export default function MapContainer(){
    return(
        <APIProvider apiKey={'AIzaSyBKMCpIEcCH2XLY_73vEYU6QDrnxaY-BFw'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
            defaultZoom={12}
            defaultCenter={{lat:-22.860664, lng:-42.808138}}
            mapId={'a02120c7e3ebe191'}
            onCameraChanged={(ev: MapCameraChangedEvent) =>
                console.log('Camera changed:', ev.detail.center, 'zoom', ev.detail.zoom)
            }    
        >
            {locations && <PoiMarkers pois={locations} />}
            <Marker position={{lat:-22.860664, lng:-42.808138}} clickable={true} draggable={true} />
        </Map>
    </APIProvider>
    )
}
