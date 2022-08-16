const Manager = require("../lib/Manager");

const renderManager = function(manager)
{
    return `
    <div class ="container">

    <div class ="card">
    <div class ="card-header">
    <h2>${manager.name}</h2>
    <h3>Manager</h3>
    </div>

    <div class="card-body">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="email:${manager.email}">${manager.email}</a></p>
    <p class ="office">office number:${manager.officeNumber}</p>
    </div>
    </div>
    </div> 
    `;}

    const renderEngineer = function(engineer)
{
    return `
    <div class ="container">

    <div class ="card">
    <div class ="card-header">
    <h2>${engineer.name}</h2>
    <h3>Manager</h3>
    </div>

    <div class="card-body">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: <a href="email:${engineer.email}">${engineer.email}</a></p>
    <p class ="github">Github: <a href ="https://github.com/${engineer.github}"<${engineer.github}</a></p>
    </div>
    </div>
    </div> 
    `;}

    const renderIntern= function(intern)
{
    return `
    <div class ="container">

    <div class ="card">
    <div class ="card-header">
    <h2>${intern.name}</h2>
    <h3>Manager</h3>
    </div>

    <div class="card-body">
    <p class="id">ID: ${intern.id}</p>
    <p class="email">Email: <a href="email:${intern.email}">${intern.email}</a></p>
    <p class="school">School: ${intern.school}</p>
    </div>
    </div>
    </div> 
    `;}

    renderOutputHTML = (data) => {
        pageArray=[];
        for(let i =0; i < data.length, i++) {
            const employee= data[i];
            const position=employee.getPosition();

            if (position === 'Manager1') {
                const managerCard1 = renderManager(employee);
                pageArray.push(managerCard1);
            }
            if (position === 'Engineer1') {
                const engineerCard1 = renderEngineer(employee);
                pageArray.push(engineerCard1);
            }
            if (position === 'Intern1') {
                const internCard1 = renderIntern(employee);
                pageArray.push(internCard1);
            }
        }
    const employeeCards = pageArray.join('')
    const generateTeam  = generateTeamPage(employeeCards)
    return generateTeam;
    }
    const generateTeamPage = function (employeeCards) {
        return`

        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <h3>Team Profile Generator</h3>
    </header>
    <main>
    <div class="container">
    <div class="row" id="cards">
    ${employeeCards}
    </div>
    </div>
    </main>
    </body>
    </html>
    `;}
    

    module.exports = renderOutputHTML;
