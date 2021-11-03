import React from "react"

function Chart(props) {

    return (
        <>
            <div className="col-lg-6 pr-lg-2 chart-grid">
                <div className="card text-center card_border">
                    <div className="card-header chart-grid__header">
                        {props.name}
                    </div>
                    <div className="card-body">
                        {/* <!-- bar chart --> */}
                        <div id="container">
                            <canvas id={props.id}></canvas>
                        </div>
                        {/* <!-- //bar chart --> */}
                    </div>
                    <div className="card-footer text-muted chart-grid__footer">
                        Updated {props.lastUpdate}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart