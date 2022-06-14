// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        // Section user to input a project title
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue.')
                return false;
            }
        }
    },
    {
        // Section user to input a project description
        type: 'input',
        message: 'Provide a brief description of your project.',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description to continue.')
                return false;
            }
        }
    },
    {
        // Section user to choose section titles listed on the table of contents
        type: 'checkbox',
        message: 'What section titles would you like listed on your table of contents?',
        name: 'tableOfContents',
        choices: ['Descripton', 'Resources', 'Visuals', 'Author and Aknowledgements'],
        validate: tableOfContentsInput => {
            if (tableOfContentsInput) {
                return true;
            } else {
                console.log('Please choose which subject titles to continue.');
                return false;
            }
        }
    },
    {
        // Section user to input a project installation information
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation information to continue.')
                return false;
            }
        }
    },
    {
        // Section user to explain how to use this project
        type: 'input',
        message: 'Provide a brief explanation on how to use this project.',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter a useage explanation to continue.')
                return false;
            }
        }
    },
    {
        // Section user to choose section titles listed on the table of contents
        type: 'rawlist',
        message: 'What license would you like to use for this project?',
        name: 'licensing',
        choices: ['MIT', 'Apache', 'MPL', 'CC'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please choose a license continue.');
                return false;
            }
        }
    },
    {
        // Section user to input how to contribute to this project
        type: 'input',
        message: 'How will coders contribute to this project?',
        name: 'contribution',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter how to contribute to continue.')
                return false;
            }
        }
    },
    {
        // Section user input how do coders test this project
        type: 'input',
        message: 'How do coders test this project?',
        name: 'testing',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter how to test to continue.')
                return false;
            }
        }
    },
    {
        // Section user to input github user information to this project
        type: 'input',
        message: 'Enter your github username.',
        name: 'github',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a github username to continue.')
                return false;
            }
        }
    },
    {
        // Section user to input how to contribute to this project
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address to continue.')
                return false;
            }
        }
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers)
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
