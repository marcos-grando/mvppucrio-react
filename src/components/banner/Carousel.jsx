import React, { useEffect, useState, useRef } from 'react';
import List from './List';
import Thumb from './Thumb';
import Arrows from '../Arrows';

function Carousel({ dataJson }) {
    const timeRef = useRef(null);
    const runNextAuto = useRef(null);
    const timeRunning = 600;
    const timeAutoNext = 10000;

    const showSlider = (type) => {
        const SliderDom = document.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        const carouselDom = document.querySelector('.carousel');
        const SliderItemsDom = SliderDom.querySelectorAll('.item');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        thumbnailItemsDom[0].querySelector('.content').style.opacity = '1';

        setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto.current);
        loadingBar();
        runNextAuto.current = setTimeout(() => showSlider('next'), timeAutoNext);
    };

    const loadingBar = () => {
        if (timeRef.current) {
            timeRef.current.style.transition = 'none';
            timeRef.current.style.width = '100%';
            setTimeout(() => {
                timeRef.current.style.transition = `width ${timeAutoNext - 100}ms linear`;
                timeRef.current.style.width = '0%';
            }, 100);
        }
    };
    useEffect(() => {
        loadingBar();
        runNextAuto.current = setTimeout(() => showSlider('next'), timeAutoNext);

        return () => clearTimeout(runNextAuto.current);
    }, []);

    return (
        <div className="carousel">
            <List dataJson={dataJson} />
            <Thumb dataJson={dataJson} />
            <Arrows onNext={() => showSlider('next')} onPrev={() => showSlider('prev')} />
            <div ref={timeRef} className="time"></div>
        </div>
    );
}

export default Carousel;
