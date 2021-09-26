import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import ('./Actors.css');


const Actors = () => {
    const [heros, setHeros] = useState([]);

    useEffect(()=>{
        fetch('./actors.JSON')
        .then(res => res.json())
        .then(data => setHeros(data))
    },[])
    const handleHireBtn =()

    return (
        <div className="actors-container">
            <div className='hero-container'>
               
                {
                    
                    heros.map(hero=> <Hero hero={hero} key= {hero.id}></Hero>)
                }

            </div>
            <div className='cart-container'>
                <h1>Hire summary</h1>
                <p>Actors Hired: 0</p>
                <p>Total Cost: </p>

            </div>
        </div>
    );
}

export default Actors;