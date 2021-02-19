import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MyMap = () => {
    return (
        <div>
               <MapContainer center={[43.6588, 51.1975]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[43.6588, 51.1975]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
        </div>
    )
}

export default MyMap
