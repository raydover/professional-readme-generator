// TODO: Include packages needed for this application
const badmath = require('./Develop/badmath.js');

console.log(badmath.pie);

console.log(badmath.predictable());

// TODO: Create an array of questions for user input
console.log(process.argv[2]);

const questions = [];

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'name',
        },
        {
            type: 'checkbox',
            message: 'What language do you know?',
            name: 'language',
            choices: ['JS', 'HTML', 'CSS'],
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'preferred',
            choices: ['phone', 'email', 'text'],
        },
    ])

    // .then((response) => {
    //     console.log('Success!')
    //     console.log(response)

    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    // });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
