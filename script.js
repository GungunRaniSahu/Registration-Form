// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase configuration (Get this from Firebase Console → Project Settings)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClTme0CLQU5c5pfGRNWeBC3igbLzeXaxg",
    authDomain: "registration-form-54ff0.firebaseapp.com",
    projectId: "registration-form-54ff0",
    storageBucket: "registration-form-54ff0.firebasestorage.app",
    messagingSenderId: "855301623420",
    appId: "1:855301623420:web:0158aeaf98def479c8c3f9",
    measurementId: "G-B8RZS782RR"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded!");

    document.getElementById('bidderForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        console.log("✅ Register Button Clicked!");

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

        console.log("✅ Sending Data to Firebase:", teamData);

        try {
            await addDoc(collection(db, "teams"), teamData);
            console.log("✅ Data Saved in Firebase!");
            document.getElementById('statusMessage').innerText = "✅ Team Registered Successfully!";
            document.getElementById('statusMessage').style.color = "green";
            document.getElementById('bidderForm').reset();
        } catch (error) {
            console.error("❌ Firebase Error:", error);
            document.getElementById('statusMessage').innerText = "❌ Error registering team. Check console.";
            document.getElementById('statusMessage').style.color = "red";
        }
    });
});
