import React, { useState } from "react";
import Title from "../Title";
import Infos from "./Infos";
import Dates from "./Dates";

function Calendar({ dataJson, onlypage }) {

    const [selectDay, setSelectDay] = useState(0);
    const [selectDate, setSelectDate] = useState(null);

    const selectEventday = (index, day) => {
        setSelectDay(index);
        setSelectDate(day);
    };

    const weekdivs = document.querySelectorAll(".calendar-monthdays .week-event");
    weekdivs.forEach((weekdiv, index) => {
        weekdiv.addEventListener("click", () => {
            weekdivs.forEach((div) => div.classList.remove("selected"));
            weekdiv.classList.add("selected")
        })
    })


    return (
        <section className="calendar" style={onlypage === 'true' ? { backgroundColor: 'var(--cor66)' } : undefined}>
            {
                onlypage === 'true' ?
                    (
                        <div className="onlypage">
                            <header>
                                <nav>
                                    <a href="/">Home</a>
                                    <a href="/sobre">Sobre Nós</a>
                                    <a href="/calendario">Calendário</a>
                                    <a href="/noticias">Notícias</a>
                                </nav>
                            </header>
                            <img src="/imgs/calendar.jpg" style={{objectPosition: 'center'}} alt="" />
                        </div>
                    )
                    :
                    ''
            }
            <div className="calendar-container">
                <Title title={"CALENDÁRIO"} onlypage={onlypage} />
                <div className="calendar-content">
                    <Infos dataJson={dataJson} selectDay={selectDay} selectDate={selectDate} onlypage={onlypage} />
                    <Dates onSelectDay={selectEventday} />
                </div>
            </div>
        </section>
    );
}

export default Calendar;