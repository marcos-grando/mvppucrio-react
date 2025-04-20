import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/banner/Banner';
import Sobre from './components/sobre/Sobre';
import Sobreall from './components/Sobreall';
import Calendar from './components/calendar/Calendar';
import Newsnow from './components/newsnow/Newsnow';
import Singlenews from './components/Singlenews';
import Footer from './components/Footer';

function App() {
    const [carouselItems, setCarouselItems] = useState([]);
    const [headerLinks, setHeaderLinks] = useState([]);
    const [sobre, setSobre] = useState([{ imgs: [], texto: [], title: "" }]);
    const [eventday, setEventday] = useState([]);
    const [news, setNews] = useState([]);

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
            .then((response) => response.json())
            .then((data) => {
                setCarouselItems(data.carouselItems)
                setHeaderLinks(data.headerLinks)
                setSobre(data.sobre)
                setEventday(data.eventday)
                updateNewsDates(data.news);
            });
    }, []);

    const updateNewsDates = (newsList) => {
        const currentMonth = new Date().getMonth();
        const allNewsList = newsList.map((newsItem, index) => {
            const postDate = new Date();
            postDate.setDate(postDate.getDate() - 4 * (index + 1));
            return {
                ...newsItem,
                date: `Notícia de ${postDate.getDate().toString().padStart(2, '0')}/${(postDate.getMonth() + 1).toString().padStart(2, '0')}/${postDate.getFullYear()} às ${newsItem.hour}`
            };
        });
        setNews(allNewsList);
    };
    // Função para iterar aos objetos da lista de notícias (.json);
    // Criando uma nova data fictícia à depender do dia que usuário está acessando;

    return (
        <>
            <ScrollToTop />
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header dataJson={headerLinks} />
                                <Banner dataJson={carouselItems} />
                                <Sobre dataJson={sobre} />
                                <Calendar dataJson={eventday} />
                                <Newsnow dataJson={news} />
                            </>
                        }
                    />
                    <Route path="/calendario" element={<Calendar dataJson={eventday} onlypage='true' />} />
                    <Route path="/noticias" element={<Newsnow dataJson={news} onlypage='true' />} />
                    <Route path="/sobre" element={<Sobreall dataJson={sobre} onlypage='true' />} />
                    <Route path="/noticias/:slug" element={<Singlenews />} />

                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;