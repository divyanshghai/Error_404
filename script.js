// Generate stars
const starsContainer = document.querySelector('.stars');
const starCount = 100;

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

// Glitter trail effect
document.addEventListener('mousemove', function(e) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';

    // Position glitter at cursor
    glitter.style.left = `${e.clientX}px`;
    glitter.style.top = `${e.clientY}px`;

    // Random color
    const colors = ['#0ff0fc', '#ff00ff', '#00ff87', '#f700ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    glitter.style.background = color;

    // Random size
    const size = Math.random() * 10 + 5;
    glitter.style.width = `${size}px`;
    glitter.style.height = `${size}px`;

    document.body.appendChild(glitter);

    // Remove after animation completes
    setTimeout(() => {
        glitter.remove();
    }, 2000);
});
