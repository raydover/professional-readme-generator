// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            // Question for user to input a project title
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title to continue')
                    return false;
                }
            }
        },
        {
            // Section for user to input a project description
            type: 'input',
            message: 'Provide a brief description of your project.',
            name: 'description',
            validate: titleInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description to continue')
                    return false;
                }
            }
        },
    ])

    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });





// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
