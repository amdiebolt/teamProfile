const Intern = require("../lib/intern")

test("getSchool()", () => {
    const value = "School of Hard Knocks";
    const e = new Intern("morty", 1, "test@test.com", value);
    expect(e.getSchool()).toBe(value);
  });