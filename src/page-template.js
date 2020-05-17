// create Manager card
generateManager = (manager) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <p>Manager</p>
        </div>

        <div class="card-body text-dark">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">
            <p class="id">ID: ${manager.id}</p>
            <p class="email>Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
            </p>
        </div>
    </div>
    `
}

// create Engineer card
generateEngineer = (engineer) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <p>Engineer</p>
        </div>

        <div class="card-body text-dark">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github:<a href="https://github.com/${engineer.github}"</a></p>
            </p>
        </div>
    </div>
    `
}

// create Intern card 
generateIntern = (intern) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <p>Intern</p>
        </div>

        <div class="card-body text-dark">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">
            <p class="id">ID: ${intern.id}</p>
            <p class="email>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="github">Github: ${intern.github}</p>
            </p>
        </div>
    </div>
    `
};

generateHTML = (data) => {

    // array for cards 
    teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamArray.push(internCard);
        }
        
    }

    const employeeCards = teamArray.join('')

    // return to generated page
    generateTeam = generateHTML(employeeCards); 
    return employeeCards;


}

// generate html page 
generatePage = (employeeCards) => {   
  return`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>

    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>

        <main>
            <div class="container">
                <div class="row" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>

`;
}
