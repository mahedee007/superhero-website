import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const hero of cart){
        total = total + hero.salary;
      
        

    }
    return (
        <div >
            <h1>Hire summary</h1>
                <p className= 'cart-total-count'>Actors Hired: {props.cart.length}</p>
                <p className= 'cart-total-count'>Total Cost: ${total} </p>
                
        </div>
    );
};

export default Cart;