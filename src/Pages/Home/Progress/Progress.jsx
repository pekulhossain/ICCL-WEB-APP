import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './progress.css';
import proimg from '../../../assets/progress/1.jpg';

const Progress = () => {
    const ProgressBar = ({ done }) => {
        const [style, setStyle] = React.useState({});
        
        React.useEffect(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            };
            setStyle(newStyle);
        }, [done]);
        return (
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        );
    };
    return (
        <div className="flex flex-col lg:flex-row mt-12 my-14 bg-white">
            <div className="flex-1 bg-pink-500 text-white px-4 pt-0 mb-8 lg:mb-0">
                <SectionTitle 
                    subHeading={"WE ARE AWESOME"}
                    heading={"Some Of Our Business Skills"}
                    Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                />
                <div className="mt-4">
                    <p className="pb-2 font-semibold">Branding</p>
                    <ProgressBar done="100"/>
                    <p className="pb-2 font-semibold">Marketing</p>
                    <ProgressBar done="95"/>
                    <p className="pb-2 font-semibold">Sewing</p>
                    <ProgressBar done="90"/>
                    <p className="pb-2 font-semibold">On Time Shipment</p>
                    <ProgressBar done="90"/>
                </div>
            </div>
            <div className="flex-1">
                <img className="w-full h-full object-cover" src={proimg} alt="Progress" />
            </div>
        </div>
    );
};

export default Progress;
