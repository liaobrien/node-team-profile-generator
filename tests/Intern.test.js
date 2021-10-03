const { describe, expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
      describe("getSchool", () => {
            it("should return the intern's school", () => {
                  const newIntern = new Intern("John Doe", 1, "jdoe@test.com", "Penn");

                  expect(newIntern.getSchool()).toEqual("School: Penn");
            })
      });

      describe("getRole", () => {
            it("should return only the role of 'intern'", () => {
                  const newIntern = new Intern("John Doe", 1, "jdoe@test.com", "Penn");

                  expect(newIntern.getRole()).toEqual("Intern");
            })
      })
})