import React, { useEffect, useState } from "react";
import MainHero from "../../components/MainHero/MainHero";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
    const [heroBackground, setHeroBackground] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getRandomPhoto")
            .then((response) => response.json())
            .then((data) => setHeroBackground(data))
            .catch((err) => console.log(err));

        // get random images in the begining
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getListPhotos")
            .then((response) => response.json())
            .then((data) => setImages(data))
            .catch((err) => console.log(err));
    }, []);

    // handle form search
    async function handleSearch(searchTerm) {
        setSearchQuery(searchTerm);
        setLoading(true);
        fetch(`https://unsplash-gallery.netlify.app/.netlify/functions/searchUnsplash?query=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
                setImages(data.results);
            })
            .catch((err) => console.log("Error", err));
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

            <Gallery images={images} loading={loading} searchQuery={searchQuery} />
        </div>
    );
}
