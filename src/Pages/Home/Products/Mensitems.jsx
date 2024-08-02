import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Mensitems = () => {
const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => {
                const mensItems = data.filter(item => item.category === 'mens');
                setProduct(mensItems)})
    }, [])
    return (
        <section>
            <SectionTitle
                heading="Mens Items"
            ></SectionTitle>
            <div className="my-16 items-center justify-items-center grid gap-4 lg:grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1">
                {
                    product.map(item=> <ProductCard
                    key={item.id}
                    item={item}
                    ></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Mensitems;