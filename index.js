const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const jest = require("jest");

teamMembers = [];

const managerQuestions = [
      {
            type: "input",
            message: "What is the manager's name?",
            name: "name",
      },
      {
            type: "input",
            message: "What is the manager's ID number?",
            name: "id",
      },
      {
            type: "input",
            message: "What is their email address?",
            name: "email",
      },
      {
            type: "input",
            message: "What is their office number?",
            name: "office"
      }
]

const engineerQuestions = [
      {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
      },
      {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "id",
      },
      {
            type: "input",
            message: "What is the engineer's address?",
            name: "email",
      },
      {
            type: "input",
            message: "What is the engineer's GitHub?",
            name: "github"
      }
]

const internQuestions = [
      {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
      },
      {
            type: "input",
            message: "What is the intern's ID number?",
            name: "id",
      },
      {
            type: "input",
            message: "What is the intern's address?",
            name: "email",
      },
      {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
      }
]

const teamAdd = {
      type: "list",
      message: "What type of team member would you like to add?",
      choices: ["Engineer", "Intern", "None"],
      name: "member"
}

function createTeamMember(questions, member) {
      let extra;
      inquirer
            .prompt(questions)
            .then((response) => {
                  console.log(response);
                  switch (member) {
                        case Engineer:
                              extra = response.github;
                              break;
                        case Intern:
                              extra = response.school;
                              break;
                        default:
                              extra = response.office;
                  }

                  const newMember = new member(response.name, response.id, response.email, extra);
                  teamMembers.push(newMember);
            })
}

createTeamMember(managerQuestions, Manager);