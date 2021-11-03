import React from 'react'

function Breadcrumb(props) {

    let items = props.items
    return(
        <>
                        <nav aria-label="breadcrumb" className="mb-4">
                            <ol className="breadcrumb my-breadcrumb">
                                {
                                    items.map((item, i, arr) => {
                                        return (
                                            <li className="breadcrumb-item"><a href="#">{item}</a></li>
                                        )
                                    })
                                }
                            </ol>
                        </nav>
        </>
    )
}

export default Breadcrumb