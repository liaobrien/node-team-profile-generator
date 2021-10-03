const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
      describe("getGithub", () => {
            it("should return the engineer's github username", () => {
                  const newEngineer = new Engineer("John Doe", 1, "jdoe@test.com", "jdoe123");

                  expect(newEngineer.getGithub()).toEqual("GitHub: jdoe123");
            })
      });

      describe("getRole", () => {
            it("should only return the role of 'engineer'", () => {
                  const newEngineer = new Engineer("John Doe", 1, "jdoe@test.com", "jdoe123");

                  expect(newEngineer.getRole()).toEqual("Engineer");
            })
      })
})