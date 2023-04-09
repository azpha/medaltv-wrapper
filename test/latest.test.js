const latest = require('../src/latest');
test("Fetch latest user/category clip", async () => {
    expect(Array.isArray(await latest({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        categoryId: "fortnite"
    }))).toBe(true)

    expect(Array.isArray(await latest({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        uid: "215577"
    }))).toBe(true)
}, 30000)