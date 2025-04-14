import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/banner/Banner';
import Sobre from './components/sobre/Sobre';
import Calendar from './components/calendar/Calendar';
import Newsnow from './components/newsnow/Newsnow';
import Footer from './components/Footer';

function App() {
    const [carouselItems, setCarouselItems] = useState([]);
    const [headerLinks, setHeaderLinks] = useState([]);
    const [sobre, setSobre] = useState({});
    const [eventday, setEventday] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                setCarouselItems(data.carouselItems)
                setHeaderLinks(data.headerLinks)
                setSobre(data.sobre)
                setEventday(data.eventday)
                setNews(data.news)
            });
    }, []); 

    return (
        <div className="app">
            <Header dataJson={headerLinks} />
            <Banner dataJson={carouselItems} />
            <Sobre dataJson={sobre} />
            <Calendar dataJson={eventday} />
            <Newsnow dataJson={news} />
            <Footer />
        </div>
    );
}

export default App;