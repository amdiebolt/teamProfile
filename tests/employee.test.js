const Employee = require("../lib/employee")

test("getName()", () => {
    const value = "rick";
    const e = new Employee(value);
    expect(e.getName()).toBe(value);
  });
  
  test("getId()", () => {
    const value = 69;
    const e = new Employee("Shh", value);
    expect(e.getId()).toBe(value);
  });
  
  test("getEmail()", () => {
    const value = "test@test.com";
    const e = new Employee("fShh", 1, value);
    expect(e.getEmail()).toBe(value);
  });
  
  test("getRole()", () => {
    const value = "Employee";
    const e = new Employee("rick", 1, "test@test.com");
    expect(e.getRole()).toBe(value);
  });
  