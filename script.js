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

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;
        // Agregamos clase para la animación suave
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            saveTask();
        }, 300); // 300ms debe coincidir con la transición CSS
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
let isFocusMode = true;
let pomodoroCount = 0;
let timeLeft = 25 * 60; // 25 min in seconds

const alarmSound = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                // Toca el sonido
                alarmSound.play();
                
                if (isFocusMode) {
                    // Acabamos un ciclo de Focus
                    pomodoroCount++;
                    document.getElementById('cycle-counter').textContent = `🍅 Completados: ${pomodoroCount}`;
                    
                    // Cambiar a Break Automáticamente
                    isFocusMode = false;
                    document.body.classList.add('theme-break');
                    timeLeft = 10 * 60; // 10 MINUTOS INMEDIATOS
                    updateTimer();
                    
                    // Como no hemos hecho clearInterval(timer), el descanso arranca inmediatamente.
                } else {
                    // Acabamos un Break
                    clearInterval(timer);
                    timer = null;
                    alert("¡Descanso terminado! Volvamos al foco.");
                    resetTimer();
                }
                
            } else if (!isPaused) {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
    document.getElementById('pause-button').textContent = isPaused ? "Resume" : "Pause";
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = false;
    isFocusMode = true;
    
    document.getElementById('pause-button').textContent = "Pause";
    document.body.classList.remove('theme-break');
    
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
    isFocusMode = false;
    
    document.getElementById('pause-button').textContent = "Pause";
    document.body.classList.add('theme-break');
    
    timeLeft = 10 * 60;
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    document.getElementById('timer').textContent = formattedTime;
    
    // Título de la pestaña dinámico
    document.title = `(${formattedTime}) ${isFocusMode ? 'Focus' : 'Break'} - Pomodoro`;
}

// Handle Enter key press for adding tasks
inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

updateTimer();
