import React from "react";

function Footer() {
    const clickNav = (rota) => {
        window.open(`${rota}`, "_blank");
    };

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-img">
                    <img src="/imgs/ss.png" alt="" />
                </div>
                <div className="footer-content">
                    <div className="footer-infos">
                        <div className="infos infos-call">
                            <p>Semana Sinfônica.</p>
                            <p>Sua vida em <em>sintonia</em>.</p>
                        </div>
                        <div className="infos infos-redes">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                        <div className="infos infos-main">
                            <p onClick={() => clickNav('/sobre')} style={{cursor: "pointer"}} >Sobre Nós</p>
                            <p onClick={() => clickNav('/calendario')} style={{cursor: "pointer"}} >Programação</p>
                            <p onClick={() => clickNav('/noticias')} style={{cursor: "pointer"}} >Nossas Notícias</p>
                        </div>
                    </div>
                    <div className="infos-local">
                        <div className="local">
                            <p><a>Endereço:</a> Av. Meira Júnior, 1240 - Jardim Paulistano, Ribeirão Preto - SP, 14090-270</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.500542011466!2d-47.801858324591585!3d-21.17226597819243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf015f432e1b%3A0xdeda056ec76eaec1!2sTeatro%20Municipal%20de%20Ribeir%C3%A3o%20Preto!5e0!3m2!1spt-BR!2sbr!4v1732832135615!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;