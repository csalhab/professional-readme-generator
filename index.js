//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gM = require("./utils/generateMarkdown");

//Create an array of questions for user input

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project's Title?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Please provide a short project description?",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "What are the Istallation Instructions?",
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
  ])
  .then((answers) => {
    fs.writeFile("answers.json", JSON.stringify(answers), (err) => {
      if (err) throw err;
      console.log("success, the file has been created!");
    });
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
