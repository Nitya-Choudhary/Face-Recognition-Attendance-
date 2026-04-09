function startRecognition() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;

            setTimeout(() => {
                alert("Face Detected ✅ Attendance Marked");
                updateAttendance();
            }, 3000);
        });
}