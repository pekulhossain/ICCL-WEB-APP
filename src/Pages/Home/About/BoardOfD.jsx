import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BoardOfD = () => {
    const [Directors, setDirector] = useState([]);
    const [expandedId, setExpandedId] = useState(null); // To track which director's bio is expanded

    useEffect(() => {
        fetch('/BoardOfD.json')
            .then(response => response.json())
            .then(data => setDirector(data));
    }, []);

    const toggleBio = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
      };

    return (
        <section className="py-28">
            <Helmet>
                <title>ICCL || Board of Directors</title>
            </Helmet>
            <SectionTitle subHeading="Board Of Directors" />
            <div className="container mx-auto px-4 mt-16 sm:max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {Directors.map((Director) => (
                        <div key={Director.id} className="relative overflow-hidden group bg-white p-4">
                            <img
                                src={Director.url}
                                alt={Director.description}
                                className="w-72 h-76 flex justify-center items-center object-cover transform transition-transform duration-500 hover:scale-95"
                            />
                            <h3 className="text-xl font-semibold">{Director.name}</h3>
                            <p className="text-gray-600">{Director.position}</p>
                            <div className="mt-4">
                                {expandedId === Director.id && (
                                    <p className="text-gray-700 mb-2">{Director.bio}</p>
                                )}
                                <button
                                    onClick={() => toggleBio(Director.id)}
                                    className="text-blue-500 hover:text-blue-700 font-semibold"
                                >
                                    {expandedId === Director.id ? 'Less Bio' : 'Read Bio'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardOfD;
