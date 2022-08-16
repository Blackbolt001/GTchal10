const generateTeam  = (team) => {

const generateManager = (manager) => {

    return `

    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${manager.getName()}</h2>
    <h3 class =" card-title">Manager></h3>
    </div>

    <div class="card-body">
    <p class="id">ID: ${manager.getId()}</p>
    <p class="email">Email: <a href="email:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p class ="office">office number:${manager.getOfficeNumber()}</p>
    </div>
    </div>
    </div> 
    `;}

    const generateEngineer = (engineer)
{
    return `
    <div class ="container">

    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${engineer.getName()}</h2>
    <h3 class =" card-title">Engineer></h3>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${engineer.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${engineer.getEmail()}">${engineer.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="github">Github: <a href="https://github.com${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p></li>
    </ul>
    </div>
    </div>

    `;
};

    const generateIntern= (intern)
{
    return `

    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${intern.getName()}</h2>
    <h3 class =" card-title">Intern></h3>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${intern.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${intern.getEmail()}">${intern.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="school">School: ${intern.getSchool()}</p></li>
    </ul>
    </div>
    </div>
    `;
};

    const html = []
    
    (data) => {
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    </head>
    <body>
    <header>
    <h3>Team Profile Generator</h3>
    </header>
    <main>
    <div class="container">
    <div class="row" id="cards">
    ${generateTeam(team)}
    </div>
    </div>
    </main>
    </body>
    </html>
    `;
};
    

