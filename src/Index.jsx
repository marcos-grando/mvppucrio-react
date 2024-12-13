import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import '../estilo/style.css';
import '../estilo/estilo-banner/banner.css';
import '../estilo/estilo-banner/infos.css';
import '../estilo/estilo-banner/thumb.css';
import '../estilo/estilo-banner/animation.css';
import '../estilo/estilo-sobre/sobre.css';
import '../estilo/estilo-sobre/sobreall.css';
import '../estilo/estilo-sobre/text.css';
import '../estilo/estilo-sobre/slide.css';
import '../estilo/estilo-calendar/calendar.css';
import '../estilo/estilo-calendar/dates.css';
import '../estilo/estilo-calendar/dates-weekday.css';
import '../estilo/estilo-calendar/infos.css';
import '../estilo/estilo-calendar/infos-content.css';
import '../estilo/estilo-newsnow/newsnow.css';
import '../estilo/estilo-newsnow/slidenews.css';
import '../estilo/estilo-newsnow/allnews.css';
import '../estilo/estilo-singlenews/singlenews.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

