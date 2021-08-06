//DEPENDENCIES =============================================

//DATA =====================================================

//FUNCTIONS ================================================

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache2":
      return "https://img.shields.io/badge/license-Apache2-blue.svg";
    case "GPLv3":
      return "https://img.shields.io/badge/license-GPLv3-blue.svg";
    case "ISC":
      return "https://img.shields.io/badge/license-ISC-green.svg";
    case "MIT":
      return "https://img.shields.io/badge/license-MIT-green.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache2":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![License](${renderLicenseBadge(
    license
  )})   This project is covered by  ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 09 Node.js Homework: ${data.projectTitle}
  
  ## License

  ${renderLicenseSection(data.license)}

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

  You may find me on GitHub via my username: ${data.username} 
\n
  You may also contact me via my email address: ${data.email}

`;
}

function determineLicenseBadge() {}

//INITIALIZATION ===========================================
determineLicenseBadge();
//module.exports makes this file's generateMarkdown function available outside to whoever require's this generateMarkdown.js module
module.exports = generateMarkdown;
