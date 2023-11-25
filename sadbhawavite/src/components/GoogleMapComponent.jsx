import React from 'react';
import { GoogleMap, LoadScript, Marker } from 'react-google-maps-api';

const containerStyle = {
  width: '100%',
  height: '200px', // Adjust the height as needed
};

const center = {
  lat: 27.762656,
  lng: 85.342194,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAWa9k-Ju6an8VM-WiMySAylUIZDbXDAjM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
