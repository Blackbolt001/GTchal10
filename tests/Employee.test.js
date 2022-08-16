
const Employee = require("../lib/Employee");


  test("Can create new employee badge", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
    
  });
test("Can generate name", () => {
  const name = "Joe";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Joe", 1,"Usertest@Emailtest.com");
  expect(e.getRole()).toBe(testValue);
});
test("Can set ID number to Employee", () => {
  const testValue = 70;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});


