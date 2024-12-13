import React, { useState } from "react";
import News from "./News";

function Allnews({ dataJson, onClickNews }) {
    const [showNews, setShowNews] = useState(3);
    const loadMore = () => {
        setShowNews((countShow) => countShow + 3);
    };

    return (
        <div className="all-news">
            <p className="ptitle">Todas Notícias</p>
            {dataJson?.slice(0, showNews).map((news, index) => (
                <div className="each-allnews" key={index}>
                    <News onClickNews={() => onClickNews(news)} img={news.img} title={news.title} date={news.date} />
                </div>
            ))}

            {showNews < dataJson.length && (
                <button onClick={loadMore}>Carregar mais notícias <i className="bi bi-caret-down-fill"></i></button>
            )}
        </div>
    )
}

export default Allnews;