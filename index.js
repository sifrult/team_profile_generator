// Packages and libraries required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/templateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

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
        name: 'officeNum',
        message: "What is the team manager's office number??",
    }
])
    .then ((data) => {
        console.log(data);
    })
}

function init() {
    addManager()
}

init();
