import React from 'react';
// import Content from './Content';

function Item({ img, evento, artista, topic, desc, type, imgClass }) {
    return (
        <div className='item'>
            <img src={img} alt={artista} />
            {type === 'list' ? (
                <div className={`content ${imgClass}`}>
                    <div className="evento">{evento}</div>
                    <div className="artista">{artista}</div>
                    <div className="topic">{topic}</div>
                    <div className="desc">{desc}</div>
                </div>
            ) : (
                <div className={`content ${imgClass}`}>
                    <div className="artista"><p>{artista}</p></div>
                    <div className="topic"><p>{topic}</p></div>
                </div>
            )}
        </div>
    );
}

export default Item;