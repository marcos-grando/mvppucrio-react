import React from "react";

function News({ img, title, date, onClickNews }) {
    return (
        <div className="news" onClick={onClickNews}>
            <div className="news-img">
                <img src={img} alt="" />
            </div>
            <div className="news-content">
                <p>{title}</p>
                {date === 'false' ? '' : <p> <span className="bi bi-clock"></span> {date} </p>}
            </div>
        </div>
    )
}

export default News;