const video = document.getElementById('video');

function startRecognition() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Camera permission denied!");
            console.error(err);
        });
}