// Function to handle form submission and store team data
document.getElementById('bidderForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent page refresh on form submission

    // Retrieve form data
    const teamName = document.getElementById('teamName').value;
    const leaderName = document.getElementById('leaderName').value;
    const leaderContact = document.getElementById('leaderContact').value;
    const leaderDept = document.getElementById('leaderDept').value;
    const leaderSem = document.getElementById('leaderSem').value;
    const member1 = document.getElementById('member1').value;
    const member1Dept = document.getElementById('member1Dept').value;
    const member1Sem = document.getElementById('member1Sem').value;
    const member2 = document.getElementById('member2').value;
    const member2Dept = document.getElementById('member2Dept').value;
    const member2Sem = document.getElementById('member2Sem').value;
    const member3 = document.getElementById('member3').value;
    const member3Dept = document.getElementById('member3Dept').value;
    const member3Sem = document.getElementById('member3Sem').value;

    // Create team object
    const teamData = {
        teamName: teamName,
        leaderName: leaderName,
        leaderContact: leaderContact,
        leaderDept: leaderDept,
        leaderSem: leaderSem,
        members: [
            { name: member1, dept: member1Dept, sem: member1Sem },
            { name: member2, dept: member2Dept, sem: member2Sem },
            { name: member3, dept: member3Dept, sem: member3Sem }
        ]
    };

    // Retrieve existing teams from localStorage, or create a new array if none exist
    let teams = JSON.parse(localStorage.getItem('teams')) || [];

    // Add the new team to the array
    teams.push(teamData);

    // Save the updated teams array back to localStorage
    localStorage.setItem('teams', JSON.stringify(teams));

    // Display the updated teams on the page
    displayTeams();

    // Optionally, show a confirmation message
    document.getElementById('statusMessage').innerText = 'Team Registered Successfully!';

    // Reset the form
    document.getElementById('bidderForm').reset();
});

// Function to display teams stored in localStorage
function displayTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    const registeredTeamsSection = document.getElementById('registeredTeamsSection');
    registeredTeamsSection.innerHTML = '<h3>Registered Teams</h3>';

    // Display each team
    teams.forEach(function(team, index) {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');

        let teamHtml = `
            <h4>Team: ${team.teamName}</h4>
            <p><strong>Leader:</strong> ${team.leaderName} (Contact: ${team.leaderContact}, Dept: ${team.leaderDept}, Sem: ${team.leaderSem})</p>
            <h5>Members:</h5>
            <ul>
                <li>${team.members[0].name} - ${team.members[0].dept} (Sem: ${team.members[0].sem})</li>
                <li>${team.members[1].name} - ${team.members[1].dept} (Sem: ${team.members[1].sem})</li>
                <li>${team.members[2].name} - ${team.members[2].dept} (Sem: ${team.members[2].sem})</li>
            </ul>
        `;

        teamDiv.innerHTML = teamHtml;
        registeredTeamsSection.appendChild(teamDiv);
    });
}

// Function to handle the 'Clear Data' button click
document.getElementById('clearDataBtn').addEventListener('click', function () {
    // Clear data from localStorage
    localStorage.removeItem('teams');

    // Clear the teams displayed on the page
    displayTeams();

    // Optionally, show a message indicating the data was cleared
    document.getElementById('statusMessage').innerText = 'All data has been cleared!';
});

// Display the teams when the page loads (if there are any teams in localStorage)
document.addEventListener('DOMContentLoaded', displayTeams);
