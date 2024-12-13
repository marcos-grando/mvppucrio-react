import React from "react";

function Arrows({ onNext, onPrev }) {
    return (
        <div className="arrows">
            <button onClick={onPrev}> &lt; </button>
            <button onClick={onNext}> &gt; </button>
        </div>
    );
}

export default Arrows;