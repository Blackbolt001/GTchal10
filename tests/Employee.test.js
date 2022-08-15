
const { it } = require("node:test");
const { string } = require("yargs");
const Employee = require("../lib/Employee");


describe("Employee", () => {
  it("Can create new employee badge", () => {
    const e = new Employee();
    expect(typeof(e)).tobe("object");
    
  })});
it("Can generate name"), () => {
  const e = new Employee();
  expect (e.name).tobe();
}
