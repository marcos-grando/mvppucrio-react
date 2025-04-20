import React from "react";
import News from "./News";
import Arrows from "../Arrows";

function Carouselnews({ dataJson }) {
    const showSlider = (type) => {
        const slideDom = document.querySelector('.news-slide .slide');
        const butArrows = document.querySelector('.news-slide .arrows');

        if (butArrows) {
            const buttons = butArrows.querySelectorAll('button');
            buttons.forEach((button) => {
                button.disabled = true;
            });
        }

        if (type === 'next') {
            const testDom = document.querySelectorAll('.news-slide .slide .news');
            setTimeout(() => { slideDom.appendChild(testDom[0]); }, 550);
            slideDom.classList.add('next');

        } else {
            const testDom = document.querySelectorAll('.news-slide .slide .news');
            setTimeout(() => { slideDom.prepend(testDom[testDom.length - 1]); }, 550);
            slideDom.classList.add('prev');
        }

        setTimeout(() => {
            slideDom.classList.remove('next');
            slideDom.classList.remove('prev');
            if (butArrows) {
                const buttons = butArrows.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.disabled = false;
                });
            };
        }, 550);
    };

    return (
        <div className="news-slide">
            <div className="last-news">
                <p>Últimas Notícias</p>
            </div>
            <div className="slide-container">
                <div className="slide">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <News key={index} slugNews={dataJson[index]?.slug} img={dataJson[index]?.img} title={dataJson[index]?.title} date='false' />
                    ))}
                </div>
            </div>
            <Arrows onNext={() => showSlider('next')} onPrev={() => showSlider('prev')} />
        </div>
    )
}

export default Carouselnews;