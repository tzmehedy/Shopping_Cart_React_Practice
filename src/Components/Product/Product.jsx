
const Product = ({product}) => {

    const {title,image,price,description} = product

    console.log(product)
    return (
        <div className="border border-gray-600 p-10 rounded-xl space-y-2">
            <img className="w-full h-64" src={image} alt="" />
            <h1>{title}</h1>
            <p className="text-justify">{description}</p>
            <small className="font-bold">Price: {price}</small>
            <br />
            <button className="border border-gray-500 p-2 bg-neutral-600 rounded-md">Add to Cart</button>
        </div>
    );
};

export default Product;