const axios = require('axios');
const getCat = require('./category');

module.exports = async (options) => {
    // initialize variables
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var uid = options.uid || null
    var random = options.random || false
    var category = null;

    // initialize random values
    let max = 500
    let num = Math.floor(Math.random() * max) + 1;

    // run checks for api key and category id and ensure that category or user were defined
    if (!options.apikey) throw new Error("No API key supplied!", {cause: "options.apikey is empty"});
    if (options.categoryId) var category = await getCat({ categoryId: options.categoryId, apikey: key });
    if (!uid && !category) throw new Error("Neither a Medal UID or category name was provided to latestClips")

    // build the URL, encode it and send the request
    let url = encodeURI(`https://developers.medal.tv/v1/latest?${category && category[0] ? `categoryId=${category[0].categoryId}` : ""}userId=${uid}&limit=${limit}&offset=${random ? num : offset}`)
    return axios(url, {
        headers: {"authorization":key}
    })
    .then(response => {
        return response.data.contentObjects
    })
    .catch(e => {
        throw new Error("Failed to request latest Medal.tv clips", {cause:e});
    })
}