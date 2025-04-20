import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Singlenews() {
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [indexNews, setIndexNews] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`).then(res => res.json()).then(data => {
            const found = data.news.find(n => n.slug === slug);
            setNews(found || null);
            const findIndex = data.news.findIndex(item => item.slug === slug);
            setIndexNews(findIndex >= 0 ? findIndex : null);
        });
    }, [slug])

    if (!news) return <p>Notícia não encontrada</p> // Caso o slug seja inválido

    const getFakeDate = (newsHour, index) => {
        const postDate = new Date();
        postDate.setDate(postDate.getDate() - 4 * (index + 1));

        return `Notícia de ${postDate.getDate().toString().padStart(2, '0')}/${(postDate.getMonth() + 1).toString().padStart(2, '0')}/${postDate.getFullYear()} às ${newsHour}`
    }

    return (
        <section className="singlenews">
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                    <Link to="/calendario">Calendário</Link>
                    <Link to="/noticias">Notícias</Link>
                    <p></p>
                </nav>
            </header>

            <div className="singlenews-container">
                <div className="singlenews-content">
                    <p>NOTÍCIA</p>
                    <p>{news?.title}</p>
                    <p>
                        <i className="bi bi-clock"></i>
                        {getFakeDate(news?.hour, indexNews)}
                    </p>
                    <div className="head-img">
                        <img src={news?.img} alt="" />
                    </div>
                    <p>{news?.subtitle}</p>
                    {news?.texto.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Singlenews;