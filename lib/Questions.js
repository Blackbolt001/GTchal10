const managerQuestions = [
 
    {
        type:'list',
        name:'manager_name',
        message: ' What is the Team Managers Name?'
    },
    {
        type:'input',
        name:'manager_id',
        message:'Please assign an Employee ID'
    },
    { 
        type:'input',
        name: 'manager_email',
        message :'Please create/designate Managers Email'
    },
        {
            type:'input',
            name:'manager_number',
            message :'please designate an office number for the Manager'
    }];

    const teamMemberQuestions = [

    {
        type:'checkbox',
        name:'new_member',
        message:' Which new Team member would you like to hire first?',
        choices: ["Engineer", "Intern"]
    }];

    const engineerQuestions = [

    { 
        type:'input',
        name:'engineer_name',
        message: ' What is the Team Engineers Name?'
    },
    {
        type:'input',
        name:'engineer_id',
        message:'Please assign an Employee ID'
    },
    { 
        type:'input',
        name: 'engineer_email',
        message :'Please create/designate Engineers Email'
    },
    {
        type:'input',
        name:"engineer_github",
        message:"Please enter your Github User name."
     }];

     const internQuestions = [
     {
        
            type:'input',
            name:'intern_name',
            message: ' What is the Interns Name?'
        },
        {
            type:'input',
            name:'intern_id',
            message:'Please assign an Employee ID'
        },
        { 
            type:'input',
            name: 'intern_email',
            message :'Please create/designate the Interns Email'
        },
        { 
             type:'input',
            name:'intern_school',
        message:'What School is your internship from?',
        }];

        module.exports = {
            managerQuestions,teamMemberQuestions,engineerQuestions,internQuestions};
        

