const video = document.getElementById('video');

function startRecognition() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;

            setTimeout(() => {
                markAttendance();
            }, 3000);
        });
}

function markAttendance() {
    db.collection("attendance").add({
        studentId: auth.currentUser.uid,
        timestamp: new Date()
    });

    alert("Attendance Marked");
}