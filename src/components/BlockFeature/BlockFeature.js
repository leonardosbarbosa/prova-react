import React from "react"

function BlockFeature(props) {
    if (props.photo) {
        return (
            <>

                <span className={"fa " + props.icon + " icon-fea"} aria-hidden="true"></span>
                <a href="#">
                    {props.title}
                </a>
                <p>Type your text here... Lorem ipsum dolor sit amet.</p>


            </>
        )
    } else {
        return (
            <>

                <span className={"fa " + props.icon + " icon-fea"} aria-hidden="true"></span>
                <a href="#">
                    <h4>{props.title}</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" className="actionbg">Read More</a>

            </>
        )
    }
}

export default BlockFeature