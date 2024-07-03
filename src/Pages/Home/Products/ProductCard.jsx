
const ProductCard = ({ item }) => {
    const { name, image, description }=item;
    return (
        <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;