const fs = require('fs');
const teamManager = require('../lib/Employee');
let renderTemp = [];
const generateTeamHTML  = 
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
    </div>
    </div>
    </main>
    <script src="../scripts/index.js"></script>
    <script src="../scripts/src/renderHTML.js"></script>
    </body>
    </html>`;

const generateManager = (teamMember) => {
    return `
    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${teamMember.getName()}</h2>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${teamMember.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="OfficeNumber">Office Number:${teamMember.getOfficeNumber()}</p></li>
    </ul>
    </div>
    </div>

    `;
};


    const generateEngineer = (teamMember) => {
    return `

    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${teamMember.getName()}</h2>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${teamMember.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="github">Github: <a href="https://github.com${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></p></li>
    </ul>
    </div>
    </div>

    `;
};

    const generateIntern= (teamMember) => {
{
    return `

    <div class ="card employee-card">
    <div class ="card-header">
    <h2 class =" card-title">${teamMember.getName()}</h2>
    </div>

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">
            <p class="id">ID: ${teamMember.getId()}</p></li>
        <li class="list-group-item">
            <p class="email">Email: <a href="email:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p></li>
        <li class="list-group-item">
            <p class="school">School: ${teamMember.getSchool()}</p></li>
    </ul>
    </div>
    </div>
    `;
};
    }
const renderHTML = (empolyeeArray => {
    renderTemp.push(generateTeamHTML);

    empolyeeArray.forEach((teamMember) => {
        
        switch (teamMember.getRole()) {
			case 'Manager':
                renderTemp.push(generateManager(teamMember));
				break;
			case 'Engineer':
                renderTemp.push(generateEngineer(teamMember));
				break;
			case 'Intern':
                renderTemp.push(generateIntern(teamMember));
                break;
            case 'I am done hiring':
                renderTemp.push(generateTeamHTML);
                break;
                default: return '';
        
    };
});
fs.writeFile('./index.html', renderTemp.toString(), (err) => {
    err ? console.error(err): 
    console.log('file has been created');
}); 
});
module.exports = renderHTML;
