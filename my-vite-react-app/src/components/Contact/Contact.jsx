import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css'


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

const Contact = () => {
  const position = [42.656923, 23.358135]; 

  return (
    <div className='contact-container'>
      <h2 className='contact-title'>CONTACT US</h2>
      <div className='contact-row'><img src="/symbols/pin.png" alt="pin" height={30}/> <h3 className='contact-row-text'>Студентски Комплекс, ул. „проф. Георги Брадистилов“ 3, ет.2</h3></div>
      <div className='contact-row'><img src="/symbols/tel.png" alt="tel" height={30}/> <h3 className='contact-row-text'>(+359) 888122086</h3></div>
      <div className='contact-row'><img src="/symbols/email.png" alt="email" height={30}/> <h3 className='contact-row-text'>nikeaglobal@gmail.com</h3></div>
      <MapContainer className='map-container' center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>Nikea Global Ltd.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;
