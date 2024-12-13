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
    const [updatedNews, setUpdatedNews] = useState([]);
    const [selectNews, setSelectNews] = useState(null);

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
                setNews(data.news)
                updateNewsDates(data.news);
            });
    }, []);

    const updateNewsDates = (newsList) => {
        const currentMonth = new Date().getMonth();
        const updatedNewsList = newsList.map((newsItem, index) => {
            const postDate = new Date();
            postDate.setDate(postDate.getDate() - 4 * index);
            return {
                ...newsItem,
                date: `Notícia de ${postDate.getDate().toString().padStart(2, '0')}/${(postDate.getMonth() + 1).toString().padStart(2, '0')}/${postDate.getFullYear()} às ${newsItem.hour}`
            };
        });
        setUpdatedNews(updatedNewsList);
    };
    // Função para iterar aos objetos da lista de notícias (.json);
    // Criando uma nova data fictícia à depender do dia que usuário está acessando;

    const clickNews = (newsSelect) => {
        setSelectNews(newsSelect)
    };
    

    return (
        <Router basename="/">
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
                                <Newsnow dataJson={updatedNews} onClickNews={clickNews} />
                            </>
                        }
                    />
                    <Route path="/calendario" element={<Calendar dataJson={eventday} onlypage='true' />} />
                    <Route path="/noticias" element={<Newsnow dataJson={updatedNews} onClickNews={clickNews} onlypage='true' />} />
                    <Route path="/sobre" element={<Sobreall dataJson={sobre} onlypage='true' />} />
                    <Route path="/noticias/:slug" element={<Singlenews news={selectNews} />} />

                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;