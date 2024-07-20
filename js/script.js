// Typing text 
var typed = new Typed(".typing-text", {
    strings: ["Programmer", "Web Designer", "Front-End Developer", "Web Developer", "Full Stack Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
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


//   Emailjs functinality

(function () {
    emailjs.init({
        publicKey: "x7mChJU_ILda7yJjr",
    });
})();
function sendMail() {
    const params = {
        from_name: document.getElementById('fName').value,
        mobile: document.getElementById('num').value,
        email: document.getElementById('email').value,
        message: document.getElementById('msg').value
    }
    const serviceId = 'service_mjnfkmc'
    const templateId = 'template_mc7d234'

    emailjs.send(serviceId, templateId, params)
        .then(
            (response) => {

                const modal = document.getElementById("modal");
                const span = document.getElementsByClassName("close")[0];

                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }

            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
}
//////////////////////////////////
// scroll top
window.onscroll = function() {
    if (window.scrollY > 100) {
      document.querySelector('.scroll-top').classList.add('active');
    } else {
      document.querySelector('.scroll-top').classList.remove('active');
    }
  };

  


