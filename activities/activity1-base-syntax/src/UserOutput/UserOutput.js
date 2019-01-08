import React from 'react'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Beaultiful App!</p>
            <p>A simple username: {props.username}</p>
        </div>
    )
};

export default userOutput;