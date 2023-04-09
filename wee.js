const categories = require('./src/category');

(async () => {
    console.log(await categories({
        apikey: "pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx",
        categoryId: "minecraft"
    }))
})()