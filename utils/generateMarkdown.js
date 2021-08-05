// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      badge = "![License](https://img.shields.io/badge/license-Apache2-blue)";
      break;
    case "GNU GPLv3":
      badge = "![License](https://img.shields.io/badge/license-GPLv3-blue)";
      break;
    case "ISC":
      badge = "![License](https://img.shields.io/badge/license-ISC-green)";
      break;
    case "MIT":
      badge = "![License](https://img.shields.io/badge/license-MIT-green)";
      break;
    default:
      badge =
        "![License](https://img.shields.io/badge/license-GPL-brightgreen)";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 09 Node.js Homework: ${data.projectTitle}
  
  ## License

  This project is covered by ${data.license} license.

  ## Description
  
  ${data.projectDescription}

  ## Table of Contents

  - [License](#license)
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation Instructions

    ${data.installationInstructions}

  ## Usage

  ${data.usage}

  ## Contributing Guidelines

    ${data.contributingGuidelines}

  ## Testing

  ${data.testInstructions}

  ## Questions

  You may reach me via:

  ${data.username} 
  ${data.email}

`;
}

module.exports = generateMarkdown;
