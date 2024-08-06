import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';

const Gallary = () => {


    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('/Gallary.json')
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);

    return (
        <section className="py-12 bg-gray-100">
            <Helmet>
                <title>ICCL || Gallery</title>
            </Helmet>
            <SectionTitle
                subHeading="Photo Gallery"
            ></SectionTitle>
            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative overflow-hidden group">
                            <img
                                src={photo.url}
                                alt={photo.description}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <span className="text-white text-lg">{photo.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallary;

