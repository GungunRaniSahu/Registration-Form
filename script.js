document.getElementById('bidderForm').addEventListener('submit', function (event) {
    event.preventDefault();  

    const teamData = {
        teamName: document.getElementById('teamName').value,
        leaderName: document.getElementById('leaderName').value,
        leaderContact: document.getElementById('leaderContact').value,
        leaderDept: document.getElementById('leaderDept').value,
        leaderSem: document.getElementById('leaderSem').value,
        members: [
            { name: document.getElementById('member1').value, dept: document.getElementById('member1Dept').value, sem: document.getElementById('member1Sem').value },
            { name: document.getElementById('member2').value, dept: document.getElementById('member2Dept').value, sem: document.getElementById('member2Sem').value },
            { name: document.getElementById('member3').value, dept: document.getElementById('member3Dept').value, sem: document.getElementById('member3Sem').value }
        ]
    };

    fetch("https://script.google.com/macros/s/AKfycbwMOBpauCWPklwp_GKCsSHMn4inf8l9K6Mqp90yIjfolZb0oWjci7HI8EvusfIw__Dt/exec", {
        method: "POST",
        body: JSON.stringify(teamData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('statusMessage').innerText = "Team Registered Successfully!";
        document.getElementById('bidderForm').reset();
    })
    .catch(error => console.error("Error:", error));
});
