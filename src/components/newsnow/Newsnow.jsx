import React from "react";
import { Link } from "react-router-dom";
import Carouselnews from "./Carouselnews";
import Allnews from "./Allnews";
import Title from "../Title";

function Newsnow({ dataJson, onlypage }) {

    return (
        <section className="newsnow" style={onlypage === 'true' ? { backgroundColor: 'var(--cor66)' } : undefined}>
            {
                onlypage === 'true' ?
                    (
                        <div className="onlypage">
                            <header>
                                <nav>
                                    <Link to="/">Home</Link>
                                    <Link to="/sobre">Sobre Nós</Link>
                                    <Link to="/calendario">Calendário</Link>
                                    <Link to="/noticias">Notícias</Link>
                                </nav>
                            </header>
                            <img src="/imgs/news.jpg" alt="" />
                        </div>
                    )
                    :
                    ''
            }
            <div className="newsnow-container">
                <Title title="NOTÍCIAS" onlypage={onlypage} />
                <Carouselnews dataJson={dataJson} />
                <Allnews dataJson={dataJson}  />
            </div>
        </section>
    )
}

export default Newsnow;