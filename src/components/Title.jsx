import React from "react";

function Title({ title, onlypage }) {

    return (
        <div className="all-title">
            <h1 style={onlypage === 'true' ? { color: 'var(--cor66)' } : undefined} >{title}</h1>
            <h2>{title}</h2>
        </div>
    )
}

export default Title;