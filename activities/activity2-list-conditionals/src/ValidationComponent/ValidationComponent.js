import React from 'react'

const validateComponent = (props) => {
    const textLongMsg = "Text too long enough";
    const textShortMsg = "Text too short"
    const textLengthMsg = props.textLength > 5 ? textLongMsg : textShortMsg
    
    return (
        <div className="ValidateComponent">
            <p>Your text is: {textLengthMsg}</p>
        </div>
    )
}

export default validateComponent;