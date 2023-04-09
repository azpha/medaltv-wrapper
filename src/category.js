const axios = require('axios');
module.exports = async (options) => {
    // run checks for api key and category id
    if (!options.apikey) throw new Error("No API key supplied!", {cause: "options.apikey is empty"});
    else if (!options.categoryId) throw new Error("No category ID supplied!", {cause: "options.categoryId is empty"});

    // request the categories
    return axios('https://developers.medal.tv/v1/categories', {
        headers: {
            'authorization': options.apikey
        }
    })
    .then((response) => {
        // filter the array for a slug that equals the categoryId.
        // return if items.length is >= 1, else just return null
        let items = response.data.filter(x => x.slug === options.categoryId.toLowerCase());
        if (items.length >= 1) return items;
        else return null
    })
    .catch(e => {
        throw new Error("Failed to request for Medal.tv categories", {cause:e});
    }) 
}