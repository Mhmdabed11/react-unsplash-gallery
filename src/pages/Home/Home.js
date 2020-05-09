import React, { useEffect, useState } from "react";
import MainHero from "../../components/MainHero/MainHero";

export default function Home() {
    const [heroBackground, setHeroBackground] = useState({});
    useEffect(() => {
        // fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getRandomPhoto")
        //     .then((response) => response.json())
        //     .then((data) => setHeroBackground(data))
        //     .catch((err) => console.log(err));
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/searchUnsplash")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <MainHero bg={heroBackground && heroBackground.urls && heroBackground.urls.regular} />
        </div>
    );
}
