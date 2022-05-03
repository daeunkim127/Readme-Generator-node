// packages needed for this application
const fs = require ('fs');
const util = require('util');
const inquirer = require('inquirer');

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
        choices: ['a','b','c']
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
    .then((answers) => {
        //readme file layout
        let readMeCreate =  `
        # ${answers.title}
        
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
       
        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contribution](#contribution)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Description
        ${answers.description}
        
        ## Installation
        ${answers.installation}
       
        ## Usage
        ${answers.usage}
       
        ## License
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
        
        ${answers.license} license. 
        
        ## Contribution
        ${answers.contribution}
        
        ## Tests
        ${answers.tests}
        
        ## Questions
        GitHub: [${answers.gitHubUsername}](https://github.com/${answers.gitHubUsername})
        Email me with any questions: ${answers.email}`
    
    fs.writeFileSync('README.md', readMeCreate, (err) => err ? console.log(err) : console.log('Readme file successfully created!'))
});
};

// function to initialize app
function init() {
     writeToFile();    
};

// Function call to initialize app
init();
