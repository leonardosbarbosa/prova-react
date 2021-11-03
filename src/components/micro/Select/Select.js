import React from 'react'

function Select(props) {

    return (
        <>
            <label for={props.id} class="input__label">{props.label}</label>
            <select id={props.id} class="form-control input-style">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </>
    )
}

export default Select