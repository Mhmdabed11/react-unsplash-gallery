const fetch = require("node-fetch");
const UNSPLASH_URL = "https://api.unsplash.com/search/photos?query=office";
exports.handler = async function (event, context, callback) {
    console.log(process.env.ACCESS_TOKEN);
    // const res = await fetch(UNSPLASH_URL, {
    //     headers: { Authorization: `Client-ID C59rswL-bq7lJeQ23ZGEslVSW1bewnHiI9WNJ-FFEOk` },
    // });
    // const data = await res.json();
    const data = { name: "hey" };
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
    });
};
