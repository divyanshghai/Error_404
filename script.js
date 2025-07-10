// Generate stars
const starsContainer = document.querySelector('.stars');
const starCount = 30;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random positioning
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation properties
    star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
    star.style.setProperty('--opacity', `${Math.random() * 0.7 + 0.3}`);

    starsContainer.appendChild(star);
}

// Star glitter effect
let lastMove = 0;
document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastMove < 100) return; // Throttle to every 100ms
    lastMove = now;
    const glitter = document.createElement('div');
    glitter.className = 'star-glitter';

    // Position glitter at cursor with random rotation
    glitter.style.left = `${e.clientX - 10}px`;
    glitter.style.top = `${e.clientY - 10}px`;
    glitter.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(glitter);

    // Remove after animation completes
    setTimeout(() => {
        glitter.remove();
    }, 1000);
});
