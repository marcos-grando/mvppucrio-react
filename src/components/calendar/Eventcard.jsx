import React from "react";

function Eventcard({ dia, hora, info1, info2 }) {
    return (
        <div className="event-card">
            <div className="card-date">
                <p>{dia}</p>
                <p>{hora}</p>
            </div>
            <div className="arrowright"></div>
            <div className="card-info">
                <p>{info1}</p>
                <p>{info2}</p>
            </div>
        </div>
    )
}

export default Eventcard;