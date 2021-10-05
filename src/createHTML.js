const createManager = (manager) => {
      return `<div class="card mx-5" style="width: 18rem">
        <div class="card-header bg-primary text-white h2">
          ${manager.name}
          <br />
          Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${manager.email}">${manager.email}</a>
          </li>
          <li class="list-group-item">${manager.office}</li>
        </ul>
      </div>`;
}

const createEngineer = (engineer) => {
      return `<div class="card mx-5" style="width: 18rem">
        <div class="card-header bg-primary text-white h2">
          ${engineer.name}
          <br />
          Engineer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
          </li>
          <li class="list-group-item">${engineer.github}</li>
        </ul>
      </div>`;
}

const createIntern = (intern) => {
      return `<div class="card mx-5" style="width: 18rem">
        <div class="card-header bg-primary text-white h2">
          ${intern.name}
          <br />
          Intern
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${intern.email}">${intern.email}</a>
          </li>
          <li class="list-group-item">${intern.school}</li>
        </ul>
      </div>`;
}

function generateHTML(data) {
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

module.exports = generateHTML;



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
    <div class="jumbotron jumbotron-fluid bg-danger text-white">
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