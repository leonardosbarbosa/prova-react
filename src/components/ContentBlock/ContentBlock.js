import React from "react"

function ContentBlock(props) {

    let bsClass = "col-md-4 three-grids-columns mt-5";
    if (props.photo) {
        bsClass = "col-md-6 column mt-4"
    }
    
    return (
        <>
            <div className={bsClass}>
                {props.children}
            </div>
        </>
    )
}

export default ContentBlock