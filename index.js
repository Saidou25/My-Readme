
const inquirer = require('inquirer');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const writeToFile = (readme) => {

    fs.writeFileSync('./Dist/readme.md', readme);
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `(https://opensource.org/licenses/${license})`;
}


function renderLicenseSection(license) {
    return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/${license})`
}

const generateMarkdown = (answers) => {
    return `
# ${answers.title}

${renderLicenseSection(answers.license)}

## Description

${answers.description}

## Table of contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#test)

* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

for information on the project license click  [${answers.license}](https://opensource.org/licenses/${answers.license})

## Test

${answers.test}

## Questions

For questions and concern please contact me.

GitHub: [${answers.gitHub}@github](https://github.com/${answers.gitHub})


## Contributing

${answers.contributing}

`
};

prompt([
    {
        type: 'input',
        message: 'What his your Your Project Title ?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your application',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use your application ?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Whoul you like to add a license to your project ?',
        name: 'license',
        choices: ['MIT', 'ISC', 'None'],
    },
    {
        type: 'input',
        message: 'Would you like to add any contributer to your project ?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What test do you have ?',
        name: 'test',

    },
    {
        type: 'input',
        message: 'What is your Github name ?',
        name: 'gitHub',
    },
])
    .then(generateMarkdown)
    .then(writeToFile);

