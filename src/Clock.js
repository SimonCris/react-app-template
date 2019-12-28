import React from 'react';

function clock(props) {

    const minusTime = Date.now() + props.timezone * 3600 * 1000;
    const finalDate = new Date(minusTime);

    return <h2>In {props.country} is { finalDate.toLocaleDateString() +
                ' - ' + finalDate.toLocaleTimeString()} </h2>;
}

export default clock;
