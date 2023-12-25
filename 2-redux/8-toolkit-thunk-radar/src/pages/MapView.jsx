import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={12}
      scrollWheelZoom={true}
    >
      {/* ekranda gösterilen harita */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* imleç */}
      <Marker position={[51.505, -0.09]}>
        <Popup>Merhabalar</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
