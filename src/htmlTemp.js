const theTeam = team => {

const theManager = manager => {
  return `  <container class = "d-flex justify-content-evenly">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2>${manager.getName()}</h2>
        <h4>${manager.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item">${manager.getEmail()}</li>
        <li class="list-group-item">${manager.getNumber()}</li>
      </ul>
    </div>      
</container>`
}

const theEngineer = engineer => {
  return `  <container class = "d-flex justify-content-evenly">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2>${engineer.getName()}</h2>
        <h4>${engineer.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.getId()}</li>
        <li class="list-group-item">${engineer.getEmail()}</li>
        <li class="list-group-item">${engineer.getGit()}</li>
      </ul>
    </div>      
</container>`
}

const theIntern = intern => {
  return `  <container class = "d-flex justify-content-evenly">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2>${intern.getName()}</h2>
        <h4>${intern.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">${intern.getEmail()}</li>
        <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
    </div>      
</container>`
}
const wholeTeam = []

      wholeTeam.push(team.map(manager => theManager(manager)))
      wholeTeam.push(team.map(engineer => theEngineer(engineer)))
      wholeTeam.push(team.map(intern => theIntern(intern)))

      return wholeTeam.join('')

}

module.exports = team => {

return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <header class = "jumbotron bg-info d-flex justify-content-center">
        <h1 class = 'text-light'>The Team</h1>
    </header>
    <div class = "flex-direction-row>
    ${theTeam(team)}
    <div>
</body>
</html>`
}