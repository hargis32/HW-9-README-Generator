const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({title, description, installation, usage, contributing, test, license, github, email }) =>
`![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)]

# ${title}

## Table of Contents
    -[Description](#description)

## Description

${description}

## Installation

Follow these instructions in order to install:
${installation}

## Usage

${usage}

## Contributors

${contributing}

## Test

${test}

## License

This project is using ${license} as a license

## Questions

You can find my GitHub profile [here]('https://github.com/${github}')

For more questions, contact directly at [${email}]('${email}')

`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How was the project tested?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is being used?',
            choices: ['Apache', 'Eclipse', 'GNU', 'MIT']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });