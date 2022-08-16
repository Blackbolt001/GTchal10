
const inquirer = require("inquirer");
const fs = require("fs");
const renderOutputHTML = require("./src/renderOutputHTML.js");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const newTeamData = []


const questions = async () => {
    const answers = await inquirer.prompt([
 
    {
        type:'list',
        name:'start',
        message:'Are you the Manager?',
        choices:["Yes,No"]
    },
    {
        type:'input',
        name:'name',
        message: 'Lets select a Team Member for our team, What is the Team Members Name?'
    },
    {
        type:'input',
        name:'id',
        message:'Please assign an Employee ID'
    },
    { 
        type:'input',
        name: 'email',
        message :'Please create/designate Managers Email'
    },

    {
        type:'checkbox',
        name:'newTeamMember',
        message:' Which new Team member would you like to hire first?',
        choices: ["Engineer", "Intern"],
    },
])
    if(answers.start === "Yes") {
const managerAnswers = await inquirer
.prompt([
    {
        
            type:'input',
            name:'officeNumber',
            message :'please designate an office number for the Manager'
        },
])

const newManager = new Manager(
    answers.name,answers.id,answers.email,answers.officeNumber
);
newTeamData.push(newManager);
}
else if (answers.newTeamMember === "Engineer") {
    const gitHubAnswers = await inquirer
    .prompt([
{
    type:'input',
    name:"github",
    message:"Please enter your Github User name."
}
    ])
    const newEngineer = new Engineer(
        answers.name,answers.id,answers.email,gitHubAnswers.github
    );
    newTeamData.push(newEngineer);
}
else if (answers.newTeamMember === "Intern") {
    const internAnswers = await inquirer
    .prompt([
{
    type:'input',
    name:"school",
    message:"What School is your internship from?"
},
])
const newIntern = new Intern(
    answers.name,answers.id,answers.email,internAnswers.school
);
newTeamData.push(newIntern);
}
};

async function promptQuestions() {
    await questions()
    const addTeamAnswers = await inquirer
    .prompt([
        {
            type:"list",
            name:"create",
            message:" Are you ready to create your Team?",
            choices: ["add another member to the Team","Create Team Now"],
        }
    ])
if (addTeamAnswers.create === "add another member to the Team") {
    return promptQuestions()
}
return generateTeam();
}
promptQuestions();

function generateTeam() {
    console.log('Congratulations!!',newTeamData)
    fs.writeFileSync("./output/index.html");
}
    
               


