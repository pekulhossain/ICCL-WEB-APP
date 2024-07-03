
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './progress.css';
import proimg from '../../../assets/progress/1.jpg';


const Progress = () => {

    const Progresss = ({done}) => {
        const [style, setStyle] = React.useState({});
        
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            
            setStyle(newStyle);
        }, 200);
        
        return (
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        )
    }

    return (
        <div className="flex mt-12 my-14">
            <div className=" flex-1 bg-pink-500 text-white px-2 pt-0">
                <SectionTitle subHeading={"WE ARE AWESOME"}
                    heading={"Some Of Our Business Skills"}
                    Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                </SectionTitle>
                <div className="">
                    <p className="pb[5px] font-semibold">Branding</p>
                    <Progresss done="100"/>
                    <p className="pb[5px] font-semibold">Marketing</p>
                    <Progresss done="95"/>
                    <p className="pb[5px] font-semibold">Sewing</p>
                    <Progresss done="90"/>
                    <p className="pb[5px] font-semibold">On Time Shipment</p>
                    <Progresss done="90"/>
                </div>
            </div>
            <div className="flex-1">
                <img src={proimg} alt="" />
            </div>
        </div>
    );
};

export default Progress;