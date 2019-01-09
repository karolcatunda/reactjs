import React from 'react'

const charComponent = (props) => {
    let charStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div className="CharComponent" style={charStyle}>
        {props.char}
        </div>
    )

}

export default charComponent;