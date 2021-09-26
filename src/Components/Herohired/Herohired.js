import React from 'react';

const Herohired = (props) => {
    const {name}= props.hero;
    return (
        <div>
            <p>{name} </p>
        </div>
    );
};

export default Herohired;