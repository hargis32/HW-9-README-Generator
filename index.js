const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({title, description, installation, usage, contributing, test, license, github, email }) =>
``;

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
            message: 'Describe your project',
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