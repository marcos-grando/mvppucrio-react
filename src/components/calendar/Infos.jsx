import React from "react";
import Eventday from "./Eventday";

function Infos({ dataJson, selectDay, selectDate, onlypage }) {

    return (
        <div className="calendar-infos" style={onlypage === 'true' ? { backgroundColor: 'var(--cor66)' } : undefined} >
            <Eventday dataJson={dataJson} selectDay={selectDay} selectDate={selectDate} />
            <div className="infos-rightarrow">
                
            </div>
        </div>
    );
}

export default Infos;