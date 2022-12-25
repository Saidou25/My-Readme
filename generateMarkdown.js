const inquirer = require('inquirer');
const fs = require('fs')// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
    return `
    
    # My-Readme

# ${answers.Title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation? ${answers.Motivation}
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.Installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.
${answers.Instructions}

## Credits

${answers.Instructions}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
${answers.Contribution}
 
  `;
  }
  
  module.exports = generateMarkdown;