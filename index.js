// packages needed for this application
const fs = require ('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./util/generateMarkdown.js');

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information.'
    },
    {//list
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['Apache-2.0','BSD-3-Clause','gpl-license', 'MIT', 'MPL-2.0','CDDL-1.0']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions'
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Enter your GitHub Username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// function to write README file
function writeToFile() {
    return inquirer.prompt(questions)
    .then((data) => {
        generateMarkdown.renderLicenseBadge(data.license);
        generateMarkdown.renderLicenseLink(data.license);
        generateMarkdown.renderLicenseSection(data.license)
        fs.writeFileSync('README.md', generateMarkdown.generateMarkdown(data), (err) => err ? console.log(err) : console.log('Readme file successfully created!'))});
};

// function to initialize app
function init() {
     writeToFile();    
};

// Function call to initialize app
init();
