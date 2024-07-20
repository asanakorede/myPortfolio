let sections = document.querySelectorAll('.dependables');
let navLinks = document.querySelectorAll('header nav a');

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
    backSpeed: 40,  // Slightly slower backspacing
    backDelay: 1000, // Delay before starting to delete text
    startDelay: 500, // Delay before starting typing
    loop: true
});



