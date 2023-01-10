// Packages and libraries required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/templateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const team = [];

// Manager input questions
function addManager() {
    inquirer .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    }
    ])
    .then ((data) => {

        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addEmployee();

    })
}


// Ask to input other empoyees
function addEmployee() {
    inquirer .prompt ([
        {
            type: 'list',
            name: 'question',
            message: 'Would you like to add another team member?',
            choices: ['Add an engineer', 'Add an intern', "No, I'm done"]
        },
    ])
    .then ((data) => {
        if (data.question === 'Add an engineer') {
            addEngineer();
        } else if (data.question === 'Add an intern') {
            addIntern();
        } else {
            fs.writeFile('./dist/newHTML.html', generateHTML(team), (err) =>
            err ? console.log(err) : console.log('Your HTML page has been created in the /dist folder.'))
        }
    })
}

// // Add an engineer
function addEngineer() {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username?",
        }
    ])
    .then ((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
        team.push(engineer);
        addEmployee();
    })
}

// // Add an intern
function addIntern() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        }
    ])
    .then ((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        addEmployee();
    })
}
// Function to initialize the application
function init() {
    addManager()
}

// Function call to initialize application
init();
