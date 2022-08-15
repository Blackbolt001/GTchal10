
const renderOutputHTML = require('./src/renderOutputHTML')



const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employeeArray = []


const hireManager = () => {
    return inquirer.prompt (
 [
    {
        type:'input',
        name:'name',
        message: 'Lets select a manager for our team, What is the Managers Name?'
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
        type:'input',
        name:'officeNumber',
        message :'please designate an office number for the Manager'
    }
])
.then(managerData) => {
    const {name,id,email,officeNumber} = managerData;
    const manager = new Manager (name,id,email,officeNumber);
    employeeArray.push(manager);
    console.log(manager);
};

const hireEmployee = () => {
    console.log('Congratulations!!');
    return inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'position',
            message:'Which role is being hired?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message:'Please enter the new hires name'
        },
        {
            type:'input',
            name:'email',
            message:'Please enter an email address for new employee'
        },
        { 
            type:'input',
            name:'github',
            message:'Please enter a Github username for new employee',
            when: (input) => input.position ==="Engineer"
        },
        {
            type:'input',
            name: 'school',
            message:'Enter the school name of new Intern'
        },
        {
            type:'confirm',
            name:'confirmHire',
            message: ' Do you have other members to add to your team?',
            default:false
        }
    ])
    .then(employeeData) => {
        let {name,id,email,position,github,school,confirm} = employeeData;
        let employee;
        if (position === "Engineer") {
            employee = new Engineer (name,id,email,github);
            console.log(employee);
        }
        else if (position === "Intern") {
            employee = new Intern (name,id,email,school);
            console.log(employee);
        }
        employeeArray.push(employee);
        if(confirmHire) {
            return hireEmployee(employeeArray) }
            else {
                return employeeArray;
            }
        };

        const writeFile = data => {
            fs.writeFile('\Users\Gossett\OneDrive\Desktop\GTchal10\src\renderOutputHTML.js', data, err => {
                if (err) {
                    console.log(err);
                    return;
                }
                else {
                    console.log('your team has been created')
                }
            })};
            hireManager()
            .then(hireEmployee)
            .then(employeeArray => {
                return renderOutputHTML(employeeArray);
            })
            .then(pageHTML => {
                return writeFile(pageHTML);
            });

        

    
    
    

    
    




