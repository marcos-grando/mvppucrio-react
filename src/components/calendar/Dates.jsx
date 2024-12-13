import React, { useEffect, useState } from "react";

function Dates({ onSelectDay }) {

    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    const monthName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay());
    // Define o dia que o calendário vai começar ser renderizado, na intenção do calendário conter somente 3 semanas: a atual, a semana do evento, e a posterior

    const eventStartDate = new Date(startDate);
    eventStartDate.setDate(eventStartDate.getDate() + 7);
    const eventEndDate = new Date(eventStartDate);
    eventEndDate.setDate(eventStartDate.getDate() + 7)
    // Define o primeimro e último dia do evento (semana sinfônica)

    useEffect(() => {
        const firstSelectDay = new Date(eventStartDate);
        const formatedSelectDay = firstSelectDay.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
        onSelectDay(0, formatedSelectDay);
    }, []);
    // Define pré seleções de dias do evento, incluindo a data formatada e o índice usado pro render da programação

    let remainDaysTxt;
    const remainDays = Math.ceil((eventStartDate - date) / 86400000);
    if (remainDays > 1) {
        remainDaysTxt = `O evento começa em ${remainDays} dias !!`;
    } else {
        remainDaysTxt = "Amanhã começa a SEMANA SINFÔNICA !!";
    }

    let eventDay = 0
    const days = Array.from({ length: 21 }).map((_, i) => {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);

        let className = "div-day"
        if (day.getDate() === date.getDate() && day.getMonth() === month) {
            className += " today";
        } else if (day >= eventStartDate && day < eventEndDate) {
            if (day.getTime() === eventStartDate.getTime()) {
                className += " week-event selected";
            } else {
                className += " week-event";
            }
            
        } else if (day.getMonth() === month) {
            className += " month1";
        } else {
            className += " month0";
        }

        const eventDayCount = className.includes("week-event") ? eventDay++ : null;

        return (
            <div key={i} className={className} onClick={className.includes("week-event") ? () => onSelectDay(eventDayCount, day.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })) : null}>
                {day.getDate()}
            </div>
        );
    });
    // Retorna um array com as divs para o calendário, a intenção é que independente do momento que seja visto esse projeto, a "Semana Sinfônica" ocorrerá na semana seguinte da atual


    return (
        <div className="calendar-dates">
            <div className="calendar-month">
                <div className="calendar-monthtitle">
                    <div className="monthnames">
                        <div className="prev-month">{monthName[(month - 1 + 12) % 12]}</div>
                        <div className="today-month">{monthName[month]}</div>
                        <div className="next-month">{monthName[(month + 1) % 12]}</div>
                    </div>
                </div>
                <div className="calendar-weekdays">
                    <div className="weekday">D</div>
                    <div className="weekday">S</div>
                    <div className="weekday">T</div>
                    <div className="weekday">Q</div>
                    <div className="weekday">Q</div>
                    <div className="weekday">S</div>
                    <div className="weekday">S</div>
                </div>
                <div id="calendar-monthdays" className="calendar-monthdays">
                    {days}
                </div>
                <div className="calendar-callevent">
                    {remainDaysTxt}
                </div>
            </div>
        </div>
    );
}

export default Dates;
