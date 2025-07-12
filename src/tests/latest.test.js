const { MedalApi } = require("../index");

describe("Fetch latest clips", () => {
  test("from category", async () => {
    const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
    const latestFromCategory = await medal.latestFromCategory("1e2Ad6EOaE");

    expect(latestFromCategory).toBeDefined();
    expect(Array.isArray(latestFromCategory)).toBe(true);
  });

  test("from user", async () => {
    const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
    const latestFromUser = await medal.latestFromUser(215577);

    expect(latestFromUser).toBeDefined();
    expect(Array.isArray(latestFromUser)).toBe(true);
  });
});
