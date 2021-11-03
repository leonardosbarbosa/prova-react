import React from 'react'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label for={props.id} class="input__label">{props.label}</label>
            <input type={props.type} id={props.id} class="form-control input-style" placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input