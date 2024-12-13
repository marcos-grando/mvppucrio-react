import React, { useEffect } from "react";
import Carousel from "./Carousel";

function Banner({ dataJson }) {
    return (
        <section className="banner">
            <Carousel dataJson={dataJson} />
        </section>
    )
}

export default Banner;