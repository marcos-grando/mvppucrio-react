import React from "react";
import Arrows from "../Arrows";
import Item from "../Item";

function Slide({ onNext, dataJson }) {
    const showSlider = (type) => {
        const sobreDom = document.querySelector('.sobre-slide .slide ');
        const butArrows = document.querySelector('.sobre-content .sobre-slide .arrows');
        if (butArrows) {
            butArrows.classList.add('inactive');
        }

        if (type === 'next') {
            const testDom = document.querySelectorAll('.sobre-slide .slide .item');
            sobreDom.appendChild(testDom[0]);
            sobreDom.classList.add('next');
        } else {
            const testDom = document.querySelectorAll('.sobre-slide .slide .item');
            sobreDom.prepend(testDom[testDom.length - 1]);
            sobreDom.classList.add('prev');
        }

        setTimeout(() => {
            sobreDom.classList.remove('next');
            sobreDom.classList.remove('prev');
            butArrows.classList.remove('inactive');
        }, 500);
    };

    return (
        <div className="sobre-slide">
            <div className="slide">
                {dataJson?.[0]?.imgs?.length > 0 && dataJson[0].imgs.map((img, index) => (
                    <Item key={index} img={img} artista={'Teatro Municipal'} topic={'Via São Bento'} imgClass={'slide-img'} />
                ))}
            </div>
            <Arrows onNext={() => showSlider('next')} onPrev={() => showSlider('prev')} />
        </div>
    )
}

export default Slide;