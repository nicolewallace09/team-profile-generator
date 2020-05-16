// team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require

// start of user prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID!')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                }
            }
        },


    ]);
}

promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//     console.log(err);
//   });