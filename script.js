const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');

// Move No button to a random position on click or hover
function moveNoButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// Show full screen message when Yes button is clicked
yesBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    message.style.display = 'block';
});
