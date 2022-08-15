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
    

    module.exports = renderOutputHTML;
