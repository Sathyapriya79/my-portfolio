// ===============================
// Typing Animation
// ===============================




const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "B.Tech IT Student"
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;


const typingElement = document.querySelector(".hero-text h2 span");


function typeEffect() {

    const currentRole = roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {


        typingElement.textContent =
            currentRole.substring(0, charIndex--);


        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(typeEffect, deleting ? 50 : 100);

}


typeEffect();





// ===============================
// Scroll Reveal Animation
// ===============================


const cards = document.querySelectorAll(".card");


function revealCards(){

    cards.forEach(card => {


        const cardTop =
        card.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(cardTop < windowHeight - 100){

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";

        }


    });

}



window.addEventListener(
    "scroll",
    revealCards
);



revealCards();





// ===============================
// Navbar Background Change
// ===============================


const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,0.95)";

    }

    else{

        header.style.background =
        "transparent";

    }


});





// ===============================
// Active Navigation Link
// ===============================


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".nav-links a");



window.addEventListener(
"scroll",
()=>{


let current = "";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color = "white";


if(link.getAttribute("href")
=== "#" + current){


link.style.color =
"#38bdf8";


}


});


});






// ===============================
// Footer Year Update
// ===============================


const footer =
document.querySelector("footer p");


const year =
new Date().getFullYear();



footer.innerHTML =
`© ${year} Sathyapriya Rajkumar | Full Stack Developer`;






// ===============================
// Image Hover Effect
// ===============================


const profileImage =
document.querySelector(".hero-image img");



profileImage.addEventListener(
"mouseenter",
()=>{

profileImage.style.transform =
"scale(1.08)";

});



profileImage.addEventListener(
"mouseleave",
()=>{

profileImage.style.transform =
"scale(1)";

});
