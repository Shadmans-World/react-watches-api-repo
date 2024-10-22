
import { useState } from 'react'
import './App.css'
import Product from './assets/Components/Products/Product'
import { useEffect } from 'react';
import { addToLs, getStoredCart, removeFromLs } from './Utilities/localstorage';
import Cart from './assets/Components/Cart/Cart';


function App() {

  const [items, setItems]=useState([]);
  const [cart, setCart]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/carts')
    .then(res=> res.json())
    .then(data => setItems(data.carts))
  },[])


  useEffect(()=>{
    // console.log(items.length)
    if(items.length>0){
      const storedCart = getStoredCart();
      // console.log(storedCart,items)
      const savedCart =[]
      for(const id of storedCart){
        // console.log(id)
       const storedItem=items.flatMap(item => item.products).find(product => product.id===id)
      if(storedItem){
        savedCart.push(storedItem)
      }
       
      }
      console.log('Your Cart Items:',savedCart )
      setCart(savedCart)
    }
    
  },[items])

 function handleCart(product){
   const newCart = [...cart, product];
    setCart(newCart);
    addToLs(product.id)
    
 }

 const handleRemoveCart =(id)=>{
  const remainingCart = cart.filter(product=> product.id !==id);
  setCart(remainingCart);
  removeFromLs(id)
 }

  return (
    <>
     <h1>Daraz MINI</h1>
     <h2>Available: {items.length}</h2>
     <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>

     <h2>Products</h2>
     
      <div className='product-container'>
      {items.map(cart => (
          cart.products.map(product => (
            <Product 
            key={product.id} 
            product={product} 
            handleCart={handleCart}
            
            />
          ))
        ))}
      </div>


    </>
  )
}

export default App
