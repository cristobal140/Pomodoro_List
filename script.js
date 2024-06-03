// To-Do List
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Ingresa una tarea!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// Pomodoro Timer
let timer;
let isPaused = false;
let timeLeft = 25 * 60; // 25*60=25 min in seconds

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                alert("Se acabo el tiempo!");
            } else if (!isPaused) {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = false;
    timeLeft = 25 * 60;
    updateTimer();
}

function plusTimer() {
    timeLeft += 60;
    updateTimer();
}
function lessTimer() {
    if (timeLeft > 60) {
        timeLeft -= 60;
    } else {
        timeLeft = 0;
    }
    updateTimer();
}
function breakTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = false;
    timeLeft = 5 * 60;
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Handle Enter key press for adding tasks
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
updateTimer();

