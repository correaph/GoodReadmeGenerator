var inquirer = require('inquirer');
var utils = require('./utils/generateMarkdown');
const write = require('write');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Username',
        message: "What's your github username ?",
        validate: function (value) {
            if (value.trim().length >= 5) {
                return true;
            }
            return 'Please enter a valid usename with at leat 5 characters';
        },
    },
    {
        type: 'input',
        name: 'Email',
        message: "What's your email ?",
        validate: function (value) {
            if (value.trim().length >= 5 && value.indexOf("@") != -1 && value.indexOf(".") != -1) {
                return true;
            }
            return "Please enter a valid email with at leat 10 characters and with '@' and '.'";
        },
    },
    {
        type: 'input',
        name: 'Title',
        message: "What's the project title ?",
        validate: function (value) {
            if (value.trim().length >= 5) {
                return true;
            }
            return 'Please enter a valid title with at leat 5 characters';
        },
    },
    {
        type: 'input',
        name: 'Description',
        message: "What's the project description ?",
        validate: function (value) {
            if (value.trim().length >= 30) {
                return true;
            }
            return 'Please enter a valid title with at leat 30 characteres';
        },
    },
    {
        type: 'input',
        name: 'Installation',
        message: "How to install it ?",
        validate: function (value) {
            if (value.trim().length >= 10) {
                return true;
            }
            return 'Please enter a valid installation description with at leat 10 characteres';
        },
    },
    {
        type: 'input',
        name: 'Usage',
        message: "How to use it ?",
        validate: function (value) {
            if (value.trim().length >= 10) {
                return true;
            }
            return 'Please enter a valid usage description (At least 10 characters)';
        },
    },
    {
        type: 'input',
        name: 'License',
        message: "License: ",
        validate: function (value) {
            if (value.trim().length >= 4) {
                return true;
            }
            return 'Please enter a valid license description (At least 4 characters)';
        },
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "How to Contribute ?",
        validate: function (value) {
            if (value.trim().length >= 10) {
                return true;
            }
            return 'Please enter a valid contributing description (At least 10 characters)';
        },
    },
    {
        type: 'input',
        name: 'Test',
        message: "How to performs tests ?",
        validate: function (value) {
            if (value.trim().length >= 10) {
                return true;
            }
            return 'Please enter a valid test description (At least 10 characters)';
        },
    },
    {
        type: 'input',
        name: 'Questions',
        message: "FAQ (Frequently Asked Questions) :",
        validate: function (value) {
            if (value.trim().length >= 10) {
                return true;
            }
            return 'Please enter a valid content for questions and answers (At least 10 characters)';
        },
    },

];

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        var data = "# " + answers.Title;
        data = data + "\n\n## Description :octocat:";
        data = data + "\n\n" + answers.Description;
        data = data + "\n\n" + "## Table of Contents";
        data = data + "\n\n" + "* [Installation](#installation)";
        data = data + "\n\n" + "* [License](#license)";
        data = data + "\n\n" + "* [Contributing](#contributing)";
        data = data + "\n\n" + "* [Test](#test)";
        data = data + "\n\n" + "* [Questions](#questions)";
        data = data + "\n\n## Installation";
        data = data + "\n\n"+ answers.Installation;
        data = data + "\n\n## Usage";
        data = data + "\n\n"+ answers.Usage;
        data = data + "\n\n## License";
        data = data + "\n\n"+ answers.License;
        data = data + "\n\n## Contributing";
        data = data + "\n\n"+ answers.Contributing; 
        data = data + "\n\n[My GitHub Profile](https://github.com/" + answers.Username + ")"; 
        data = data + "\n\n## Test";
        data = data + "\n\n"+ answers.Test;
        data = data + "\n\n## uestions";
        data = data + "\n\n"+ answers.Questions;
        data = data + "\n\nSend me an e-mail <" + answers.Email + ">"; 
        filename = "temp_readme.md";
        // function to write README file
        write.sync(filename, data, { overwrite: true });
        console.log("File " + filename + " created successfully!")
    });
}

// function call to initialize program
init();
