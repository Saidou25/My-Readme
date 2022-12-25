const inquirer = require('inquirer');



inquirer
.prompt([
    {
        type: 'input',
        message: 'What his your Github username ?',
        name: 'name'
    },
    {
        type: "input",
        message: 'What is your email address ?',
        name: 'email'
    },
])
.then((response) => {
    console.log(response);
})