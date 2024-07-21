let sections = document.querySelectorAll('.dependables');
let navLinks = document.querySelectorAll('header nav a');
// let confettiButton = document.getElementById('confetti-button')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
};


document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;

    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
    confetti_button({
        particleCount: 200,
        spread: 200,
        startVelocity: 15,
        scalar: 0.9,
        ticks: 90
    })
});




let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

let typed = new Typed(".input", {
    strings: [
        "A Frontend Developer",
        "A React Enthusiast",
        "A Next.js Specialist",
        "A TypeScript Advocate",
        "Experienced with Firebase"
    ],
    typeSpeed: 60, // Slightly faster typing
    backSpeed: 40, // Slightly slower backspacing
    backDelay: 1000, // Delay before starting to delete text
    startDelay: 500, // Delay before starting typing
    loop: true
});


    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 25,
        speed: 400
    });

