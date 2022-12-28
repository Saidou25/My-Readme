
const inquirer = require('inquirer');
const fs = require('fs')
const prompt = inquirer.createPromptModule();



const writeToFile = (readme) => {

    fs.writeFileSync('README.md', readme)

};

const generateMarkdown = (answers) => {
    return `
# ${answers.title}
## Description
${answers.motivation}
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
${answers.license}

## Test
// TODO: ADD TEST

## Questions
// TODO: ADD QUESTIONS

## Contributing
${answers.contribution}

## GitHub 
[${answers.gitHub}](https://github.com/${answers.gitHub})
`;
};


prompt([
    {

        message: 'What his your Your Project Title ?',
        name: 'Title', // lowercase is better for props Easier to write
    },
    {

        message: 'Why did you build this project? ?',
        name: 'description',
    },
    {

        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {

        message: 'How to use your application ?',
        name: 'usage',
    },
    {
        message: 'Would you like to add any contributer to your project ?',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'What is your license ?',
        name: 'license',
        choices: ['APACHE 2.0', 'GPL 3.0', 'BSD 3, None'],
    }, 
    {

        message: 'What is your Github name ?',
        name: 'gitHub',

    },
    {

        message: 'What test do you have ?',
        name: 'test',

    },
])
    .then(generateMarkdown)
    .then(writeToFile);

    module.exports = writeToFile;