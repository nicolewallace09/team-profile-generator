// team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require("./src/page-template.js")

// team array
const teamArray = []; 

// start of manager prompts 
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
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
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
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 

        // console.log(manager)
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
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
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(teamData => {
        // data for employee types 
        if (teamData.role === "Engineer") {
            const  { name, id, email, github } = teamData; 
            const engineer = new Engineer (name, id, email, github);

            teamArray.push(engineer); 
            console.log(engineer);

        } else {
            const  { name, id, email, school } = teamData; 
            const intern = new Intern (name, id, email, school);

            teamArray.push(intern);
            console.log(intern);

    }
        if (teamData.confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray; 
        }
    })

};


// // function to generate HTML page file using file system 
// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         // if there is an error 
//         if (err) {
//             console.log(err);
//             return;
//         // when the README has been created 
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// }; 

addManager()
   .then(addEmployee)
//   .then(teamArray => {
//     return generatePage(teamArray);
//   })
//   .then(data => {
//     return writeFile(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });