const generateHTML = require("./src/generateHTML");

const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

const hireManager = () => {
  return inquirer.prompt ([
{
        type:'input',
        name:'name',
        message: ' What is the Team Managers Name?',
   },
    {
      type:'input',
      name:'id',
      message:'Please assign an Employee ID',

 },
    { 
      type:'input',
      name: 'email',
      message :'Please create/designate Managers Email',
        validate: email => {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
      return true;
       } else {
      console.log ('Please enter an email!')
      return false; 
   }}
  },
  {
        
    type:'input',
    name:'number',
    message :'please designate an office number for the Manager',
  }
              
])
.then(managerInput => {
  const {name,id,email,number} = managerInput;
  const manager = new Manager (name,id,email,number);
  employeeArray.push(manager); console.log(manager);
})
};
const addEmployee = () => {
  console.log('employees added')
;
return inquirer.prompt ([
  {
    type:'list',
    name:'role',
    message:' Which new Team member would you like to hire first?',
    choices: ["Engineer", "Intern"]
  },
  { 
    type:'input',
    name:'name',
    message: ' What is the Team Members Name?'
  },
  {
      type:'input',
      name:'id',
      message:'Please assign an Employee ID'
  },
  {
      type:'input',
      name: 'email',
      message :'Please create/designate Team Member Email'
  },
  {
      type:'input',
      name:"github",
      message:"Please enter your Github User name.",
      when: (input) => input.role === "Engineer", 
  },
  {
    
      type:'input',
      name:'school',
      message:'What School is your internship from?',
      when: (input) => input.role === "Intern"
  },
  {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to add more team members?',
    default: false
  }
])
.then(employeeData => {
  let {name,id,email,role,github,school,confirmAddEmployee} = employeeData;
  let employee;

  if (role === "Engineer")
   {
    employee = new Engineer (name, id, email, github);
  } 
  else if (role ==="Intern")
  {
    employee = new Intern (name, id, email, school);
  }
employeeArray.push(employee); console.log(employee);
if (confirmAddEmployee)
{
  return addEmployee();
}
else {
  return employeeArray;
}
})
};

const writeFile = data => {
  fs.writeFile('./dist/index.html',data, err => {
    if (err) {
      console.log(err);
      return;
     }  else {
        console.log("your file has been generated")
      }
    })
  };
hireManager().then(addEmployee).then(employeeArray => {
  return generateHTML(employeeArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
});