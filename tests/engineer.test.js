const Engineer = require("../lib/engineer")

test("getRole()", () => {
    const value = "Engineer";
    const e = new Engineer("rick", 1, "test@test.com", "username");
    expect(e.getRole()).toBe(value);
  });
  
  test("getGit()", () => {
    const value = "username";
    const e = new Engineer("rick", 1, "test@test.com", value);
    expect(e.getGit()).toBe(value);
  });
  