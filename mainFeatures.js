function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

// Listener for Konami Code
document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0; // Reset index for reactivation
        }
    } else {
        konamiIndex = 0; // Reset index if sequence is broken
    }
});

// Function to activate the Easter Egg (clicker game)
function activateEasterEgg() {
    const gameDiv = document.createElement('div');
    gameDiv.id = 'clickerGame';
    gameDiv.style.position = 'fixed';
    gameDiv.style.bottom = '20px';
    gameDiv.style.right = '20px';
    gameDiv.style.padding = '10px';
    gameDiv.style.backgroundColor = 'lightgrey';
    gameDiv.style.borderRadius = '5px';
    gameDiv.style.textAlign = 'center';
    gameDiv.innerHTML = `
        <p>Clicker Game! Score: <span id="score">0</span></p>
        <button id="clickerBtn">Click Me!</button>
    `;

    document.body.appendChild(gameDiv);

    const clickerBtn = document.getElementById('clickerBtn');
    let score = 0;

    clickerBtn.addEventListener('click', () => {
        score++;
        document.getElementById('score').innerText = score;
    });
}

