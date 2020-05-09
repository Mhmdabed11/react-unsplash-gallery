import React, { useEffect, useState } from "react";
import MainHero from "../../components/MainHero/MainHero";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
    const [heroBackground, setHeroBackground] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getRandomPhoto")
            .then((response) => response.json())
            .then((data) => setHeroBackground(data))
            .catch((err) => console.log(err));
    }, []);

    // handle form search
    function handleSearch(searchTerm) {
        setLoading(true);
        fetch(`https://unsplash-gallery.netlify.app/.netlify/functions/searchUnsplash?query=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setImages(data.results);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <MainHero
                bg={heroBackground && heroBackground.urls && heroBackground.urls.regular}
                user={
                    heroBackground &&
                    heroBackground.user &&
                    `${heroBackground.user.first_name} ${heroBackground.user.last_name}`
                }
                handleSearch={handleSearch}
            />
            <Gallery images={images} loading={loading} />
        </div>
    );
}
