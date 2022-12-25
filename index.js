
const inquirer = require('inquirer');
const fs = require('fs')
const prompt = inquirer.createPromptModule();


// // TODO: Create an array of questions for user input
// inquirer = ["What was your motivation?",  "Why did you build this project?", "What problem does it solve?", "What did you learn?", "What makes your project stand out?"]

  
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


prompt([
    {
    
        message: 'What his your Your Project Title ?',
        name: 'Title',
    },
    {
       
        message: 'Why did you build this project? ?',
        name: 'Motivation',
    },
    {
       
        message: 'What are the steps required to install your project?',
        name: 'Installation',
    },
    {
       
        message: 'How to use your application ?',
        name: 'Usage',
    },
    {
       
        message: 'What is your license ?',
        name: 'License',
        choice: ['APACHE 2.0', 'GPL 3.0', 'BSD 3, None']
    },
    {
       
        message: 'Would you like to add any contributer to your project ?',
        name: 'Contribution',
    },
])
.then((answers) => {
    console.log(answers);
    // fs.appendFile('generateMarkdown.js', `${ JSON.stringify(response) } \n`, (err) => 
    // err ? console.log('Oops') : console.log('Thank you'))
    });
  
    