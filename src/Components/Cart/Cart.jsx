
const Cart = ({cart}) => {

    const {title,price} = cart
    
    return (
        <div className="flex justify-between">
           <h1>{title}</h1>
           <p>{price}</p>
        </div>
    );
};

export default Cart;