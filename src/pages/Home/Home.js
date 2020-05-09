import React, { useEffect, useState } from "react";
import MainHero from "../../components/MainHero/MainHero";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
    const [heroBackground, setHeroBackground] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [renderedRandomList, setRenderedRandomList] = useState(false);

    useEffect(() => {
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getRandomPhoto")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => setHeroBackground(data))
            .catch((err) => console.log(err));

        // get random images in the begining
        fetch("https://unsplash-gallery.netlify.app/.netlify/functions/getListPhotos")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setImages(data);
                setRenderedRandomList(true);
            })
            .catch((err) => console.log(err));
    }, []);

    // handle form search
    async function handleSearch(searchTerm) {
        setSearchQuery(searchTerm);
        setLoading(true);
        fetch(`https://unsplash-gallery.netlify.app/.netlify/functions/searchUnsplash?query=${searchTerm}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setImages(data.results);
            })
            .catch((err) => {
                setLoading(false);
                setImages([]);
            });
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

            <Gallery
                images={images}
                loading={loading}
                searchQuery={searchQuery}
                renderedRandomList={renderedRandomList}
            />
        </div>
    );
}
