import React from "react";
import { Link } from "react-router-dom";

function News({ img, slugNews, title, date }) {
    return (
        <Link className="news" to={`/noticias/${slugNews}`}>
            <div className="news-img">
                <img src={img} alt="" />
            </div>
            <div className="news-content">
                <p>{title}</p>
                {date === 'false' ? '' : <p> <span className="bi bi-clock"></span> {date} </p>}
            </div>
        </Link>
    )
}

export default News;