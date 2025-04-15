import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Slide from "./sobre/Slide";

function Sobreall({ dataJson, onlypage }) {
    if (!dataJson || dataJson.length === 0 || !dataJson[0].imgs) {
        return <p>Carregando...</p>;
    }

    return (
        <section className="sobreall">
            <div className="onlypage">
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/sobre">Sobre Nós</Link>
                        <Link to="/calendario">Calendário</Link>
                        <Link to="/noticias">Notícias</Link>
                    </nav>
                </header>
                <img src="/imgs/sobre-img2.jpg" alt="" />
            </div>
            <div className="sobre-container">
                <Title title={"PROJETO 'CANTABILE'"} onlypage={onlypage} />

                <div className="sobre-content">
                    <Slide dataJson={dataJson} />
                    <div className="text">
                        <p>{dataJson[0]?.title}</p>
                        {dataJson[0]?.texto.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobreall;