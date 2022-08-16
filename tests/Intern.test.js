const Intern = require("../lib/Intern");

test("Can create new Intern badge", () => {
    const e = new Intern ();
    expect(typeof(e)).toBe("object");
    
  });

test("Can generate Intern name", () => {
  const name = "Joe";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Joe", 1,"Usertest@Emailtest.com","GT");
  expect(e.getRole()).toBe(testValue);
});

test("Can set ID number to Intern", () => {
  const testValue = 70;
  const e = new Intern("Joe", testValue);
  expect(e.id).toBe(testValue);
});
test(" Can get school with getSchool()" , () => {
    const testValue = "GT"
    const e = new Intern("Joe",1,"Usertest@Emailtest.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
