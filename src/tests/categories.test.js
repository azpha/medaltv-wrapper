const { MedalApi } = require("../index");

describe("Fetch category", () => {
  test("by id", async () => {
    const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
    const foundCategory = await medal.getCategory("r-K7qepLC");
    expect(foundCategory.length).toBeGreaterThan(0);
  });
  test("by slug", async () => {
    const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
    const foundCategory = await medal.getCategory("gta-v");
    expect(foundCategory.length).toBeGreaterThan(0);
  });
});
