const axios = require("axios")

module.exports = async (options) => {
    // initialize variables
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var word = options.keyword || null
    var random = options.random || false

    // run checks for users api key and keyword
    if (!options.apikey) throw new Error("No API key supplied!", {cause: "options.apikey is empty"});
    if (!options.keyword) throw new Error("No keyword supplied to search!", {cause: "options.keyword is empty"})

    // initialize random values
    let max = 500
    let num = Math.floor(Math.random() * max) + 1;

    let url = encodeURI(`https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${random ? num : offset}`)

    return axios(url, {
        headers: {
            "authorization": key
        }
    })
    .then(response => {
        return response.data.contentObjects
    })
    .catch(e => {
        throw new Error("Failed to search Medal.tv", {cause:e});
    })
}