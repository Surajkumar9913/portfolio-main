// Typing text 
var typed = new Typed(".typing-text",{
    strings : ["Programmer", "Web Developer", "Web Designer", "Front-End Developer","Full Stack Developer"],
    typeSpeed : 60,
    backSpeed : 40,
    loop : true
})
// Typing text end

// Toggle Navbar
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
// Toggle Navbar end


// tilt on image 
function tilt(event, element) {

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

  
    const tiltX = (mouseY / centerY) * 20;
    const tiltY = -(mouseX / centerX) * 20; 
  
    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
}
// tilt end


// Scroll Animation on element
AOS.init({
    offset: 200,
    duration: 800,
  });