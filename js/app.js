auth.onAuthStateChanged(user => {
    if (user) {
        loadAssignments();
        loadAttendance();
    }
});

async function loadAssignments() {
    const container = document.getElementById("assignments");
    container.innerHTML = "<h3>Assignments</h3>";

    const snapshot = await db.collection("assignments").get();

    snapshot.forEach(doc => {
        const data = doc.data();

        const div = document.createElement("div");
        div.innerHTML = `
            ${data.title}
            <button onclick="submitAssignment('${doc.id}')">Submit</button>
        `;

        container.appendChild(div);
    });
}

function submitAssignment(id) {
    alert("Uploading (dummy for now)");
}

async function loadAttendance() {
    const user = auth.currentUser;

    const snapshot = await db.collection("attendance")
        .where("studentId", "==", user.uid)
        .get();

    let percent = (snapshot.size / 30) * 100;

    document.getElementById("progress").style.width = percent + "%";
}

function submitFeedback() {
    const text = document.getElementById("feedback").value;

    db.collection("feedback").add({
        user: auth.currentUser.uid,
        message: text
    });

    alert("Submitted");
}