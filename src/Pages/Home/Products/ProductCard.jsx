
const ProductCard = ({ item }) => {
    const { name, image, description } = item;
    return (
        <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 bg-base-100 shadow-xl 
                         sm:w-64 md:w-80 lg:w-96">
            <figure>
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body p-4 md:p-6 lg:p-8">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
                <p className="text-sm md:text-base lg:text-lg">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
