// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
  {
    type: 'input',
    name: 'project',
    message: 'What is the title of your project?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Your Project must have a title!')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What does your project do?',
    validate: aboutInput => {
      if (aboutInput) {
        return true;
      } else {
        console.log('Please submit datailed info on how your project works.')
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Does your project require special installation?',
    default: true
  },
  {
  type: 'input',
  name: 'install',
  message: ('Please provide instructions for installation.'),
  when: ({installation}) => {
    if (installation) {
      return true;
    } else {
      return false
    }
  }
},
{
  type: 'input',
  name: 'usage',
  message: 'Please explain the use of this project.',
  validate: usageInput => {
    if (usageInput) {
      return true;
    } else {
      return false;
    }
  }
},
{
  // insert licenses
},
{
  //insert contributing
},
{
  // insert tests
},
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();