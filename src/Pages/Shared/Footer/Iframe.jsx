import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Iframe = () => {
    const position = [23.991310518453467, 90.35607940926168];
    return (
        <MapContainer center={position} zoom={13} style={{ height: '200px', width: '330px' }}>
            <TileLayer
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.015646439062!2d90.35353671498595!3d23.9911095846789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dc8d329a92e3%3A0x7316dd31f887236b!2z4Kas4Ka-4KaC4KaV4Ka_4Kao4Ka44KeH4KaV4Ka-4Kaw4KawIOCmlOCmvOCmvuCmvuCmsOCmnOCmleCnh-CmqOCnjeCmlOCmrOCnjeCmsuCmqg!5e0!3m2!1sen!2sbd!4v1691234567890!5m2!1sen!2sbd"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    International Classic Composite Ltd. (ICCL)
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Iframe;