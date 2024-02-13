let points = 0;
let autoClickers = 0;

function updateDisplay() {
    document.getElementById('score').innerText = `Points: ${points}`;
}

document.getElementById('earn-points').addEventListener('click', () => {
    points += 1;
    updateDisplay();
});

document.getElementById('buy-auto-clicker').addEventListener('click', () => {
    if (points >= 50) {
        points -= 50;
        autoClickers += 1;
        updateDisplay();
        document.getElementById('buy-auto-clicker').innerText = `Buy Auto-Clicker (50 Points) - Owned: ${autoClickers}`;
    }
});

setInterval(() => {
    points += autoClickers;
    updateDisplay();
}, 1000);

updateDisplay();