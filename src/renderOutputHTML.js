const renderOutputHTML = function(manager)
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
    <P class="email">Email: <a href="email:${manager.email}">${manager.email}</a></p>
    </div>
    </div>
    </div> 
    `;}

    module.exports = renderOutputHTML;
