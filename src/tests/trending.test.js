const { MedalApi } = require("../index");

test("Fetch trending clips", async () => {
  const medal = new MedalApi("pub_yU31XDgLD7Q4QKT7sRuUNfxmTv0cRlcx");
  const trending = await medal.trending("1e2Ad6EOaE");

  expect(trending).toBeDefined();
  expect(Array.isArray(trending)).toBe(true);
}, 3000);
