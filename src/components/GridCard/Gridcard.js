import React from "react";

function Gridcard(props) {

    return (
        <>
            <div class="card">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                </div>
            </div>
        </>
    )
}

export default Gridcard