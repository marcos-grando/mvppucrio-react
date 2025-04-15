import React from "react";
import { Link } from "react-router-dom";

function Singlenews({ news }) {
    if (!news) {
        return <p>Notícia não encontrada</p>; // Caso o slug seja inválido
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
                    <p><i className="bi bi-clock"></i> {news?.date}</p>
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