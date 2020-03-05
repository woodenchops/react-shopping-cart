import React, { useContext } from 'react';
import { ShoppingContext } from '../contexts/ShoppingContext';

const ShoppingCart = () => {

    const {total} = useContext(ShoppingContext);
        return ( 
            <div className="cart">
                <p>total: {total} </p>
            </div>
         );
    
}
 
export default ShoppingCart;