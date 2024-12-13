import React from "react";
import Item from "../Item";

// Item => img, evento, artista, topic, desc, type, imgClass

function List({ dataJson }) {
    return (   
        <div className="list">
            <Item 
                img={dataJson[0]?.img}
                evento={dataJson[0]?.evento}
                artista={dataJson[0]?.artista}
                topic={dataJson[0]?.topic}
                desc={dataJson[0]?.desc}
                imgClass='dupla'
                type='list'
            />
            <Item 
                img={dataJson[1]?.img}
                evento={dataJson[1]?.evento}
                artista={dataJson[1]?.artista}
                topic={dataJson[1]?.topic}
                desc={dataJson[1]?.desc}
                imgClass='violino'
                type='list'
            />
            <Item 
                img={dataJson[2]?.img}
                evento={dataJson[2]?.evento}
                artista={dataJson[2]?.artista}
                topic={dataJson[2]?.topic}
                desc={dataJson[2]?.desc}
                imgClass='orquestra'
                type='list'
            />
        </div>
    );
}

export default List;