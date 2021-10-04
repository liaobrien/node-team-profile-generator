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