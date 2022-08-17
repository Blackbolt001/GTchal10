
const generateManager = (manager) => {
    return `
    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${manager.getName()}</h2>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${manager.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${manager.getEmail()}">${manager.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="OfficeNumber">Office Number:${manager.getOfficeNumber()}</p></li>
    </ul>
    </div>
    </div>
    `;
}
    const generateEngineer = (engineer) => {
    return `
    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${engineer.getName()}</h2>
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
    }  
      const generateIntern= (intern) => {
        {
            return `
     <div class ="card employee-card">
     <div class ="card-header">
    <h2 class =" card-title">${intern.getName()}</h2>
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
`};
};


generateHTML = (data) => {
    teamObj = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

    if (role === 'Manager') {
    const managerCard = generateManager(employee);
    teamObj.push(managerCard);
 }
    if (role === 'Engineer') {
    const engineerCard = generateEngineer(employee);
    teamObj.push(engineerCard);
 }
    if (role === 'Intern') {
    const internCard = generateIntern(employee);
    teamObj.push(internCard);
}} 

const employeeCards = teamObj.join('')
        
            const generateTeam = generateTeamPage(employeeCards); 
            return generateTeam;
}
const generateTeamPage = function (employeeCards) 
{
    return
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    <link rel="stylesheet" href="style.css">
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
    <script src="../scripts/index.js"></script>
    <script src="../scripts/src/renderHTML.js"></script>
    </body>
    </html>`;
}
    

module.exports = generateHTML;
