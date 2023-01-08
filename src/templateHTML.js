

const renderTeam = (team) => {
   const renderManager = (manager) => {
        return `${manager.name}`
    };

    html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)))



return html;
}

const renderWholeTeam = (team) => `${renderTeam(team)}`
module.exports = renderWholeTeam;
