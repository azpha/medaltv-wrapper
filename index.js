// Medal.tv Public Developer API Wrapper
// Built by Alex (hello@thatalex.dev // thatalex.dev)

// all methods available to call
const searchClips = require('./src/search');
const trendingClips = require('./src/trending');
const latestClips = require('./src/latest');
const fetchCategories = require('./src/category');

module.exports = { searchClips, trendingClips, latestClips, fetchCategories };