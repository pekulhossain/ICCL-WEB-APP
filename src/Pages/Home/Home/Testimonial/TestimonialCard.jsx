import React from "react";

const TestimonialCard = () => {
    return (
        <div className="p-4 md:p-6 lg:p-8 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
            <figure className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                <blockquote className="text-gray-700 text-center mb-4">
                    Calvin: Sometimes when I am talking with others, my words can not keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </blockquote>
                <div className="flex items-center mt-4">
                    <img 
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" 
                        alt="sq-sample1" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h5 className="text-lg font-semibold text-gray-900">Pelican Steve</h5>
                        <span className="text-gray-600">LittleSnippets</span>
                    </div>
                </div>
            </figure>
        </div>
    );
};

export default TestimonialCard;
