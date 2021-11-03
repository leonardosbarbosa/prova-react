import React from "react";

function StatsCard(props) {

    return (
        <>
            <div className="card card_border border-primary-top p-4">
                <i className={"lnr " + props.icon}> </i>
                <h3 className={"text-" + props.color + " number"}>{props.number}</h3>
                <p className="stat-text">{props.text} </p>
            </div>
        </>
    )
}

export default StatsCard