let attendanceCount = 0;
let totalDays = 8;

function updateAttendance() {
    attendanceCount++;
    let percent = (attendanceCount / totalDays) * 100;
    document.getElementById("progress").style.width = percent + "%";
}

function submitFeedback() {
    let text = document.getElementById("feedback").value;
    alert("Feedback Submitted: " + text);
}

function goToAnalytics() {
    window.location.href = "analytics.html";
}

// Sample marks
let mid = 20, end = 50, prac = 15, cap = 10;

document.getElementById("mid").innerText = mid;
document.getElementById("end").innerText = end;
document.getElementById("prac").innerText = prac;
document.getElementById("cap").innerText = cap;

document.getElementById("total").innerText = mid + end + prac + cap;