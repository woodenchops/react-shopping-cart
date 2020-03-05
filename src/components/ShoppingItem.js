import React from 'react';

const ShoppingItem = ({name, price, addToCart, removeFromCart}) =>  {

        return ( 
            <div className="shopping-item">
                <p>{name}</p>
                <p>{price}</p>
                <button className="add item-btn" onClick={() => {addToCart(price)}}>+</button>
                <button className="delete item-btn" onClick={() => {removeFromCart(price)}}>-</button>
            </div>
         );
    
}
 
export default ShoppingItem;