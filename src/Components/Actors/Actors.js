import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import Herohired from '../Herohired/Herohired';
import ('./Actors.css');


const Actors = () => {
    const [heros, setHeros] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./actors.JSON')
        .then(res => res.json())
        .then(data => setHeros(data))
    },[])
    const handleHireBtn =(hero)=>{
        const newCart = [...cart, hero];
        setCart (newCart);
    }

    return (
        <div className="actors-container">
            <div className='hero-container'>
               
                {
                    
                    heros.map(hero=> <Hero hero={hero} key= {hero.id} handleHireBtn={handleHireBtn}></Hero>)
                }

            </div>
            <div className='cart-container'>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
                <div>
                    {cart.map(hero => <Herohired key ={hero.id} hero={hero}></Herohired>)}
                </div>

            </div>
        </div>
    );
}

export default Actors;