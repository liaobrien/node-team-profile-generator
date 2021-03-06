const createManager = (manager) => {
  return `<div class="card mx-5 my-3" style="width: 18rem">
        <div class="card-header bg-info text-white h2">
          ${manager.name}
          <br />
          <i class="fas fa-mug-hot"></i> Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${manager.email}">${manager.email}</a>
          </li>
          <li class="list-group-item">Office: ${manager.office}</li>
        </ul>
      </div>`;
}

const createEngineer = (engineer) => {
  return `<div class="card mx-5 my-3" style="width: 18rem">
        <div class="card-header bg-info text-white h2">
          ${engineer.name}
          <br />
          <i class="fas fa-glasses"></i> Engineer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
          </li>
          <li class="list-group-item">GitHub: <a href="http://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>`;
}

const createIntern = (intern) => {
  return `<div class="card mx-5 my-3" style="width: 18rem">
        <div class="card-header bg-info text-white h2">
          ${intern.name}
          <br />
          <i class="fas fa-user-graduate"></i> Intern
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${intern.email}">${intern.email}</a>
          </li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>`;
}

function generateCards(data) {
  cardsArr = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createManager(employee);

      cardsArr.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);

      cardsArr.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = createIntern(employee);

      cardsArr.push(internCard);
    }
  }

  const teamCards = cardsArr.join('');

  const createTeam = createHTMLPage(teamCards)
  return createTeam;
}

module.exports = generateCards;



function createHTMLPage(teamCards) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-dark text-white">
      <div class="container">
        <h1 class="display-4 text-center">My Team</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      ${teamCards}
    </div>
  </body>
</html>`;
}