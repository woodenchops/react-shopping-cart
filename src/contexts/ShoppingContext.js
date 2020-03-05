import React, { Component, createContext } from 'react';
import data from '../data/items.json';

export const ShoppingContext = createContext();

export class ShoppingProvider extends Component {
    state = {
        total: 0,
        shoppingItems: data,

        addToCart: (price) => {
            this.setState(prevState => {
                return {
                    total: prevState.total += price
                }
            });
        },

        removeFromCart: (price) => {
            if(this.state.total <= 0) {
                alert('Cart is empty');
            } else {

                this.setState(prevState => {
                    return {
                        total: prevState.total -= price
                    }
                });

            }
        },

        
     }
    render() { 
        return ( 
            <ShoppingContext.Provider value={{...this.state}}>
                {this.props.children}
            </ShoppingContext.Provider>
         );
    }
}
 
export default ShoppingProvider;