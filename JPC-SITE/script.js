const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom =
        document.querySelector("#nom").value;
        const email =
        document.querySelector("#email").value;
        const message =
        document.querySelector("#message").value;
        const numeroWhatsApp ="243823873794";
        const texte =
        "Bonjour JPC, %0A%0A" + "Je suis " + 
        encodeURIComponent(nom) + "%0A" + "Email : " +
        encodeURIComponent(email) + "%0A%0A" + "Message : %0A" +
        encodeURIComponent(message);

        const urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + texte;
        window.location.href = urlWhatsApp;
        contactForm.reset();

    });
}

const eventButtons =
document.querySelectorAll(".event-btn");
const eventModal =
document.querySelector("#eventModal");
const closeModal =
document.querySelector("#closeModal");
const modalTitle =
document.querySelector("#modalTitle");
const modalDate =
document.querySelector("#modalDate");
const modalTime =
document.querySelector("#modalTime");
const modalLocation =
document.querySelector("#modalLocation");

eventButtons.forEach(button => {
    button.addEventListener("click", function(event){
        event.preventDefault();
        const eventName =
        this.dataset.event;

        if (eventName === "culte") {
            modalTitle.textContent = "Culte de jeunesse";
            modalDate.textContent = "Date : 19 septembre";
            modalTime.textContent = "Heure : 15h 30";
            modalLocation.textContent = "Lieu : Kinshasa";
        }    
        if (eventName === "etude") {
            modalTitle.textContent = "Etude biblique";
            modalDate.textContent = "Date : 26 septembre";
            modalTime.textContent = "Heure : 11h 00";
            modalLocation.textContent = "Lieu : Kinshasa";
        }
        if (eventName === "evangelisation") {
            modalTitle.textContent = "Evangélisation";
            modalDate.textContent = "Date : 20 décembre";
            modalTime.textContent = "Heure : 11h30";
            modalLocation.textContent = "Lieu : Kinshasa";
        }
        eventModal.classList.add("active");
    });
});

closeModal.addEventListener("click", () =>{
    eventModal.classList.remove("active");
});

eventModal.addEventListener("click", (event) =>{
    if (event.target === eventModal){
        eventModal.classList.remove("active");
    }
});

const backToTop =
document.querySelector("#backToTop");
window.addEventListener("scroll", () => {
    if(window.scrollY > 2200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none"
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



const galleryItems =
document.querySelectorAll(".gallery-item");

const galleryModal =
document.querySelector("#galleryModal");

const galleryImage = 
document.querySelector("#galleryImage");

const closeGallery =
document.querySelector("#closeGallery");

galleryItems.forEach(item => {
    item.addEventListener("click", function() {
            const image =
            this.querySelector("img");
            galleryImage.src = image.src;
            galleryImage.alt = image.alt;

galleryModal.classList.add("active");
    });
});
closeGallery.addEventListener("click", () => {
galleryModal.classList.remove("active");
});
galleryModal.addEventListener("click",
(event) => {
    if (event.target === galleryModal) {
galleryModal.classList.remove("active");
   }     
});
