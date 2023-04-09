const search = require('../src/search');
test('Search for keyword', async () => {
    expect(Array.isArray(await search({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        keyword: "medal"
    }))).toBe(true)
})