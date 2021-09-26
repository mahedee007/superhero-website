import React from 'react';
import './Herohired.css'
const Herohired = (props) => {
    const {name}= props.hero;
    return (
        <div>
            <p className='hiredhero'>{name} </p>
        </div>
    );
};

export default Herohired;