

const renderTeam = (team) => {
    const renderManager = (manager) => {
        return `    <div id="card">
        <div id="card-title" class="manager">
            <h2>${manager.name}</h2>
            <p>> Manager</p>
        </div>
        <div id="card-info">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office number: ${manager.officeNumber}</p>
        </div>
    </div>`
    };

    const renderEngineer = (engineer) => {
        return `    <div id="card">
        <div id="card-title" class="engineer">
            <h2>${engineer.name}</h2>
            <p>> Engineer</p>
        </div>
        <div id="card-info">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></p>
        </div>
    </div>`
    }


    const renderIntern = (intern) => {
        return `    <div id="card">
        <div id="card-title" class="intern">
            <h2>${intern.name}</h2>
            <p>> Intern</p>
        </div>
        <div id="card-info">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>`
    }

    // After creating cards, join them all together in an array
    html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)).join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)).join(""))

    return html.join("");
}

const renderWholeTeam = (team) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Mukta+Malar&display=swap" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="employees">
        ${renderTeam(team)}
    </div>
</body>
</html>`

module.exports = renderWholeTeam;
