// Typing Animation

const text =
"Computer Science Student | Aspiring Software Developer | DSA & Web Development Enthusiast";

let index = 0;

function typeText() {

    const typingElement =
    document.getElementById("typing-text");

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 50);
    }
}

window.addEventListener("load", () => {
    typeText();
});


// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".card, .education-card, .project-card, .skill-card"
);

function revealOnScroll() {

    const windowHeight =
    window.innerHeight;

    revealElements.forEach((element) => {

        const position =
        element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";
        }
    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// Mobile Menu

const menuButton =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuButton){

    menuButton.addEventListener(
    "click",
    () => {

        if(navLinks.style.display === "flex"){

            navLinks.style.display = "none";

        }else{

            navLinks.style.display = "flex";

            navLinks.style.flexDirection =
            "column";

            navLinks.style.position =
            "absolute";

            navLinks.style.top = "80px";

            navLinks.style.right = "20px";

            navLinks.style.background =
            "#0f172a";

            navLinks.style.padding =
            "20px";

            navLinks.style.borderRadius =
            "12px";
        }
    });
}


// Contact Form Demo

const form =
document.querySelector(".contact-form");

if(form){

    form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        alert(
        "Thank you for contacting me! I will get back to you soon."
        );

        form.reset();
    });
}