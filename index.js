const inquirer = require("inquirer");
const fs = require("fs");


class Employee {
      constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;

            this.getName();
            this.getId();
            this.getEmail();
            this.getRole();
      }

      getName() {
            return this.name;
      }

      getId() {
            return this.id;
      }

      getEmail() {
            return this.email;
      }

      getRole() {
            return "Employee";
      }
}

class Manager extends Employee {
      constructor(name, id, email, office) {
            super(name, id, email);
            this.officeNum = officeNum;
      }

      getOfficeNum() {
            return this.officeNum;
      }

      getRole() {
            return "Manager";
      }
}

class Engineer extends Employee {
      constructor(name, id, email, office) {
            super(name, id, email);
            this.github = github;
      }

      getGithub() {
            return this.github;
      }

      getRole() {
            return "Engineer";
      }
}

class Intern extends Employee {
      constructor(name, id, email, office) {
            super(name, id, email);
            this.school = school;
      }

      getSchool() {
            return this.school;
      }

      getRole() {
            return "Intern";
      }
}