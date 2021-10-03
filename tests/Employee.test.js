const Employee = require("../lib/Employee");

describe("Employee", () => {

      describe("getName", () => {
            it("should return the name of the employee", () => {
                  // arrange
                  const newEmployee = new Employee("John Doe", 1, "jdoe@test.com");

                  // act
                  expect(newEmployee.getName()).toEqual("Name: John Doe");

                  // assert
            })
      });

      describe("getId", () => {
            it("should return the employee's id number", () => {
                  const newEmployee = new Employee("John Doe", 1, "jdoe@test.com");

                  expect(newEmployee.getId()).toEqual("ID: 1");
            })

      });

      describe("getEmail", () => {
            it("should return the employee's email", () => {
                  const newEmployee = new Employee("John Doe", 1, "jdoe@test.com");

                  expect(newEmployee.getEmail()).toEqual("Email: jdoe@test.com");
            })
      })
})

