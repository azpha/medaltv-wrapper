const { MedalApi } = require("../index");

describe("Search", () => {
  test("for keyword", async () => {
    const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
    const searchData = await medal.search("fortnite");

    expect(searchData).toBeDefined();
    expect(Array.isArray(searchData)).toBe(true);
  });
});
