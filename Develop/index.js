// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./utilities/generateFile.js')
const inquirer = require('inquirer');
const generateMarkdown = require('./utilities/genMarkdown.js');
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
      type: 'confirm',
      name: 'installation',
      message: 'Does your project require special installation?',
      default: true
    },
    {
      type: 'input',
      name: 'install',
      message: ('Please provide instructions for installation.'),
      when: ({ installation }) => {
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
      type: 'list',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'Creative Commons 1.0', 'GPLv3', 'WTFPL']
    },
    {
      //insert contributing
      type: 'confirm',
      name: 'contribution',
      message: 'Will this project be open to contributions?',
      default: true
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'PLease explain rules for contributing to this project.',
      when: ({ contribution }) => {
        if (contribution) {
          return true
        } else {
          return false
        }
      }
    },
    {
      // insert tests
      type: 'confirm',
      name: 'confirmTest',
      message: 'Will your project need testing instructions?',
      default: true
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please input testing instructions:',
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username (Required)',
      validate: userInput => {
          if (userInput) {
              return true;
          } else {
              console.log('Github username is required!');
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'gitLink',
      message: 'Enter the link to your GitHub profile (Required)',
      validate: linkInput => {
          if (linkInput) {
              return true;
          } else {
              console.log('You must enter your profile link!');
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email for contact (Required)',
      validate: emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log('Please enter your email!');
              return false;
          }
      }
    },
  ])
    .then(data => {
      return generateMarkdown(data);
    })
    .then(page => {
      return writeFile(page);
    })
    .then(pageResponse => {
      console.log(pageResponse);
      return copyFile();
    })
    .then(copyPageResponse => {
      console.log(copyPageResponse)
    })
    .catch(err => {
      console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
  questions();
}


// Function call to initialize app
init();