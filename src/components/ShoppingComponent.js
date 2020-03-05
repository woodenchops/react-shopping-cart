import React, { useContext } from 'react';
import ShoppingItem from './ShoppingItem.js';
import { ShoppingContext } from '../contexts/ShoppingContext.js';

const ShoppingComponent = () => {

      const {shoppingItems, addToCart, removeFromCart} = useContext(ShoppingContext);

        return ( 
            <div className="shopping-container">
                {shoppingItems.map((item) => {       
                    return (
                        <ShoppingItem name={item.name} price={item.price} addToCart={addToCart} removeFromCart={removeFromCart} />
                    );
                })}
            </div>
         );
    
}
 
export default ShoppingComponent;