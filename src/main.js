// Get the html elements
const sun = document.getElementById('sun');
const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturn = document.getElementById('saturn');
const uranus = document.getElementById('uranus');
const neptune = document.getElementById('neptune');

// Initialize angles for Planets
let angleMercury = 0;
let angleVenus = 0;
let angleEarth = 0;
let angleMoon = 0;
let angleMars = 0;
let angleJupiter = 0;
let angleSaturn = 0;
let angleUranus = 0;
let angleNeptune = 0;

// Function to animate the movement of planets
function animate() {
    // Update angles to simulate planet rotation
    angleMercury += 1 * 10;
    angleVenus += 0.26 * 10;
    angleEarth += 0.24 * 10;
    angleMoon += 2.88 * 10;
    angleMars += 0.39 * 10;
    angleJupiter += 0.02 * 10;
    angleSaturn += 0.008 * 10;
    angleUranus += 0.003 * 10;
    angleNeptune += 0.001 * 10;
    

    // Apply CSS to rotate and position the planets
    mercury.style.transform = `translate(-50%, -50%) rotate(${angleMercury}deg) translate(30px)`;
    venus.style.transform = `translate(-50%, -50%) rotate(${angleVenus}deg) translate(60px)`;
    earth.style.transform = `translate(-50%, -50%) rotate(${angleEarth}deg) translate(110px)`;
    moon.style.transform = `translate(-50%, -50%) rotate(${angleMoon}deg) translate(25px)`;
    mars.style.transform = `translate(-50%, -50%) rotate(${angleMars}deg) translate(170px)`;
    jupiter.style.transform = `translate(-50%, -50%) rotate(${angleJupiter}deg) translate(220px)`;
    saturn.style.transform = `translate(-50%, -50%) rotate(${angleSaturn}deg) translate(285px)`;
    uranus.style.transform = `translate(-50%, -50%) rotate(${angleUranus}deg) translate(350px)`;
    neptune.style.transform = `translate(-50%, -50%) rotate(${angleNeptune}deg) translate(400px)`;

    // Set timeout for 20ms for the next animation
    setTimeout(animate, 20);

    // Request next animation frame to keep the animation smooth
    // requestAnimationFrame(animate);
}

// Start the animation
animate();

