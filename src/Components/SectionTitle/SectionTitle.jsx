
const SectionTitle = ({heading, subHeading, Paragraph}) => {
    return (
        <div className="mx-auto text-center">
            <p className=" text-pink-500 font-bold mb-4 uppercase">{subHeading}</p>
            <h2 className="text-3xl mb-4 font-semibold">{heading}</h2>
            <p className=" text-justify">{Paragraph}</p>
        </div>
    );
};

export default SectionTitle;