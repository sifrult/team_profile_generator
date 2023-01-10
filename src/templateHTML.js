

const renderTeam = (team) => {
    const renderManager = (manager) => {
        return `    <div id="card">
        <div id="card-title" class="manager">
            <h2>${manager.name}</h2>
            <p>Manager</p>
        </div>
        <div id="card-info">
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>Office number ${manager.officeNumber}</p>
        </div>
    </div>`
    };

    const renderEngineer = (engineer) => {
        return `${engineer.name}`
    }


    const renderIntern = (intern) => {
        return `${intern.name}`
    }

    // After creating cards, join them all together in an array
    html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)))
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)))
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)))

    return html;
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
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="employees">${renderTeam(team)}</div>
</body>
</html>`

module.exports = renderWholeTeam;
