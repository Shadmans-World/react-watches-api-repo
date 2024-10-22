import PropTypes from "prop-types";

import "./Cart.css"
const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <h3>Selected Products</h3>
            <div className="cart-container">
            {
                
                cart.map(product => <div key={product.id}>
                    <img  src={product.thumbnail}></img>
                    <h5>{product.title}</h5>
                    <button onClick={()=>{handleRemoveCart(product.id)}}>Remove</button>
                    </div>
                    
                    )
                     
                    
                
            }
           
            </div>
            
           
        </div>
    );
};

export default Cart;

Cart.propTypes = {
    cart: PropTypes.array.isRequired, // Assuming cart is an array
    handleRemoveCart: PropTypes.func.isRequired
};