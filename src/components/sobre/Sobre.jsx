import React from "react";
import Title from "../Title";
import Slide from "./Slide";

function Sobre({ dataJson }) {
    if (!dataJson || dataJson.length === 0 || !dataJson[0].imgs) {
        return <p>Carregando...</p>;
    }
    
    return (
        <section className="sobre">
            <div className="sobre-container">
                <Title title={"PROJETO 'CANTABILE'"} />
                <div className="sobre-content">
                    <div className="sobre-text">
                        <div className="text">
                            <p>{dataJson?.[0]?.title}</p>
                            <p>{dataJson?.[0]?.texto[0]}</p>
                            <p>{dataJson?.[0]?.texto[1]}</p>
                        </div>
                        <button onClick={() => window.location.href = "/sobre"}>VER MAIS SOBRE</button>
                    </div>
                    <Slide dataJson={dataJson} />
                </div>
            </div>
        </section>
    );
}

export default Sobre;