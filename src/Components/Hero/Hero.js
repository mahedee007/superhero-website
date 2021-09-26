import React from 'react';
import './Hero.css';

const Hero = (props) => {
    const{name, gender, age, img, bestmovie, salary}= props.hero;
    return (
        <div className='hero'>
            <img className='hero-img' src={img} alt='profile-img'/>
            <h2>{name}</h2>
            <p>gender: {gender}</p>
            <p>age: {age} </p>
            <p>best movie: {bestmovie}</p>
            <p>Salary: ${salary}</p>
            <button className='hire-btn'>Hire</button>

        </div>
    );
};

export default Hero;