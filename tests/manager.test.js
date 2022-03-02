const Manager = require("../lib/manager")

test("getNumber()", () => {
    const value = 420;
    const e = new Manager("rick", 1, "test@test.com", value);
    expect(e.getNumber()).toBe(value);
  });