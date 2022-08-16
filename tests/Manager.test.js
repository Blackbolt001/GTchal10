const Manager = require("../lib/Manager");

test("Can create new Manager badge", () => {
    const e = new Manager ();
    expect(typeof(e)).toBe("object");
    
  });

test("Can generate Manager name", () => {
  const name = "Joe";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});

test("getRole() returns \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Joe", 1,"Usertest@Emailtest.com","70");
  expect(e.getRole()).toBe(testValue);
});

test("Can set office number to Manager", () => {
  const testValue = 70;
  const e = new Manager("Joe", 1,"Usertest@Emailtest.com",testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

