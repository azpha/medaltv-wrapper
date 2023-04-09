const axios = require('axios');
const getCat = require('./category');
module.exports = async (options) => {
    // initialize variables
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    let category = null;

    // run checks for api key and category id
    if (!options.apikey) throw new Error("No API key supplied!", {cause: "options.apikey is empty"});
    if (options.categoryId) category = await getCat({ categoryId: options.categoryId, apikey: key });

    // build URL and send the request
    let url = encodeURI(`https://developers.medal.tv/v1/trending?categoryId=${category && category[0] ? `${category[0].categoryId}` : ""}&limit=${limit}&offset=${offset}`)
    return axios(url, {
        headers: {
            'authorization': key
        }
    })
    .then(response => {
        return response.data.contentObjects
    })
    .catch(e => {
        throw new Error("Failed to get trending clips from Medal.tv", {cause:e});
    })
}