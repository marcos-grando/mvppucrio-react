import React, { useEffect } from "react";

function Header({ dataJson }) {
    useEffect(() => {
        const header = document.querySelector("header");

        const handleScroll = () => {
            if (window.scrollY > 100) {
                header.style.backgroundColor = "var(--cor00)";
            } else {
                header.style.backgroundColor = "transparent";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollSection = (sectionClass) => {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            const offset = 50;
            window.scrollTo({
                top: sectionPosition - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <header style={{ transition: "background-color 0.3s ease" }}>
            <nav>
                <a style={{ cursor: "pointer" }} onClick={() => scrollSection("banner")}>
                    {dataJson[0]?.opt}
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => scrollSection("sobre")}>
                    {dataJson[1]?.opt}
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => scrollSection("calendar")}>
                    {dataJson[2]?.opt}
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => scrollSection("newsnow")}>
                    {dataJson[3]?.opt}
                </a>
            </nav>
        </header>
    );
}

export default Header;