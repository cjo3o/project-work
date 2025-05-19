import React from 'react';

function Person({name, age, position}) {
    let myStyle = {
        position: 'absolute',
        zIndex: 100,
        width: '200px',
        backgroundColor: '#fff',
    };
    if (position === "right") {
        myStyle.right = "0";
    } else {
        myStyle.bottom = "0";
    }
    return (
        <div style={{
            ...myStyle
        }}>
            <h2>name = {name}</h2>
            <h2>age = {age}</h2>
        </div>
    );
}

export default Person;