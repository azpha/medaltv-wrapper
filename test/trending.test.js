const trending = require('../src/trending')
test('Fetch trending clips', async () => {
    expect(Array.isArray(await trending({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        categoryId: "fortnite"
    }))).toBe(true)
}, 3000)