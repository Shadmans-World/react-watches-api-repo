const getStoredCart =() => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return [];
}

const loadToLs =(cart) =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLs =(id) =>{
    const cart = getStoredCart();
    cart.push(id)
    loadToLs(cart)
}

const removeFromLs =(id) =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx=> idx !==id)
    loadToLs(remaining)
}

export {addToLs, getStoredCart, removeFromLs}