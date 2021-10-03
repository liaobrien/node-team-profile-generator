const Employee = require("./Employee");

class Manager extends Employee {
      constructor(name, id, email, office) {
            super(name, id, email);
            this.office = office;
      }

      getOfficeNum() {
            return `Office: ${this.office}`;
      }

      getRole() {
            return "Manager";
      }
}

module.exports = Manager;