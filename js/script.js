var typed = new Typed(".typing-text",{
    strings : ["Programmer", "Web Developer", "Web Designer", "Front-End Developer","Full Stack Developer"],
    typeSpeed : 60,
    backSpeed : 40,
    loop : true
})

document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  });

function tilt(event, element) {
    // Get the center of the element
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the mouse position relative to the center of the element
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Calculate the rotation angles
    const tiltX = (mouseY / centerY) * 20; // Adjust 5 for sensitivity
    const tiltY = -(mouseX / centerX) * 20; // Adjust 5 for sensitivity

    // Apply the tilt effect
    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
}