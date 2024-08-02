import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Iframe = () => {
    const position = [23.991310518453467, 90.35607940926168];
    return (
        <MapContainer center={position} zoom={13} style={{ height: '200px', width: '330px' }}>
            <TileLayer
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6626871878897!2d90.354458!3d23.9911127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dc8d329a92e3%3A0x7316dd31f887236b!2sInternational+Classic+Composite+Ltd.+(ICCL)!5e0!3m2!1sen!2sbd!4v1690760191505!5m2!1sen!2sbd"
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