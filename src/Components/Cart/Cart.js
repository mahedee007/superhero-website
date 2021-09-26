import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const hero of cart){
        total = total + hero.salary;
      
        

    }
    return (
        <div>
            <h1>Hire summary</h1>
                <p>Actors Hired: {props.cart.length}</p>
                <p>Total Cost: ${total} </p>
                <p> </p>
        </div>
    );
};

export default Cart;