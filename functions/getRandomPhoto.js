const fetch = require("node-fetch");
const UNSPLASH_URL = "https://api.unsplash.com/photos/random";

exports.handler = async function (event, context, callback) {
    const res = await fetch(UNSPLASH_URL, {
        headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
    });
    const data = await res.json();
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
    });
};
