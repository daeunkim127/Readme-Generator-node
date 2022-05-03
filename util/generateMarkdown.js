// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        let badge =''
    } else {
        const licenseRevised=license.split('-')
        badge= `https://img.shields.io/badge/license-`+licenseRevised[0]+`-brightgreen`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(!license) {
        let link='';
    }else {
        link=`https://opensource.org/licenses/${license}`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license) {
        let section='';
    } else {
        section=`[![License](${badge})](${link})`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${section}
       
## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Steps required to install project.
${data.installation}

## Usage
${data.usageInfo}

## License
${section}

This project is covered under the ${data.license} license. 

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub: [${data.gitHubUsername}](https://github.com/${data.gitHubUsername})
Email me with any questions: ${data.email}
`;
}

module.exports = {
    renderLicenseBadge,
    generateMarkdown,
    renderLicenseLink,
    renderLicenseSection,}
