import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook , faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Hero.css';

const Hero = (props) => {
    const{name, gender, age, img, bestmovie, salary}= props.hero;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const faceBook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    return (
        <div className='hero'>
            <img className='hero-img' src={img} alt='profile-img'/>
            <h2>{name}</h2>
            <p>gender: {gender}</p>
            <p>age: {age} </p>
            <p>best movie: {bestmovie}</p>
            <p>Salary: ${salary}</p>
            <button onClick={() => props.handleHireBtn(props.hero)} className='hire-btn'>{shoppingCart} HIRE</button>
           
            <p>{faceBook} {instagram} {linkedin} </p>

        </div>
    );
};

export default Hero;