const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const path = require('path')
const DIR = path.resolve(__dirname, 'dist');
const dist = path.join(DIR, 'index.html');

const render = require('./src/htmlTemp.js');






const teamArray = [

]

function createTeam() {
function newManager() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: "What is the manager's office number?"
    }
  ]
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    teamArray.push(new Manager(answers.id, answers.email, answers.name, answers.office))
    
    newEmployee()
  })
}
newManager()

function newEmployee() {
  const questions = [
    {
      type: 'list',
      name: 'nEmployee',
      message: 'Would you like to add an employee?',
      choices: ['Engineer', 'Intern', 'My team is complete']
    }
  ]
  inquirer.prompt(questions).then((answers) => {
    if (answers.nEmployee === 'Engineer') {
      newEngineer()
    }
    if (answers.nEmployee === 'Intern') {
      newIntern()
    }
    if (answers.nEmployee === 'My team is complete') {
      console.log(teamArray)
      writeToFile(teamArray)
    }
  })
}

function newEngineer() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's Github username?"
    }
  ]
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    teamArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github)) 
    
    newEmployee()
  })
}

function newIntern() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did the intern attend?'
    }
  ]
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    teamArray.push(new Intern(answers.name, answers.id, answers.email, answers.school)) 
    
    newEmployee()
  })
}
function writeToFile() {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }
  fs.writeFile(dist, render(teamArray), function(err, result) {
    if(err) console.log('error', err);
  });
}

}
createTeam()
