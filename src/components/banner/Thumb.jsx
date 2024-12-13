import React from "react";
import Item from "../Item";

function Thumb({ dataJson }) {
    return (
        <div className="thumbnail">
            <Item
                img={dataJson[1]?.img}
                artista={dataJson[1]?.artista}
                topic={dataJson[1]?.topic}
                imgClass='violino'
                type='thumb'
            />
            <Item
                img={dataJson[2]?.img}
                artista={dataJson[2]?.artista}
                topic={dataJson[2]?.topic}
                imgClass='orquestra'
                type='thumb'
            />
            <Item
                img={dataJson[0]?.img}
                artista={dataJson[0]?.artista}
                topic={dataJson[0]?.topic}
                imgClass='dupla'
                type='thumb'
            />
        </div>
    );
}

export default Thumb;