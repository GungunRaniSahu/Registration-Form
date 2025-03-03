document.getElementById('bidderForm').addEventListener('submit', function (event) {
    event.preventDefault();  

    // Collect form data
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

    console.log("✅ Sending Data:", teamData); // Debugging

    // Fetch request to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbzCfP0QxqMRNdGQuLscty7u11mxtjAdWAnr84JNyWt5pQ2TkvhP8v1ONo_ipVCM_Byx/exec", {
        method: "POST",
        body: JSON.stringify(teamData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => {
        console.log("✅ Response from Google Script:", data); // Debugging

        if (data.includes("Success")) {
            document.getElementById('statusMessage').innerText = "✅ Team Registered Successfully!";
            document.getElementById('statusMessage').style.color = "green";
            document.getElementById('bidderForm').reset();
        } else {
            document.getElementById('statusMessage').innerText = "⚠️ Error: " + data;
            document.getElementById('statusMessage').style.color = "red";
        }
    })
    .catch(error => {
        console.error("❌ Fetch Error:", error);
        document.getElementById('statusMessage').innerText = "❌ Error registering team. Check console.";
        document.getElementById('statusMessage').style.color = "red";
    });
});
