
const Engineer = require("../lib/Engineer");

test("Can create new Engineer badge", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
    
  });
test("Can generate Engineer name", () => {
  const name = "Joe";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});
test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Joe", 1,"Usertest@Emailtest.com","GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
test("Can set ID number to Engineer", () => {
  const testValue = 70;
  const e = new Engineer("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can add rep with getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Joe",1,"Usertest@Emailtest.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

