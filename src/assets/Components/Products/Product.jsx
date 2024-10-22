import './Products.css'
import PropTypes from 'prop-types';

const Product = ({product, handleCart}) => {
    const {title,price,thumbnail}= product;
    return (

        <div>
            
        
        <div className="product">
            <img src={thumbnail} alt="" />
            <h3>{title}</h3>
            <h5>Price: ${price}</h5>
            <button onClick={()=>handleCart(product)}>Buy</button>
        </div>
        </div>
    );
};

export default Product;
Product.propTypes = {
    product: PropTypes.shape({
       
        title: PropTypes.string.isRequired, // Required: Title must be a string
        price: PropTypes.number.isRequired, // Required: Price must be a number
        thumbnail: PropTypes.string.isRequired, // Required: Thumbnail must be a string (URL)
    }).isRequired, // The product prop itself is required
    handleCart: PropTypes.func.isRequired, // Required: handleCart must be a function
};