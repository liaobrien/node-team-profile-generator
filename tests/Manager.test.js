const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
      describe("getOfficeNum", () => {
            it("should return the manager's office number", () => {
                  const newManager = new Manager("John Doe", 1, "jdoe@test.com", 123);

                  expect(newManager.getOfficeNum()).toEqual("Office: 123");
            })
      });

      describe("getRole", () => {
            it("should only return the role 'manager'", () => {
                  const newManager = new Manager("John Doe", 1, "jdoe@test.com", 123);

                  expect(newManager.getRole()).toEqual("Manager");
            })
      });
})