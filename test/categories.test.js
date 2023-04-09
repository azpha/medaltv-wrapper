const categories = require('../src/category');
test('Test category searching', async () => {
    expect(Array.isArray(await categories({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        categoryId: "fortnite"
    }))).toBe(true)
})