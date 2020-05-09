import React, { useEffect, useState } from "react";
import MainHero from "../../components/MainHero/MainHero";

export default function Home() {
    const [heroBackground, setHeroBackground] = useState({});
    useEffect(() => {
        fetch(".netlify/functions/getRandomPhoto")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <MainHero bg={heroBackground && heroBackground.urls && heroBackground.urls.full} />
        </div>
    );
}
