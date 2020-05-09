const fetch = require("node-fetch");

exports.handler = async function (event, context, callback) {
    try {
        const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=${event.queryStringParameters.query}`;
        const res = await fetch(UNSPLASH_URL, {
            headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
        });
        const data = await res.json();
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(data),
        });
    } catch (err) {
        callback(null, {
            statusCode: 404,
            body: JSON.stringify(err),
        });
    }
};
