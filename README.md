# 🍅 Pomodoro & To-Do List



https://github.com/user-attachments/assets/b9403011-6da0-4faf-ac46-6b6aa954500a




## 🧐 ¿Qué es y qué problema soluciona?
Esta es una aplicación web de productividad que combina dos herramientas fundamentales: **La Técnica Pomodoro** (un método de gestión de tiempo mediante bloques de 25 minutos seguidos de descansos de 10 minutos) y una **Lista de Tareas (To-Do List)**. 

El proyecto busca resolver problemas comunes de procrastinación, agotamiento mental rápido y desorganización diaria. Ayuda a los usuarios a aislar en qué deben trabajar, mantener el enfoque bloqueando distracciones y asegurar que sus mentes tomen la pausa necesaria para continuar siendo productivos durante todo el día de forma sostenible.

## 🛠️ Estructura y Tecnologías
La aplicación está construida usando tecnologías web estándar, sin necesidad de frameworks de terceros (Vanilla):

*   **HTML (`index.html`):** El "esqueleto" de la interfaz. Define toda la estructura básica como dónde se ubica el cronómetro de tiempo, los botones de interacción y la sección donde aparecerá nuestra lista dinámica de tareas.
*   **CSS (`style.css`):** La "piel" o capa visual. Emplea técnicas modernas de diseño UI (como *Glassmorphism*, fondos con degradados suaves, bordes redondeados y animaciones de transición) para crear una interfaz amable, minimalista y que diferencie por color un estado de máximo enfoque mental vs descanso.
*   **JavaScript (`script.js`):** El "cerebro" detrás de la aplicación. Es el encargado de poner en marcha la lógica matemática del temporizador, alternar automáticamente los ciclos, emitir alertas de sonido y hacer que nuestro To-Do list tenga vida (permitiendo crear, completar y eliminar ítems, así como preservarlos usando el almacenamiento local del navegador para no perderlos si cerramos el sitio por error).

## 🚀 Cómo correr el proyecto localmente

Para poder utilizar o modificar el proyecto en tu propia máquina, sigue estos sencillos pasos:

1. Abre tu terminal de comandos (CMD, PowerShell o Terminal).
2. Ingresa a la carpeta donde ubicaste o clonaste el proyecto:
   ```bash
   cd ruta/a/tu/Pomodoro_List
   ```
3. Utilizaremos el servidor local integrado de Python para servir la página correctamente. Ejecuta el comando:
   ```bash
   python -m http.server 8000 --bind 127.0.0.1
   ```
4. Abre tu navegador web principal y ve al siguiente enlace:
   [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🌟 Características Principales (Features)
- Cambio dinámico de interfaz (Modo Focus índigo vs Modo Brake turquesa).
- Animaciones fluidas al completar y eliminar tareas del To-Do.
- Título dinámico de pestaña del explorador (siempre vez tu tiempo pendiente).
- Timbre o sonido de alerta al completar una sesión.
- Guardado local de pendientes (Local Storage).
