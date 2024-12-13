import React from "react";
import Eventcard from "./Eventcard";
import Dates from "./Dates";

function Eventday({ dataJson, selectDay, selectDate }) {
    const eventDay = dataJson[selectDay];

    if (!eventDay) {
        return <p>Nenhum evento encontrado para o dia selecionado</p>;
    }

    return (
        <div className="infos-container">
                <div className="infos-date">
                    <i className="bi bi-calendar-range"></i>
                    <div className="date">
                        <p>{eventDay?.weekday}</p>
                        <p>{selectDate}</p>
                    </div>
                </div>
                <div className="infos-content">
                    <p className="ndia">{eventDay?.nDay}</p>
                    {eventDay?.eventcard.map((event, index) => (
                        <Eventcard
                            key={index}
                            dia={eventDay?.day}
                            hora={event.hours}
                            info1={event.show}
                            info2={event.local}
                        />
                    ))}
                </div>
            </div>
    );
}

export default Eventday;