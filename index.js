//DEPENDENCIES =============================================
//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gM = require("./utils/generateMarkdown");

//DATA =====================================================
const filename = "README.md";

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your Project's Title?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please provide a short project description?",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What are the Installation Instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does a user need to know about using this repo?",
  },
  {
    type: "input",
    name: "contributingGuidelines",
    message: "What are the Contributing Guidelines?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What command should be run for testing?",
  },

  {
    type: "list",
    name: "license",
    message: "Which license should your project have?",
    choices: ["Apache2", "GNU GPLv3", "ISC", "MIT"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

//FUNCTIONS ================================================
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(filename, gM(answers), (err) => {
    if (err) throw err;
    console.log("success, the file has been created!");
  });
}

//USER INTERACTIONS ========================================
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(filename, answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("error if: " + error.isTtyError);
      } else {
        // Something else went wrong
        console.log("error else: " + error);
      }
    });
}

//INITIALIZATION ===========================================
// Function call to initialize app
init();
