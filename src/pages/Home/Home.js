import React, { useEffect } from 'react';
import MainHero from '../../components/MainHero/MainHero';

export default function Home() {
    useEffect(() => {
        fetch('./netlify/functions/searchUnsplash')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <MainHero />
        </div>
    );
}
