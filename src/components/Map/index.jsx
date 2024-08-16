import React from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-map-react';

export const MapContainer = (props) => {
    const {google} = props
    return (
        <Map google={google} centerAroundCurrentLocation/>
    )
}
